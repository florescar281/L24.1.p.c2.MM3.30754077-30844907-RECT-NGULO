import { Cl_cuadrado } from "./Cl_cuadrado.js";

export class Cl_rectangulo extends Cl_cuadrado {

    constructor(base, altura) { 
        super(base);
        this.altura = altura;
    }
    set altura(altura) {
        this._altura = altura;
    }
    get altura() {
        return this._altura;
    }
    area() {
        return this.base * this.altura;
    }
    perimetro() {
        return (2 * this.base) + (2 * this.altura);
    }


}