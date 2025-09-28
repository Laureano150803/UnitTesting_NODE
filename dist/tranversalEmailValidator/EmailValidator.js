"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EmailValidator {
    esEmailValido(email) {
        return email != null && email.includes("@") && email.includes(".");
    }
    esNumero(texto) {
        if (texto == null)
            return false;
        return /^\d+$/.test(texto);
    }
    tieneLongitudMinima(texto, min) {
        return texto != null && texto.length >= min;
    }
}
exports.default = EmailValidator;
