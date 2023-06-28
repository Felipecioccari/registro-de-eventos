import NotFind from "../error/NotFind.js";
import { events } from "../models/index.js";

class EventsController {

  static listevent = async (req, res, next) => {
    try {
      const searchevents = events.find();

      req.resultado = searchevents;

      next();
    } catch (erro) {
      next(erro);
    }
  };

  static listEventById = async (req, res, next) => {
    try {
      const id = req.params.id;

      const eventsResult = await events.findById(id)
        .exec();

      if (eventsResult !== null) {
        res.status(200).send(eventsResult);
      } else {
        next(new NotFind("Id do evento não localizado."));
      }
    } catch (erro) {
      next(erro);
    }
  };

  static registerEvent = async (req, res, next) => {
    try {
      let event = new events(req.body);

      const eventsResult = await event.save();

      res.status(201).send(eventsResult.toJSON());
    } catch (erro) {
      next(erro);
    }
  };

  static updateEvent = async (req, res, next) => {
    try {
      const id = req.params.id;
    
      const eventsResult = await events.findByIdAndUpdate(id, {$set: req.body});

      if (eventsResult !== null) {
        res.status(200).send({message: "Livro atualizado com sucesso"});
      } else {
        next(new NotFind("Id do livro não localizado."));
      }
    } catch (erro) {
      next(erro);
    }
  };

  static deleteEvent = async (req, res, next) => {
    try {
      const id = req.params.id;

      const eventsResult = await events.findByIdAndDelete(id);

      if (eventsResult !== null) {
        res.status(200).send({message: "Evento removido com sucesso"});
      } else {
        next(new NotFind("Id do evento não localizado."));
      }
    } catch (erro) {
      next(erro);
    }
  };
}
export default EventsController;