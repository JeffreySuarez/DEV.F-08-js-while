// 4. Crea un programa que solicite al usuario letras o palabras, si es así guardar el resultado. Para terminar de capturar el usuario no debe escribir valor alguno. Al terminar de capturar, mostrar en pantalla la concatenación de todas las palabras capturadas.

let array = [];

let letter;

while (letter != "no") {
  letter = prompt("Ingresa la letra o palabra -->");

  array.push(letter);

  if (letter === "no") {
    break;
  }
  letter++;
}

console.log(array);
