function validarContraseña(contraseña) {
  let tiene8Caracteres = contraseña.length >= 8;
  let tieneNumero = /\d/.test(contraseña);
  let tieneMayuscula = /[A-Z]/.test(contraseña);

  return tiene8Caracteres && tieneNumero && tieneMayuscula;
}

// Prueba
let contraseñaUsuario = prompt("Ingresa una contraseña:");

if (validarContraseña(contraseñaUsuario)) {
  console.log("Contraseña válida");
} else {
  console.log("Contraseña inválida");
}
