
const mongoose = require("mongoose");
const Event = require("../models/event");
const ApiError = require("../utils/ApiError");

// Create event
exports.createEvent = async (body) => {
    const {
        title,
        description,
        date,
        time,
        venue,
        eligibility,
        organizedBy
    } = body;

    if (!title || !description || !date || !time || !venue || !organizedBy) {
        throw new ApiError(400, "Please provide all required event fields!");
    }

    const event = await Event.create({
        title,
        description,
        date,
        time,
        venue,
        eligibility,
        organizedBy
    });

    return event;
};

// Get all events
exports.getEvents = async () => {
    return await Event.find().sort({ date: 1 });
};

// Get event by ID
exports.getEventById = async (id) => {
    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new ApiError(400, "Invalid event ID!");
    }

    const event = await Event.findById(id);

    if (!event) {
        throw new ApiError(404, "Event not found!");
    }

    return event;
};

// Update event
exports.updateEvent = async (id, body) => {
    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new ApiError(400, "Invalid event ID!");
    }

    const allowedFields = [
        "title",
        "description",
        "date",
        "time",
        "venue",
        "eligibility",
        "organizedBy"
    ];

    const updateData = {};

    allowedFields.forEach((field) => {
        if (body[field] !== undefined) {
            updateData[field] = body[field];
        }
    });

    const event = await Event.findByIdAndUpdate(id, updateData, {
        new: true,
        runValidators: true
    });

    if (!event) {
        throw new ApiError(404, "Event not found!");
    }

    return event;
};

// Delete event
exports.deleteEvent = async (id) => {
    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new ApiError(400, "Invalid event ID!");
    }

    const event = await Event.findByIdAndDelete(id);

    if (!event) {
        throw new ApiError(404, "Event not found!");
    }

    return event;
};
