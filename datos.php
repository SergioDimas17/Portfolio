<?php

// Crear una matriz para almacenar los datos del formulario
$datos = array();

// Obtener los datos del formulario
$nombre = $_POST["nombre"];
$correo = $_POST["correo"];
$mensaje = $_POST["mensaje"];

// Agregar los datos a la matriz
$datos["nombre"] = $nombre;
$datos["correo"] = $correo;
$datos["mensaje"] = $mensaje;

// Guardar los datos en un archivo
$archivo = fopen("datos.txt", "a");
fwrite($archivo, json_encode($datos) . "\n");
fclose($archivo);

// Establecer el tipo de contenido de la respuesta
header("Content-Type: text/plain");

// Imprimir el mensaje de confirmación
echo "Los datos se guardaron correctamente.";

// Terminar la ejecución del script PHP
die();

?>