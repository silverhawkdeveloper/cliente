let READY_STATE_COMPLETE = 4;
let HTTP_STATUS_OK = 200;

let peticion_http;

window.onload = carga_contenido;

function carga_contenido() {
    const campoTexto = document.getElementById('campoTexto');
    const botonMostrar = document.getElementById('botonMostrar');

    botonMostrar.addEventListener('click', crearTextArea);

    if (window.XMLHttpRequest) {
        peticion_http = new XMLHttpRequest();
    } else {
        alert("No tienes soporte para AJAX");
        return;  // Salimos y no hacemos la petición
    }

    // Preparamos la petición
    if (peticion_http) {
        const URL = "http://localhost:8090/U7T1-Lector_ficheros/holamundo.txt";
        campoTexto.innerHTML = URL;
        // en la petición, me suscribo al evento "ReadyStateChange", y le 
        // digo que me llame a muestra_contenido cada vez que suceda (que cambie el estado)
        peticion_http.onreadystatechange = muestra_contenido;
        peticion_http.open("GET", URL, true);
        peticion_http.send();
    }
}

function muestra_contenido() {
    if (peticion_http.readyState === READY_STATE_COMPLETE) {
        if (peticion_http.status === HTTP_STATUS_OK) {
            alert(peticion_http.responseText);
        }
    }
}

function crearTextArea() {
    const body = document.querySelector('body');
    const URL = "http://localhost:8090/U7T1-Lector_ficheros/holamundo.txt";
    let textArea = document.createElement('textarea');
    textArea.innerHTML = URL;
    body.appendChild(textArea);
}