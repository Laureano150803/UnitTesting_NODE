import { describe, expect, test } from '@jest/globals';

// Importa la clase si está exportada, si no, agrega 'export' delante de 'class EmailValidator'
import EmailValidator from './EmailValidator';

describe('EmailValidator', () => {
    const validator = new EmailValidator();

    test('esEmailValido: debe validar emails correctos', () => {
        expect(validator.esEmailValido('test@mail.com')).toBe(true);
        expect(validator.esEmailValido('usuario@dominio.es')).toBe(true);
    });

/*     test('esEmailValido: debe rechazar emails incorrectos', () => {
        expect(validator.esEmailValido('testmail.com')).toBe(false);
        expect(validator.esEmailValido('usuario@dominio')).toBe(false);
        expect(validator.esEmailValido(null as any)).toBe(false);
    });

    test('esNumero: debe validar números', () => {
        expect(validator.esNumero('12345')).toBe(true);
        expect(validator.esNumero('0')).toBe(true);
    });

    test('esNumero: debe rechazar no números', () => {
        expect(validator.esNumero('abc')).toBe(false);
        expect(validator.esNumero('123abc')).toBe(false);
        expect(validator.esNumero('')).toBe(false);
        expect(validator.esNumero(null as any)).toBe(false);
    });

    test('tieneLongitudMinima: debe validar longitud mínima', () => {
        expect(validator.tieneLongitudMinima('hola', 3)).toBe(true);
        expect(validator.tieneLongitudMinima('hola', 4)).toBe(true);
        expect(validator.tieneLongitudMinima('hola', 5)).toBe(false);
    });

    test('tieneLongitudMinima: debe rechazar null o string vacío', () => {
        expect(validator.tieneLongitudMinima('', 1)).toBe(false);
        expect(validator.tieneLongitudMinima(null as any, 1)).toBe(false);
    }); */
});