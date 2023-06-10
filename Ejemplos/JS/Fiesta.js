let nombres = ["Carla", "Pedro", "Daiana", "Ivan", "Valeria", "Ivette", "Mario", "Vanesa"];
let apellidos = ["Gomez", "Gonzales", "Hernandez", "Gutierrez", "Suarez", "Gimenez", "Gomez", "Mendez"];
let estadoInvitacion = ["true", "false", "true", "true", "true", "false", "true", "false"];
let print = "";

for (let i = 0; i < nombres.length; i++){
    if (nombres[i].endsWith("a")){
        // console.log(nombres[i]);
    print += nombres[i] + " ";
    }
}
console.log(print);

for (let i = 0; i < nombres.length; i++){
    if (nombres[i].endsWith("a") && apellidos[i].startsWith("G")){
        console.log("%s %s",nombres[i],apellidos [i]);
    }
}

print = ""
for (let i = 0; i < nombres.length; i++){
    if (estadoInvitacion[i] == "true"){
        //console.log("%s. %s",nombres[i].charAt(0),apellidos [i]);
        print += nombres[i].charAt(0) + ". " + apellidos[i] + " ";
    }
}
console.log(print);

for (let i = 0; i < nombres.length; i++){
    if (nombres[i].endsWith("a") && apellidos[i].startsWith("G") && estadoInvitacion[i] == "true"){
        console.log("%s. %s - %s",nombres[i].charAt(0), apellidos [i], estadoInvitacion[i]);
    }
}