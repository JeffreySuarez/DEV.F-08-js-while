// 3. Crea un programa que solicite al usuario números, si lo que este introduce es un número guardarlo en un arreglo. Para terminar el capturar el usuario debe ingresar el número 0. Finalmente mostrar la lista de números capturados en pantalla o en la consola.

let array = [1];

let num;

while (num != 0) {
  num = parseInt(prompt("Ingresa el numero -->"));
  array.push(num);

  if (num === 0) {
    break;
  }
  num++;
}

console.log(array);
