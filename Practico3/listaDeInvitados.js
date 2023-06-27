let personas = ["Jose", "Maria", "Juan", "Andres", "Lionel", "Sofia", "Leandro", "Emilia"];

let admitidos = [];
let rechazados = [];

for (let i = 0; i < personas.length  ; i++){
    if (personas[i] === "Jose" || personas[i] === "Sofia"){
        rechazados.push(personas[i]);
    }
    else {
        admitidos.push(personas[i]);
    }
}

console.log("\nLa lista de invitados admitidos es:");
admitidos.forEach(a => console.log(a));

console.log("\nLa lista de invitados rechazados es:");
rechazados.forEach(a => console.log(a));

admitidos.sort();
rechazados.sort();


console.log("\nLa lista ordenada de invitados admitidos es:");
admitidos.forEach(a => console.log(a));

console.log("\nLa lista ordenada de invitados rechazados es:");
rechazados.forEach(a => console.log(a));