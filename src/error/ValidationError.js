import IncorretRequest from "./IncorretRequest.js";

class ValidationError extends IncorretRequest {
  constructor(erro) {
    const messageError = Object.values(erro.errors)
      .map(erro => erro.message)
      .join("; ");

    super(`Os seguintes erros foram encontrados: ${messageError}`);
  }
}

export default ValidationError;