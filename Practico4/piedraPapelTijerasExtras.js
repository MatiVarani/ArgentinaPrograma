const readlineSync = require('readline-sync');

let jugadaComputadora;
let jugadaUsuario;
let jugadaComputadoraN;
let jugadaUsuarioN;
let resultado;
let cantidad;
let acuUsuario = 0;
let acuComputadora = 0;
const piedra = "piedra";
const papel = "papel";
const tijera = "tijera";
const jugadas = [piedra, papel, tijera];

function obtenerCantidadJugadas(){
    cantidad = parseInt(readlineSync.question("¿Cuantas partidas desea jugar? 1, 2 o 3: "));
    while(cantidad > 3 || cantidad < 1 || isNaN(cantidad)){
        console.log("Cantidad de partidas invalidas");
        obtenerCantidadJugadas();
    }
    return cantidad;
}

function obtenerJugadaComputadora(){
    jugadaComputadoraN = Math.floor(Math.random()*3);
    jugadaComputadora = jugadas[jugadaComputadoraN];
}

function obtenerJugadaUsuario(){
   jugadaUsuario = readlineSync.question("Por favor, ingrese su eleccion (piedra, papel o tijera): ");
   jugadaUsuario = jugadaUsuario.toLowerCase().trim();
   
if (jugadaUsuario == piedra){
    jugadaUsuarioN = 0;

} else if (jugadaUsuario == papel){
    jugadaUsuarioN = 1;

} else if (jugadaUsuario == tijera){
    jugadaUsuarioN = 2;

}else {
    console.log("Eleccion invalida");
    obtenerJugadaUsuario();
}
}

function determinarGanador(jugadaComputadoraN,jugadaUsuarioN){
    if (jugadaComputadoraN === jugadaUsuarioN){

    }else if (jugadaComputadoraN === 0 && jugadaUsuarioN === 1 || 
              jugadaComputadoraN === 1 && jugadaUsuarioN === 2 || 
              jugadaComputadoraN === 2 && jugadaUsuarioN === 0){
        acuUsuario ++;
    }else {
        acuComputadora ++;
    }
}

function partidas(){
for (let i = 0; i < cantidad; i++){
    obtenerJugadaComputadora();
    obtenerJugadaUsuario();
    determinarGanador(jugadaComputadoraN,jugadaUsuarioN);
}
}

function ObtResultado(){
if (acuComputadora === acuUsuario){
    resultado = "Empate";

}else if (acuComputadora < acuUsuario){
    resultado = "Gana el usuario"

}else {
    resultado = "Gana la computadora";
}

console.log("El resultado fue: %s.", resultado);
}

function main(){
    obtenerCantidadJugadas();
    partidas();
    ObtResultado();
    }

main();