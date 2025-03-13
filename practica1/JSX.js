function mostrarAlerta(){
    let nombre;
    let email;
    let genero;

    nombre = document.getElementById("nombre").value;
    email = document.getElementById("email").value;
    genero = document.getElementById("genero").value;

   

    if(nombre === "" || email === "" || genero === ""){
        alert("Falta introducir datos.");
    } else {
        alert("Hola " + nombre + ", tu email es: " + email + ". Eres " + genero + ".");
    }
}