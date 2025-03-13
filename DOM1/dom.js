function realizarAccion(){
    var compra = document.getElementsByTagName("li");
    var titulo = document.getElementsByTagName("h1");
    console.log(compra.length);
    compra[0].textContent = "pera";
    titulo[0].style = "color: red; background-color:blue";
    for (var i = 0; i < compra.length; i++)
    compra[i].style = "color: green";
}