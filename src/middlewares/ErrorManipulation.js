import mongoose from "mongoose";
import DefaultError from "../error/DefaultError.js";
import ValidationError from "../error/ValidationError.js";
import IncorretRequest from "../error/IncorretRequest.js";

// eslint-disable-next-line no-unused-vars
function ErrorManipulation (erro, req, res, next) {
  if (erro instanceof mongoose.Error.CastError) {
    new IncorretRequest().sendResponse(res);
  } else if (erro instanceof mongoose.Error.ValidationError) {
    new ValidationError(erro).sendResponse(res);
  } else if (erro instanceof DefaultError) {
    erro.sendResponse(res);
  } else {
    new DefaultError().sendResponse(res);
  }
}

export default ErrorManipulation;