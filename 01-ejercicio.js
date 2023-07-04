// 1. Crea un programa que pregunte al usuario un número. Mostrar los números que son múltiplos de 5 desde 1 hasta el número introducido por el usuario.

let numero = 1;
let solicitud = parseInt(prompt("ingresa un numero"));
// do {
//   while (numero <= 200) {
//     if (numero % 5 == 0) {
//       console.log(`${numero} es múltiplo de 5.`);
//     }
//     numero++;
//   }
// } while (numero >= 200);

while (numero <= solicitud) {
  if (numero % 5 == 0) {
    console.log(`${numero} es múltiplo de 5`);
  }
  numero++;
}
