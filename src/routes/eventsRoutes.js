import express from "express";
import EventsController from "../controllers/eventsController.js";
import pages from "../middlewares/pages.js";

const router = express.Router();

router
  .get("/events", EventsController.listevent, pages)
  .get("/events/:id", EventsController.listEventById)
  .post("/events", EventsController.registerEvent)
  .put("/events/:id", EventsController.updateEvent)
  .delete("/events/:id", EventsController.deleteEvent);

export default router;   