import NotFind from "../error/NotFind.js";
import { users } from "../models/index.js";

class UserController {
  static listUsers = async (req, res, next) => {
    try {
      const usersResultado = users.find();

      req.resultado = usersResultado;

      next();
    } catch (erro) {
      res.status(500).json({ message: "Erro interno no servidor" });
    }
  };

  static listUsersById = async (req, res, next) => {
    try {
      const id = req.params.id;

      const userResultado = await users.findById(id);

      if (userResultado !== null) {
        res.status(200).send(userResultado);
      } else {
        next(new NotFind("Id do user não localizado."));
      }
    } catch (erro) {
      next(erro);
    }
  };

  static registerUser = async (req, res, next) => {
    try {
      let user = new users(req.body);

      const userResultado = await user.save();

      res.status(201).send(userResultado.toJSON());
    } catch (erro) {
      next(erro);
    }
  };

  static updateUser = async (req, res, next) => {
    try {
      const id = req.params.id;
  
      const userResultado = await users.findByIdAndUpdate(id, {$set: req.body});

      if (userResultado !== null) {
        res.status(200).send({message: "user atualizado com sucesso"});
      } else {
        next(new NotFind("Id do user não localizado."));
      }

    } catch (erro) {
      next(erro);
    }
  };

  static deleteUser = async (req, res, next) => {
    try {
      const id = req.params.id;

      const userResultado = await users.findByIdAndDelete(id);


      if (userResultado !== null) {
        res.status(200).send({message: "user removido com sucesso"});
      } else {
        next(new NotFind("Id do user não localizado."));
      }
    } catch (erro) {
      next(erro);
    }
  };
}

export default UserController;