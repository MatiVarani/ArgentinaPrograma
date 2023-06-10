let string = "1bc4";
let stringn = "1234"

let caracteres = string.split("");
let caracteresn = stringn.split("");

caracteres.forEach((elemento, indice, array) => {
    array[indice] = !isNaN(elemento);
});

caracteresn.forEach((elemento, indice, array) => {
    array[indice] = !isNaN(elemento);
});

let carRed = caracteres.reduce((a,e) => a && e, true);
let carRedn = caracteresn.reduce((a,e) => a && e, true);

// console.log (caracteres);
// console.log (caracteresn);
console.log (carRed);
console.log (carRedn);