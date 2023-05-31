//Conversion Tabla de Temperaturas Medias de Grados Fahrenheit (F) a grados celsius (C)

let fah = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120];
let far = 0;

for (let contador = 0; contador<12; contador = contador + 1){
far = far + fah[contador];
}

far=far/12;
let celsius = (far - 32 )*(5/9);

console.log(celsius);

//RTA: La conversion de 75F es de 23.89C.