const readlineSync = require('readline-sync');

let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
let numMeses = readlineSync.question("Por favor, ingrese un numero entero del 1 al 12: ");

if (numMeses == 1 || numMeses == 3 || numMeses == 5 || numMeses == 7 || numMeses == 8 || numMeses == 10 || numMeses == 12){
    console.log("La cantidad de dias del mes de " + meses[numMeses-1] + " es 31");
} else if (numMeses == 4 || numMeses == 6 || numMeses == 9 || numMeses == 11){
    console.log("La cantidad de dias del mes de " + meses[numMeses-1] + " es 30");
} else if (numMeses == 2){
    console.log("La cantidad de dias del mes de " + meses[numMeses-1] + " es 28");
}