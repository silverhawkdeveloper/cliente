window.onload = iniciar;

function iniciar() {
    const botonMostrar = document.getElementById('mostrar');
    botonMostrar.addEventListener('click', solicitudHTTP);
}

function solicitudHTTP() {
    const xhr = new XMLHttpRequest();
    const tabla = document.getElementById('tabla');

    xhr.open('GET', 'http://localhost:8090/U7T4%20-%20JSON/tvshows.json');
    xhr.send();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const resultados = JSON.parse(this.responseText);
            const frutas = resultados.Fruteria[0].Fruta;
            const verduras = resultados.Fruteria[1].Verdura;

            crearTabla(frutas, 'Frutas');
            crearTabla(verduras, 'Verduras');
        }
    };
}

function crearTabla(array, tipo) {
    const tabla = document.getElementById('tabla');
    const encabezado = document.createElement('tr');
    const dato1 = document.createElement('th');
    const dato2 = document.createElement('th');
    tabla.appendChild(encabezado);
    tabla.appendChild(dato1);
    tabla.appendChild(dato2);
    dato1.innerHTML = tipo;
    dato2.innerHTML = 'Cantidad'


    for (let i = 0; i < array.length; i++) {
        const fila = document.createElement('tr');
        tabla.appendChild(fila);
        const element = array[i];
        const dato1 = document.createElement('td');
        const dato2 = document.createElement('td');
        tabla.appendChild(dato1);
        tabla.appendChild(dato2);
        dato1.innerHTML = element.Nombre;
        dato2.innerHTML = element.Cantidad;
    }
}