let cita = "Tres tristes tigres comen trigo en un trigal";
let substring = "tigres comen trigo";

let tamañoDeCita = cita.length;
let indice = cita.indexOf(substring);

let citaRevisada = cita.slice(0,indice + substring.length);

console.log("El tamaño de la cita es: %i", tamañoDeCita);
console.log("El indice del substring es: %i", indice);
console.log(citaRevisada);



