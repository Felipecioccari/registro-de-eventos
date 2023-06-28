import DefaultError from "./DefaultError.js";

class IncorretRequest extends DefaultError {
  constructor(message = "Um ou mais dados fornecidos estão incorretos") {
    super(message, 400);
  }
}

export default IncorretRequest;