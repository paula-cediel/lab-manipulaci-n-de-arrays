const inventario = [
  { nombre: "Camisa", precio: 20 },
  { nombre: "Zapatos", precio: 50 },
  { nombre: "Pantalón", precio: 40 }
];

function buscarProducto(nombre, inventario) {
  for (let i = 0; i < inventario.length; i++) {
    if (inventario[i].nombre.toLowerCase() === nombre.toLowerCase()) {
      return inventario[i];
    }
  }
  return null;
}

// Prueba
let productoBuscado = prompt("Ingresa el nombre del producto:");

let resultado = buscarProducto(productoBuscado, inventario);

if (resultado) {
  console.log("Producto encontrado:", resultado);
} else {
  console.log("Producto no encontrado");
}
