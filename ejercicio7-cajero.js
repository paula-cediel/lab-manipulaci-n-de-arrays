function retirarDinero(saldo, monto) {
  if (monto <= saldo) {
    let nuevoSaldo = saldo - monto;
    return "Retiro exitoso. Nuevo saldo: " + nuevoSaldo;
  } else {
    return "Fondos insuficientes";
  }
}

// Prueba
let saldoActual = Number(prompt("Ingresa tu saldo actual:"));
let montoRetiro = Number(prompt("Ingresa el monto a retirar:"));

console.log(retirarDinero(saldoActual, montoRetiro));
