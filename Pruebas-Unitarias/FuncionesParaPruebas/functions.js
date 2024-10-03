export function suma(num1, num2) {
  return num1 + num2;
}

export class Calculadora {
  sumar(num1, num2) {
    return num1 + num2
  }
}

//Probar el funcionamiento de un middleware

export function authMiddleware(req, res, next) {
  if (req.headers.authorization === "Bearer valid_token") {
    next();
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
}