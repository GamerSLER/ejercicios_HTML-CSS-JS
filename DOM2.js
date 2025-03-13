function modificarTabla() {
    let tabla = document.getElementById("tablaProductos");
    let filas = tabla.getElementsByTagName("tr");

    alert("Número de productos en la tabla: " + (filas.length -1));

    let ultimaFila = filas[filas.length - 1].getElementsByTagName("td");
    ultimaFila[0].textContent = "¡DESCUENTO!";
    ultimaFila[1].textContent = "50% OFF";

    tabla.style.backgroundColor="lightgray"

    let titulo = document.getElementById("titulo");
    titulo.style.fontFamily="Courier New"; 
    titulo.style.textAlign="Center";
}