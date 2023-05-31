let entrada = prompt("Ingrese su Nombre y Apellido");
let datos = entrada.split(" ");

let name = document.getElementById("nombre")
let surname = document.getElementById("apellido")

datos [0] = datos [0].toLowerCase();
datos [1] = datos [1].toLowerCase();

name.innerHTML = datos[0][0].toUpperCase() + datos[0].substring(1);
surname.innerHTML = datos[1][0].toUpperCase() + datos[1].substring(1);

entrada = prompt("Ingrese su DNI");
let dni_entrada = entrada.split(".");
let dni_ok = "";

for (let i = 0; i < dni_entrada.length; i++){
    dni_ok = dni_ok + dni_entrada [i];
}

let dni = document.getElementById("dni");
dni.innerHTML = dni_ok;

let idUser = document.getElementById("id");
idUser.innerHTML = datos[0][0].toUpperCase() + datos[1][0].toUpperCase() + dni_ok.substring(dni_ok.length - 3);