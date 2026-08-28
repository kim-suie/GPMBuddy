
const express = require("express");

const router = express.Router();

const eventControllers = require("../controllers/eventControllers");

const authenticate = require("../middleware/authenticateMiddlewares");

// Get all events
router.get("/", eventControllers.getEvents);

// Get event by ID
router.get("/id/:id", eventControllers.getEventById);

// Create event
router.post("/", authenticate, eventControllers.createEvent);

// Update event
router.put("/:id", authenticate, eventControllers.updateEvent);

// Delete event
router.delete("/:id", authenticate, eventControllers.deleteEvent);

module.exports = router;
