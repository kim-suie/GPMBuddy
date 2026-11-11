const multer = require("multer");
const ApiError = require("../utils/ApiError");

// 500KB per image: at this size, 500+ faculty photos still leave
// comfortable headroom under Atlas's free-tier 512MB total storage
// cap, alongside the rest of the app's data.
const MAX_IMAGE_SIZE_BYTES = 500 * 1024;
const ALLOWED_MIME_TYPES = ["image/jpeg", "image/png", "image/webp"];

// A facility can have at most this many photos. Facilities store their
// photos the same way faculty do (bytes inside the MongoDB document),
// so the cap also bounds how much of the free-tier storage one
// facility can use: 3 x 500KB = 1.5MB worst case.
const MAX_FACILITY_IMAGES = 3;

// Memory storage, not disk storage: the file never touches the
// server's filesystem, it arrives as req.file.buffer. That's the
// whole point — this app's filesystem is ephemeral (hosted
// elsewhere, wiped on redeploy), but MongoDB Atlas storage persists,
// so the image bytes go straight into the database instead.
const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
    if (!ALLOWED_MIME_TYPES.includes(file.mimetype)) {
        return cb(new ApiError(400, "Only JPEG, PNG, or WEBP images are allowed!"));
    }
    cb(null, true);
};

const upload = multer({
    storage,
    fileFilter,
    limits: { fileSize: MAX_IMAGE_SIZE_BYTES }
});

// req.file.fieldname === fieldName after this runs; req.file.buffer
// and req.file.mimetype are what the controller turns into the
// stored { data, contentType } shape.
const createImageUploader = (fieldName) => upload.single(fieldName);

// Several files under ONE field name (req.files is an array). multer
// reports its own limit violations as MulterError objects with a
// `code`, which would otherwise reach the client as a confusing
// generic error — translated here into clear 400s.
const createMultiImageUploader = (fieldName, maxCount) => {

    const middleware = upload.array(fieldName, maxCount);

    return (req, res, next) => {
        middleware(req, res, (error) => {

            if (!error) {
                return next();
            }

            if (error.code === "LIMIT_UNEXPECTED_FILE") {
                return next(new ApiError(400, `You can upload at most ${maxCount} images.`));
            }

            if (error.code === "LIMIT_FILE_SIZE") {
                return next(new ApiError(400, `Each image must be ${Math.round(MAX_IMAGE_SIZE_BYTES / 1024)}KB or smaller.`));
            }

            return next(error);
        });
    };
};

module.exports = {
    createImageUploader,
    createMultiImageUploader,
    MAX_IMAGE_SIZE_BYTES,
    MAX_FACILITY_IMAGES
};