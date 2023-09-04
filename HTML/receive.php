<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $nombre = $_POST["nombre"];
    $email = $_POST["email"];
    $password = $_POST["password"];

    // Procesar los datos, guardar en la base de datos, enviar correos, etc.

    // Enviar una respuesta al cliente (puede ser un mensaje JSON)
    $response = ["message" => "¡Formulario enviado con éxito!"];
    header("Content-Type: application/json");
    echo json_encode($response);
} else {
    header("HTTP/1.1 405 Method Not Allowed");
    exit("Método no permitido");
}
?>
