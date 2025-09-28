class EmailValidator {
    public esEmailValido(email:string): boolean {
        return email != null && email.includes("@") && email.includes(".");
    }

   public esNumero(texto: string): boolean {
    if (texto == null) return false;
    return /^\d+$/.test(texto);
}

    public  tieneLongitudMinima(texto:string, min:number): boolean {
        return texto != null && texto.length >= min;
    }
}

export default EmailValidator;