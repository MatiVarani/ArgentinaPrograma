// function dump(elemento, indice, arreglo){
//     arreglo[indice]++;
//     console.log("a[" + indice + "] = " + arreglo[indice]);
// }

// let a = [1,2,3,4,5];
// a.forEach(dump);

function esPar(num){
    if(num % 2 == 0){ // si es par
return true; // devuelve verdadero
    }
    else{
return false; // devuelve falso
    }
    //console.log("a[" + indice + "] = " + arreglo[indice]);
}

let a = [1,2,3,4,5,4,5,6,7,8,9];
console.log("Arreglo A: ");
console.log(a);

let b = a.filter(esPar);
console.log("Arreglo B: ");
console.log(b);