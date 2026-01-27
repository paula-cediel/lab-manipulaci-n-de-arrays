function calcularPropina(total, porcentaje) {
  let propina = total * (porcentaje / 100);
  let totalFinal = total + propina;
  return totalFinal;
}

// Prueba
let totalCuenta = Number(prompt("Ingresa el total de la cuenta:"));
let porcentajePropina = Number(prompt("Ingresa el porcentaje de propina:"));

console.log("Total a pagar: " + calcularPropina(totalCuenta, porcentajePropina));
