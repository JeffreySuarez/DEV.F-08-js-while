// 5. Crea un programa que solicite al usuario un día de la semana (ej: lunes, jueves, domingo, etc). El programa mostrará un mensaje personalizado para cada día de la semana por medio de un alert. Y seguirá pidiendo al usuario introducir otro día. En caso de que el día introducido sea domingo mostrar al usuario el mensaje “Ve a descansar” y terminar la captura de información.

let diaSemana;

while (diaSemana != "") {
  diaSemana = prompt("Solicite su dia --> ");
  alert(`has digitado ${diaSemana}`);

  if (diaSemana === "domingo") {
    alert("Ve a descansar");
    break;
  }
  diaSemana++;
}
