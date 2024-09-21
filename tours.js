/* let user = prompt("Decime tu nombre")
let edad = prompt("Decime tu edad")
alert("Hola " + user + " de " + edad + " años, ¿ya adquiriste tus tickets?" ) */


/* ;
let nombre = prompt("Cuál es tu nombre?");
if (nombre.length < 2) {
  nombre = prompt("Demasiado corto.");
}
else {
  h2.textContent = "Hola, " + nombre;
  h2.style.color = "white"
} */


 let nombre = prompt("Decime tu nombre").toUpperCase()

while (nombre.length < 3 || nombre == "") {
  nombre = prompt("El nombre debe contener mínimo tres caracteres.").toUpperCase()
}

let h2 = document.querySelector("h2");
h2.textContent = "Hola, " + nombre
h2.style.color = "white" 



