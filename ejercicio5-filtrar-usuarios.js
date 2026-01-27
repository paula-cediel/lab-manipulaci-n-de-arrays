const usuarios = [
  { nombre: "Ana", edad: 25 },
  { nombre: "Luis", edad: 17 },
  { nombre: "Carlos", edad: 30 },
  { nombre: "María", edad: 19 }
];

function filtrarUsuarios(usuarios, edadMinima) {
  let resultado = [];

  for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].edad >= edadMinima) {
      resultado.push(usuarios[i]);
    }
  }

  return resultado;
}

// Prueba
let edadUsuario = Number(prompt("Ingresa la edad mínima:"));

let usuariosFiltrados = filtrarUsuarios(usuarios, edadUsuario);

console.log("Usuarios que cumplen con la edad mínima:");
console.log(usuariosFiltrados);
