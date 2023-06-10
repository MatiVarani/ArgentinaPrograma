let dump = (elemento, indice, arreglo) => {
     console.log("a[" + indice + "] = " + arreglo[indice]);
}

// let esPar = num => {
// return (num % 2 === 0);
// }

let a = [1,2,3,4,5,4,5,6,7,8,9];
console.log("Arreglo A: ");
console.log(a);

// let b = a.filter(esPar);
// console.log("Arreglo B: ");
// console.log(b);

let b = a.filter(num => { //Esta linea reemplaza la declaracion de la funcion es par.
    return (num % 2 === 0);
    });
console.log("Arreglo B: ");
console.log(b);
