const aboutUs = require("../models/aboutUs");

exports.getAboutUs = async () => {
    return await aboutUs.findOne({ isActive: true }).populate("principal");
}


exports.updateAboutUs = async (req) => {
    return await aboutUs.findByIdAndUpdate(req.params.id, req.body, {returnDocument: 'after'});
}
