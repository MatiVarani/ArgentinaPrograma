let var1 = 2;
let var2 = 2;
let var3 = 22;
let var4 = 11;

let suma = var1 + var2; 
let resta = var3 - var4;

let resultadoFinal = suma * resta; 
//console.log(resultadoFinal);

let esPar = resultadoFinal % 2 === 0;

console.log("Mis variables iniciales fueron: %i, %i, %i y %i. La respuesta a verificar si el resultado final es par es: %s.", var1, var2, var3, var4, esPar)