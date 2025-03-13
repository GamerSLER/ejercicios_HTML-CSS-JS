function enviarFormulario() {
    var nombre = document.getElementById('nombre').value;
    var correo = document.getElementById('correo').value;
    var genero = document.getElementById('genero').value;
    // Validación de campos vacíos
    if (!nombre || !correo || !genero) {
    alert("Rellena todos los campos.");
    } else {
    alert("Nombre: " + nombre + "\nCorreo: " + correo + "\nGénero: " + genero);
    }
   }