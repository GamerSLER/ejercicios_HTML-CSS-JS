function contar(){
    var filas = document.getElementsByTagName("tr");
    alert("Hay " + (filas.length-1) + " filas.")

    filas[3].textContent = "Descuento"
    
}