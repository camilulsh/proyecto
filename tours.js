/* let user = prompt("Decime tu nombre")
let edad = prompt("Decime tu edad")
alert("Hola " + user + " de " + edad + " años, ¿ya adquiriste tus tickets?" ) */


/* let h2 = document.querySelector("h2");
let nombre = prompt("Cuál es tu nombre?");
if (nombre.length < 2) {
  nombre = prompt("Demasiado corto.");
}
else {
  h2.textContent = "Hola, " + nombre;
  h2.style.color = "white"
} */

  let h2 = document.querySelector("h2")
  let nombre = prompt("Decime tu nombre")

  if(nombre.length < 2){
    nombre = prompt ("El nombre no puede contener menos de 2 caracteres, ingrese nuevamente")
  } 
  if (nombre.length > 2){
    h1.textContent = "Hola, " + nombre
    h1.style.color = "white"
  }
