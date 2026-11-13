
const eventServices = require("../services/eventServices");
const success = require("../utils/successResponseUtil");
const ApiError = require("../utils/ApiError");

// Get all events
exports.getEvents = async (req, res) => {
    const data = await eventServices.getEvents();
    success(res, 200, "Events fetched successfully", data);
};

// Get event by ID
exports.getEventById = async (req, res) => {
    const data = await eventServices.getEventById(req.params.id);

    if (!data) {
        throw new ApiError(404, "Event not found!");
    }

    success(res, 200, "Event fetched successfully", data);
};

// Create event
exports.createEvent = async (req, res) => {
    const createdEvent = await eventServices.createEvent(req.body);

    if (!createdEvent) {
        throw new ApiError(400, "Event not created!");
    }

    success(res, 201, "Event created successfully", createdEvent);
};

// Update event
exports.updateEvent = async (req, res) => {
    const updatedEvent = await eventServices.updateEvent(req.params.id, req.body);

    if (!updatedEvent) {
        throw new ApiError(400, "Event not updated!");
    }

    success(res, 200, "Event updated successfully", updatedEvent);
};

// Delete event
exports.deleteEvent = async (req, res) => {
    const deletedEvent = await eventServices.deleteEvent(req.params.id);

    if (!deletedEvent) {
        throw new ApiError(400, "Event not deleted!");
    }

    success(res, 200, "Event deleted successfully", deletedEvent);
};
