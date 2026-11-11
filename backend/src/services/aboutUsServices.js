const mongoose = require("mongoose");

const aboutUs = require("../models/aboutUs");
const faculty = require("../models/faculty");


const escapeRegex = (value) => {
    return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
};


const resolvePrincipal = async (input) => {

    if (input === null || input === undefined || input === "") {
        return null;
    }

    if (typeof input === "string" && mongoose.Types.ObjectId.isValid(input) && input.length === 24) {

        const exists = await faculty.exists({ _id: input });

        if (!exists) {
            throw new ApiError(404, "Principal not found!");
        }

        return input;
    }

    if (typeof input !== "string" || !input.trim()) {
        throw new ApiError(400, "Principal must be a faculty ID or name!");
    }

    const facultyData = await faculty.findOne({
        name: { $regex: `^${escapeRegex(input.trim())}$`, $options: "i" }
    });

    if (!facultyData) {
        throw new ApiError(404, "Principal not found!");
    }

    return facultyData._id;
};

exports.getAboutUs = async () => {
    const AboutUsData = await aboutUs.findOne({ isActive: true }).populate("principal");

    if(!AboutUsData){
            throw new ApiError(400, "About Us not found");
    }

    const structuredAboutUsData = AboutUsData.toObject();
    structuredAboutUsData.po = structuredAboutUsData.po.map((description, index) => ({
        code : `PO${index+1}`,
        description: description
    }));
    structuredAboutUsData.mission = structuredAboutUsData.mission.map((description, index) => ({
        code : `M${index+1}`,
        description: description
    }));

    return structuredAboutUsData;
}

exports.createAboutUs = async (body) => {
    const principal = await resolvePrincipal(body.principal);
    
        const createdAboutUs = await aboutUs.create({
            history: body.history,
            vision: body.vision,
            mission: body.mission,
            po: body.po,
            principalMessage: body.principalMessage,
            affiliation: body.affiliation,
            principal
        });
    
        return await createdAboutUs.populate("principal", "name");
    
};

exports.updateAboutUs = async (req) => {
    const principal = await resolvePrincipal(req.body.principal);
    req.body.principal = principal
    
    return await aboutUs.findByIdAndUpdate(req.params.id, req.body, {returnDocument: 'after'});
}
