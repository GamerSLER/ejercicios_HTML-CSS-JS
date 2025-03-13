// Inicializamos un contador global para los IDs
var contadorId = 1;
// Función llamada por el botón "Generar fila"
function generarFila() {
 var nombre = document.getElementById('nombre').value;
 var edad = document.getElementById('edad').value;
 // Validación básica para asegurarse de que los campos no estén vacíos
 if (!nombre || !edad) {
 alert("Rellena los campos Nombre y Edad.");
 return;
 }
 // Obtener el elemento de la tabla
 var tabla = document.getElementById('tabla-registros');

 // Obtener todos los <tbody> de la tabla
 var tbodies = tabla.getElementsByTagName('tbody');

 // Obtener el primer <tbody> de la lista de tbodies
 var tbody = tbodies[0];
 var nuevaFila = document.createElement('tr');
 // Crear celdas para la fila
 var idCell = document.createElement('td');
 idCell.appendChild(document.createTextNode(contadorId)); // Asignar el ID desde el
contador
 nuevaFila.appendChild(idCell);
 var nombreCell = document.createElement('td');
 nombreCell.appendChild(document.createTextNode(nombre));
 nuevaFila.appendChild(nombreCell);
 var edadCell = document.createElement('td');
 edadCell.appendChild(document.createTextNode(edad));
 nuevaFila.appendChild(edadCell);
 // Agregar la nueva fila a la tabla
 tbody.appendChild(nuevaFila);
 // Incrementar el contador para el próximo ID
 contadorId++;
 // Limpiar los campos del formulario (Nombre y Edad)
 document.getElementById('nombre').value = '';
 document.getElementById('edad').value = '';
}
