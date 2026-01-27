function contarPalabras(texto) {
  let palabras = texto.trim().split(" ");
  return palabras.length;
}

// Prueba
let textoUsuario = prompt("Escribe un texto:");

console.log("Número de palabras:", contarPalabras(textoUsuario));
