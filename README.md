# Depuración
- Abrimos con VScode el directorio raíz del servidor
- Copiamos la ruta relativa del archivo index.html
- launch.json
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "chrome",
            "request": "launch",
            "name": "Iniciar Chrome para localhost",
            //Cambiar el directorio de carpeta según ejercicio
            "url": "http://localhost:8090",
            "webRoot": "${workspaceFolder}"
        }
    ]
}

# PHPmyAdmin
http://localhost:8080/
usuario y contraseña: dwec