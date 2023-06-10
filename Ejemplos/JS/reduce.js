let numeros = [1,2,3,4,5];

function suma (acumulador, valor){
    return acumulador + valor;
}

function mult (acumulador, valor){
    return acumulador * valor;
}

//El metodo reduce utiliza Funciones exteriores (suma y mult) que establecen la funcion a aplicar en el metodo.
let sumaTotal = numeros.reduce(suma, 0);
let multTotal = numeros.reduce(mult, );

//El metodo reduce utiliza las Funciones Flechas donde se establece la funcion directamente entre parentesis.
let sumaTotal2 = numeros.reduce((a,e) => a + e, 0);
let multTotal2 = numeros.reduce((a,e) => a * e, 1);

console.log (sumaTotal);
console.log (multTotal);
console.log (sumaTotal2);
console.log (multTotal2);
