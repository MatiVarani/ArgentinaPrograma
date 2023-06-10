let nombres = ["PePe", "CaRlos", "MaRia", "NaCho"];
let nombres_copia = nombres.slice(0, nombres.length);

// function minuscula (elemento){
//     elemento.toLowerCase();
// }

nombres_copia.forEach((elemento, indice, array) => {
    array[indice] = elemento.toLowerCase();
});

let n_c = nombres.map(e => {
    return e.toLowerCase();
})

//let nombres_min = nombres.forEach(minuscula);
console.log(nombres);
console.log(nombres_copia);
console.log(n_c);
//console.log(nombres_min);