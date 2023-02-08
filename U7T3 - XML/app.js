window.onload = iniciar;

function iniciar() {
    const botonMostrar = document.getElementById('mostrar');
    botonMostrar.addEventListener('click', solicitudHTTP);
}

function solicitudHTTP() {
    const xhr = new XMLHttpRequest();
    const tabla = document.getElementById('tabla');
    let xml;

    xhr.open('GET', 'http://localhost:8090/U7T3%20-%20XML/series.xml');
    xhr.send();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            let arraySeries = new Array();
            let length = xhr.responseXML.children[0].childElementCount;

            for (let i = 0; i < length; i++) {
                const serie = xhr.responseXML.children[0].children[i].children
                arraySeries.push(serie);
            }

            crearTabla(arraySeries);
        }
    };
}

function crearTabla(array) {
    const tabla = document.getElementById('tabla');
    const encabezado = document.createElement('tr');
    tabla.appendChild(encabezado);


    for (let i = 0; i < array.length; i++) {
        const fila = document.createElement('tr');
        const serie = array[i];

        for (let i = 0; i < serie.length; i++) {
            let th = document.querySelectorAll('th')
            //Para crear los titulos de los encabezados
            if (th.length >= 0 && th.length < 5) {
                const datoTitulo = document.createElement('th');
                datoTitulo.innerHTML = serie[i].nodeName
                encabezado.appendChild(datoTitulo);
            }

            const dato = document.createElement('td');
            const element = serie[i].innerHTML;

            tabla.appendChild(fila);
            fila.appendChild(dato);
            dato.innerHTML = element;

            if (serie[i].nodeName == 'terminada') verificar(serie[i].innerHTML, encabezado, fila);
        }
    }
}

function verificar(valor, encabezado, fila) {
    const thVer = document.querySelectorAll('th')
    //Creamos la cabecera solo una vez
    if (thVer.length != 6) {
        const datoTitulo = document.createElement('th');
        datoTitulo.innerHTML = 'Verificación';
        encabezado.appendChild(datoTitulo);
    }
    
    const dato = document.createElement('td');
    const img = document.createElement('img');
    fila.appendChild(dato);
    
    switch (valor) {
        case 'Si':
            img.src = 'images/yes.png';
            dato.appendChild(img);
            break;
        case 'No':
            img.src = 'images/non.png';
            dato.appendChild(img);
            break;
    }
}