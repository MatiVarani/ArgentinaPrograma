const readlineSync = require('readline-sync');

let numero = readlineSync.question("Por favor, ingrese un numero: ");

if (numero > 0){
    console.log("El numero es positivo");
}else if (numero == 0){
    console.log("El numero es cero");
}else{
    console.log("El numero es negativo");
}