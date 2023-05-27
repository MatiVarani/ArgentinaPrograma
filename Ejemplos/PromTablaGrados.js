//Conversion Tabla de Temperaturas Medias de Grados Fahrenheit (F) a grados celsius (C)

let fah1 = 10;
let fah2 = 20;
let fah3 = 30;
let fah4 = 40;
let fah5 = 50;
let fah6 = 40;
let fah7 = 60;
let fah8 = 50;
let fah9 = 30;
let fah10 = 20;
let fah11 = 50;
let fah12 = 20;

let promFah = (fah1 + fah2 + fah3 + fah4 + fah5 + fah6 + fah7 + fah8 + fah9 + fah10 + fah11 + fah12)/12;
let celsius = (promFah - 32 )*(5/9);
console.log("El promedio de la tabla de Temperaturas Medias en Grados Fahrenheit es " +promFah+ " ºF");
console.log("El promedio de la tabla de Temperaturas Medias en Grados Centigrados es " +celsius+ " ºC");

//RTA: La conversion de 75F es de 23.89C.