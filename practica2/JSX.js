let nombre;
let edad;
let filaNueva;
var id_fila = 0

nombre = document.getElementById("nombre").value;
edad = document.getElementById("edad").value;
filaNueva = document.getElementById("filaNueva").value;
generarFila(){
    filaNueva = document.createElement("tr");
    filaNueva.id = toString(id_fila);
    id_fila += 1;
    document.getElementById("TABLA").value;
}