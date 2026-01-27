function convertirMoneda(monto, monedaDestino) {
  const tasaUSD = 4000; // ejemplo
  const tasaEUR = 4400; // ejemplo

  if (monedaDestino === "USD") {
    return (monto / tasaUSD).toFixed(2) + " USD";
  } else if (monedaDestino === "EUR") {
    return (monto / tasaEUR).toFixed(2) + " EUR";
  } else {
    return "Moneda no válida";
  }
}

// Prueba
let montoCOP = Number(prompt("Ingresa el monto en COP:"));
let moneda = prompt("Ingresa la moneda destino (USD o EUR):").toUpperCase();

console.log(convertirMoneda(montoCOP, moneda));
