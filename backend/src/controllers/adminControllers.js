const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Admins = require("../models/admin");
const ApiError = require("../utils/ApiError");

const RESERVED_COLLECTIONS = new Set([
    "admins",
    "admin",
    "system.users",
    "system.profile"
]);

const getCollectionName = (name) => {
    if (!name || typeof name !== "string") {
        throw new ApiError(400, "Collection name is required");
    }

    const collectionName = name.trim().toLowerCase();

    if (!/^[a-zA-Z0-9_-]+$/.test(collectionName)) {
        throw new ApiError(400, "Invalid collection name");
    }

    if (RESERVED_COLLECTIONS.has(collectionName)) {
        throw new ApiError(403, "This collection cannot be accessed");
    }

    return collectionName;
};

const serializeDocument = (doc) => ({
    ...doc,
    id: doc._id?.toString(),
    _id: doc._id?.toString()
});

// GET /api/admin/dashboard
exports.getDashboard = async (req, res) => {
    const collections = await mongoose.connection.db
        .listCollections()
        .toArray();

    const safeCollections = collections
        .map((collection) => collection.name)
        .filter((name) => !RESERVED_COLLECTIONS.has(name));

    const result = await Promise.all(
        safeCollections.map(async (name) => {
            const collection = mongoose.connection.db.collection(name);
            const count = await collection.countDocuments();

            return {
                name,
                count
            };
        })
    );

    res.status(200).json({
        success: true,
        data: {
            database: mongoose.connection.name,
            collections: result,
            totalRecords: result.reduce(
                (total, collection) => total + collection.count,
                0
            )
        }
    });
};


// GET /api/admin/collections
exports.getCollections = async (req, res) => {
    const collections = await mongoose.connection.db
        .listCollections()
        .toArray();

    const result = [];

    for (const collectionInfo of collections) {
        if (RESERVED_COLLECTIONS.has(collectionInfo.name)) {
            continue;
        }

        const collection = mongoose.connection.db.collection(
            collectionInfo.name
        );

        const count = await collection.countDocuments();

        result.push({
            name: collectionInfo.name,
            count
        });
    }

    res.status(200).json({
        success: true,
        data: result
    });
};


// GET /api/admin/collections/:collection
exports.getCollectionData = async (req, res) => {
    const collectionName = getCollectionName(req.params.collection);

    const collection = mongoose.connection.db.collection(collectionName);

    const documents = await collection
        .find({})
        .sort({ _id: -1 })
        .limit(500)
        .toArray();

    res.status(200).json({
        success: true,
        data: documents.map(serializeDocument)
    });
};


// POST /api/admin/collections/:collection
exports.createDocument = async (req, res) => {
    const collectionName = getCollectionName(req.params.collection);

    if (
        !req.body ||
        typeof req.body !== "object" ||
        Array.isArray(req.body)
    ) {
        throw new ApiError(400, "Document data is required");
    }

    const document = { ...req.body };

    delete document._id;
    delete document.id;

    const collection = mongoose.connection.db.collection(collectionName);

    const result = await collection.insertOne(document);

    const createdDocument = await collection.findOne({
        _id: result.insertedId
    });

    res.status(201).json({
        success: true,
        message: "Document created successfully",
        data: serializeDocument(createdDocument)
    });
};


// PATCH /api/admin/collections/:collection/:id
exports.updateDocument = async (req, res) => {
    const collectionName = getCollectionName(req.params.collection);
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new ApiError(400, "Invalid document ID");
    }

    if (
        !req.body ||
        typeof req.body !== "object" ||
        Array.isArray(req.body)
    ) {
        throw new ApiError(400, "Document data is required");
    }

    const updates = { ...req.body };

    delete updates._id;
    delete updates.id;

    const collection = mongoose.connection.db.collection(collectionName);

    const result = await collection.updateOne(
        {
            _id: new mongoose.Types.ObjectId(id)
        },
        {
            $set: updates
        }
    );

    if (result.matchedCount === 0) {
        throw new ApiError(404, "Document not found");
    }

    const updatedDocument = await collection.findOne({
        _id: new mongoose.Types.ObjectId(id)
    });

    res.status(200).json({
        success: true,
        message: "Document updated successfully",
        data: serializeDocument(updatedDocument)
    });
};


// DELETE /api/admin/collections/:collection/:id
exports.deleteDocument = async (req, res) => {
    const collectionName = getCollectionName(req.params.collection);
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new ApiError(400, "Invalid document ID");
    }

    const collection = mongoose.connection.db.collection(collectionName);

    const result = await collection.deleteOne({
        _id: new mongoose.Types.ObjectId(id)
    });

    if (result.deletedCount === 0) {
        throw new ApiError(404, "Document not found");
    }

    res.status(200).json({
        success: true,
        message: "Document deleted successfully"
    });
};


