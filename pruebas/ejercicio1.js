//ejercicio 1//

var notas = [];
var i;

for (i = 0; i < 5; i++) {
  notas.push(Number(prompt("Ingresa tu nota:" + (i + 1))));
}

var suma = notas.reduce(function (total, cantidad) {
  return total + cantidad;
});

var promedio = (suma / notas.length).toFixed(1);

var estado;
if (promedio >= 3.0) {
  estado = "Aprobado";
} else {
  estado = "Reprobado";
}

document.write(
  "Tus notas son: " +
    notas +
    "<br>" +
    "Tu Promedio es: " +
    promedio +
    "<br>" +
    "Estado: " +
    estado +
    "<br>"
);
alert(estado);

//2ejercicio
