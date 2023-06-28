import express from "express";
import events from "./eventsRoutes.js";
import users from "./usersRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send({titulo: "Curso de node"});
  });

  app.use(
    express.json(),
    events,
    users
  );
};

export default routes;