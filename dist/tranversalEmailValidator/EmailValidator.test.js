"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
// Importa la clase si está exportada, si no, agrega 'export' delante de 'class EmailValidator'
const EmailValidator_1 = __importDefault(require("./EmailValidator"));
(0, globals_1.describe)('EmailValidator', () => {
    const validator = new EmailValidator_1.default();
    (0, globals_1.test)('esEmailValido: debe validar emails correctos', () => {
        (0, globals_1.expect)(validator.esEmailValido('test@mail.com')).toBe(true);
        (0, globals_1.expect)(validator.esEmailValido('usuario@dominio.es')).toBe(true);
    });
    (0, globals_1.test)('esEmailValido: debe rechazar emails incorrectos', () => {
        (0, globals_1.expect)(validator.esEmailValido('testmail.com')).toBe(false);
        (0, globals_1.expect)(validator.esEmailValido('usuario@dominio')).toBe(false);
        (0, globals_1.expect)(validator.esEmailValido(null)).toBe(false);
    });
    (0, globals_1.test)('esNumero: debe validar números', () => {
        (0, globals_1.expect)(validator.esNumero('12345')).toBe(true);
        (0, globals_1.expect)(validator.esNumero('0')).toBe(true);
    });
    (0, globals_1.test)('esNumero: debe rechazar no números', () => {
        (0, globals_1.expect)(validator.esNumero('abc')).toBe(false);
        (0, globals_1.expect)(validator.esNumero('123abc')).toBe(false);
        (0, globals_1.expect)(validator.esNumero('')).toBe(false);
        (0, globals_1.expect)(validator.esNumero(null)).toBe(false);
    });
    (0, globals_1.test)('tieneLongitudMinima: debe validar longitud mínima', () => {
        (0, globals_1.expect)(validator.tieneLongitudMinima('hola', 3)).toBe(true);
        (0, globals_1.expect)(validator.tieneLongitudMinima('hola', 4)).toBe(true);
        (0, globals_1.expect)(validator.tieneLongitudMinima('hola', 5)).toBe(false);
    });
    (0, globals_1.test)('tieneLongitudMinima: debe rechazar null o string vacío', () => {
        (0, globals_1.expect)(validator.tieneLongitudMinima('', 1)).toBe(false);
        (0, globals_1.expect)(validator.tieneLongitudMinima(null, 1)).toBe(false);
    });
});
