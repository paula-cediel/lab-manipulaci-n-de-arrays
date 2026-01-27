function calcularPromedio(notas) {
  let suma = 0;

  for (let i = 0; i < notas.length; i++) {
    suma += notas[i];
  }

  let promedio = suma / notas.length;
  return promedio.toFixed(2);
}

// Prueba
let entradaNotas = prompt("Ingresa las notas separadas por comas (ej: 4,3.5,5,4):");
let arrayNotas = entradaNotas.split(",").map(Number);

console.log("El promedio es:", calcularPromedio(arrayNotas));
