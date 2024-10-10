/* Considerando que un rectángulo varía de un cuadrado sólo
porque la altura no es igual a la base, diseñe la clase
Cl_rectangulo que herede de Cl_cuadrado, y luego haga un
programa que determine el área y el perímetro de un rectángulo
(área= base * altura, perímetro= 2*base + 2*altura).

Base del rectángulo: 4
Altura: 2
Área resultante: 8
Perímetro: 20
Base del rectángulo: 3
Altura: 5
Área resultante: 15
Perímetro: 16 */

import { Cl_rectangulo } from "./Cl_rectangulo.js";

export class Cl_Main {
    constructor() {
        this.salida = document.getElementById("salida");
        this.iniciar();
    }

    iniciar() {
        let rectangulo1 = new Cl_rectangulo(4, 2);
        let rectangulo2 = new Cl_rectangulo(3, 5);

        this.salida.innerHTML = `
        la base del rectangulo es: ${rectangulo1.base} <br>
        la altura del rectangulo es: ${rectangulo1.altura} <br>
        el area del rectangulo es: ${rectangulo1.area()} <br>
        el perimetro del rectangulo es: ${rectangulo1.perimetro()} <br>
        <br>
        la base del rectangulo es: ${rectangulo2.base} <br>
        la altura del rectangulo es: ${rectangulo2.altura} <br>
        el area del rectangulo es: ${rectangulo2.area()} <br>
        el perimetro del rectangulo es: ${rectangulo2.perimetro()} <br>
        `;
    }
}