// POST /api/admin/collections
exports.createCollection = async (req, res) => {
    const { name } = req.body;

    const collectionName = getCollectionName(name);

    const existing = await mongoose.connection.db
        .listCollections({ name: collectionName })
        .toArray();

    if (existing.length > 0) {
        throw new ApiError(409, "Collection already exists");
    }

    await mongoose.connection.createCollection(collectionName);

    res.status(201).json({
        success: true,
        message: "Collection created successfully",
        data: {
            name: collectionName,
            count: 0
        }
    });
};


// GET /api/admin/profile
exports.getProfile = async (req, res) => {
    const admin = await Admins.findById(req.user.id)
        .select("-password")
        .lean();

    if (!admin) {
        throw new ApiError(404, "Admin not found");
    }

    res.status(200).json({
        success: true,
        data: admin
    });
};


// PATCH /api/admin/profile
exports.updateProfile = async (req, res) => {
    const allowedFields = [
        "username",
        "name",
        "email",
        "phone",
        "avatarText",
        "avatarColor"
    ];

    const updates = {};

    for (const field of allowedFields) {
        if (req.body[field] !== undefined) {
            updates[field] = req.body[field];
        }
    }

    const admin = await Admins.findByIdAndUpdate(
        req.user.id,
        { $set: updates },
        {
            new: true,
            runValidators: true
        }
    ).select("-password");

    if (!admin) {
        throw new ApiError(404, "Admin not found");
    }

    res.status(200).json({
        success: true,
        message: "Profile updated successfully",
        data: admin
    });
};

// ==================== ADMIN MANAGEMENT ====================

// GET /api/admin/admins
exports.getAllAdmins = async (req, res) => {
    const admins = await Admins.find({})
        .select("-password")
        .sort({ createdAt: -1 })
        .lean();

    res.status(200).json({
        success: true,
        data: admins
    });
};


// POST /api/admin/admins
exports.createAdmin = async (req, res) => {
    const { username, password, role } = req.body;

    if (!username || !password || !role) {
        throw new ApiError(
            400,
            "Username, password and role are required"
        );
    }

    if (!["admin", "superadmin"].includes(role)) {
        throw new ApiError(
            400,
            "Role must be admin or superadmin"
        );
    }

    if (password.length < 6) {
        throw new ApiError(
            400,
            "Password must be at least 6 characters"
        );
    }

    const existingAdmin = await Admins.findOne({
        username: username.trim()
    });

    if (existingAdmin) {
        throw new ApiError(
            409,
            "Username already exists"
        );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const admin = await Admins.create({
        username: username.trim(),
        password: hashedPassword,
        role
    });

    res.status(201).json({
        success: true,
        message: "Admin created successfully",
        data: {
            id: admin._id,
            username: admin.username,
            role: admin.role,
            createdAt: admin.createdAt
        }
    });
};


// PATCH /api/admin/admins/:id
exports.updateAdmin = async (req, res) => {
    const { id } = req.params;
    const { username, password, role } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new ApiError(400, "Invalid admin ID");
    }

    if (role !== undefined && !["admin", "superadmin"].includes(role)) {
        throw new ApiError(
            400,
            "Role must be admin or superadmin"
        );
    }

    const admin = await Admins.findById(id);

    if (!admin) {
        throw new ApiError(404, "Admin not found");
    }

    if (username !== undefined) {
        const trimmedUsername = username.trim();

        if (!trimmedUsername) {
            throw new ApiError(400, "Username cannot be empty");
        }

        const usernameExists = await Admins.findOne({
            username: trimmedUsername,
            _id: { $ne: id }
        });

        if (usernameExists) {
            throw new ApiError(
                409,
                "Username already exists"
            );
        }

        admin.username = trimmedUsername;
    }

    if (role !== undefined) {
        admin.role = role;
    }

    if (password !== undefined && password !== "") {
        if (password.length < 6) {
            throw new ApiError(
                400,
                "Password must be at least 6 characters"
            );
        }

        admin.password = await bcrypt.hash(password, 10);
    }

    await admin.save();

    res.status(200).json({
        success: true,
        message: "Admin updated successfully",
        data: {
            id: admin._id,
            username: admin.username,
            role: admin.role,
            createdAt: admin.createdAt,
            updatedAt: admin.updatedAt
        }
    });
};


// DELETE /api/admin/admins/:id
exports.deleteAdmin = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new ApiError(400, "Invalid admin ID");
    }

    // Prevent deleting the currently logged-in admin
    if (req.user.id === id) {
        throw new ApiError(
            400,
            "You cannot delete your own account"
        );
    }

    const admin = await Admins.findById(id);

    if (!admin) {
        throw new ApiError(404, "Admin not found");
    }

    await Admins.findByIdAndDelete(id);

    res.status(200).json({
        success: true,
        message: "Admin deleted successfully"
    });
};