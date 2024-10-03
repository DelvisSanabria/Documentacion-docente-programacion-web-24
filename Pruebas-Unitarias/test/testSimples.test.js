import { suma } from "../FuncionesParaPruebas/functions.js";
import { Calculadora } from "../FuncionesParaPruebas/functions.js";
import { authMiddleware } from "../FuncionesParaPruebas/functions.js";
import {jest} from "@jest/globals";

test("prueba de funcion suma", () => {
  expect(suma(1, 2)).toBe(3);
  /* expect(suma(2, 1)).toEqual(3);
  expect(suma(0, 0)).toBeTruthy();
  expect(suma(0, 0)).toBeFalsy();
  expect(suma(0, 0)).toBeGreaterThan(0);
  expect(suma(0, 0)).toBeLessThan(1);
  expect(suma(0, 0)).toBeCloseTo(0.5);
  expect(suma(0, 0)).toContain(3); */
})

//La prueba verifica que el método add de una instancia de Calculator devuelva 3 para 1 + 2.

test("prueba de clase Calculadora", () => {
  const calculadora = new Calculadora();
  expect(calculadora.sumar(1, 2)).toBe(3);
})

test("prueba de middleware authMiddleware cuando se pase un token valido", () => {
  const req = { headers: { authorization: "Bearer valid_token" } };
  const res = {};
  const next = jest.fn(); // Usa jest.fn() para crear la función next espía
  authMiddleware(req, res, next);
  expect(next).toHaveBeenCalled(); // Verifica que next() haya sido llamado
})

test("prueba de middleware authMiddleware cuando se pase un token invalido", () => {
  const req = { headers: { authorization: "Bearer invalid_token" } };
  const res = {
    status: jest.fn().mockReturnThis(), // Usa jest.fn() y mockReturnThis() para simular res.status
    json: jest.fn(), // Usa jest.fn() para simular res.json
  };

  authMiddleware(req, res, () => {});
  expect(res.status).toHaveBeenCalledWith(401);  // Verifica que res.status() haya sido llamado con 401
  expect(res.send).toHaveBeenCalledWith('Unauthorized');  // Verifica que res.send() haya sido llamado con 'Unauthorized'
})