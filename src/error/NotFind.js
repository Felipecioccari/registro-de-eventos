import DefaultError from "./DefaultError.js";

class NotFind extends DefaultError {
  constructor(message = "Página não encontrada") {
    super(message, 404);
  }
}

export default NotFind;