import NotFind from "../error/NotFind.js";

function manipulate404(req, res, next) {
  const erro404 = new NotFind();
  next(erro404);
}

export default manipulate404;