export class Usuario {
    mail: string;
    password: string;
    nombre: string;
    fechaAcceso: number;

    constructor(mail: string, password: string, nombre: string) {
        this.mail = mail;
        this.password = password;
        this.nombre = nombre;
        this.fechaAcceso = Date.now();
    }
}
