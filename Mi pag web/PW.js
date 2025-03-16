let contador = 1;

function agregarFila() {
    let nombreInput = document.getElementById("nombre2");
    let nombre = nombreInput.value.trim();
    let mensaje = document.getElementById("mensaje");

    if (nombre === "") {
        mensaje.style.color = "red";
        mensaje.innerText = "⚠️ Error al introducir: El campo no puede estar vacío.";
        return;
    }

    let tabla = document.getElementById("tabla").getElementsByTagName('tbody')[0];
    let nuevaFila = tabla.insertRow();

    let celdaID = nuevaFila.insertCell(0);
    let celdaNombre = nuevaFila.insertCell(1);

    celdaID.innerText = contador;
    celdaNombre.innerText = nombre;

    contador++;

    nombreInput.value = "";

    mensaje.style.color = "green";
    mensaje.innerText = "✅ Introducido con éxito.";
}
