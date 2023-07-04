// 2. Crea un programa que solicite al usuario 2 números entre 1 y 50. Posteriormente mostrar en consola los números del 1 hasta el 50, pero añadir el mensaje “¡Lotería!” solo al mostrar los números indicados por el usuario.

let num = 0;
let num1 = parseInt(prompt("Ingresa el primer numero --> "));
let num2 = parseInt(prompt("ingresa el segundo numero --> "));

while (num <= 50) {
  if (num1 >= 1 && num2 <= 50) {
    console.log(`!Loteria`);
  } else {
    console.log("no esta en el rango permitido");
  }
  num++;
}
