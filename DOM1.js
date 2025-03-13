function realizarCambios(){
    var listaCompras = document.getElementById("lista-compra");

    
    var numElementos = listaCompras.getElementsByTagName("li").length;
    console.log("Números de elementos en la lista de compras: ", numElementos);

    var primerElemento = listaCompras.getElementsByTagName("li");
    primerElemento.textContent="peras";

    var cambiarColorTitulo = document.getElementById("titulo");
    cambiarColorTitulo.style.backgroundColor="blue"

    var cambiarColorTexto = cambiarColorTexto.getElementsByTagName("li");
    for(var i = 0; i < cambiarColorTitulo.length; i++){
        cambiarColorTexto[i].style.color="green"
    }

    getElementsByClassName()
    var tituloClase = document.getElementsByClassName("Titulo")[0];
    tituloClase.style.color="red";
}