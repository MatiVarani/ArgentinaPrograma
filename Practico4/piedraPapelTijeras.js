const readlineSync = require('readline-sync');
let jugadaComputadora;
let jugadaUsuario;
let jugadaComputadoraN;
let jugadaUsuarioN;
let resultado;
const piedra = "piedra";
const papel = "papel";
const tijera = "tijera";
const jugadas = [piedra, papel, tijera];

function obtenerJugadaComputadora(){
    jugadaComputadoraN = Math.floor(Math.random()*3);
    jugadaComputadora = jugadas[jugadaComputadoraN];
}

function obtenerJugadaUsuario(){
   jugadaUsuario = readlineSync.question("Por favor, ingrese su eleccion (piedra, papel o tijera): ");
   jugadaUsuario = jugadaUsuario.toLowerCase().trim();
   
   if (jugadaUsuario === "piedra"){
    jugadaUsuarioN = 0;

} else if (jugadaUsuario === "papel"){
    jugadaUsuarioN = 1;

} else if (jugadaUsuario === "tijera"){
    jugadaUsuarioN = 2;

}else {
    console.log("Eleccion invalida");
    obtenerJugadaUsuario();
}
}

function determinarGanador(jugadaComputadoraN,jugadaUsuarioN){
    if (jugadaComputadoraN === jugadaUsuarioN){
        resultado = "Empate";

    }else if (jugadaComputadoraN === 0 && jugadaUsuarioN === 1 || 
              jugadaComputadoraN === 1 && jugadaUsuarioN === 2 || 
              jugadaComputadoraN === 2 && jugadaUsuarioN === 0){
        resultado = "Gana el usuario";
    }else {
        resultado = "Gana la computadora";
    }
}

obtenerJugadaComputadora();
obtenerJugadaUsuario();
determinarGanador(jugadaComputadoraN,jugadaUsuarioN);

//console.log(jugadaComputadoraN);
//console.log(jugadaUsuarioN);
console.log("La computadora eligio: %s. El usuario eligio: %s.\nEl resultado fue: %s.", jugadaComputadora, jugadaUsuario, resultado);
