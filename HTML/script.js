document.addEventListener("DOMContentLoaded", function () {
        const formulario = document.getElementById("miFormulario");
        const respuesta = document.getElementById("respuesta");
    
        formulario.addEventListener("submit", function (e) {
            e.preventDefault(); // Evitar que el formulario se envíe automáticamente
    
            // Obtener los valores de los campos del formulario
            const nombre = document.getElementById("nombre").value;
            const email = document.getElementById("email").value;
            const mensaje = document.getElementById("password").value;
    
            // Aquí puedes realizar validaciones adicionales si es necesario
    
            // Enviar los datos a través de una solicitud AJAX (por ejemplo, usando fetch)
            fetch("/tu_servidor", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ nombre, email, password }),
            })
            .then((response) => response.json())
            .then((data) => {
                // Manejar la respuesta del servidor
                respuesta.innerHTML = data.message;
            })
            .catch((error) => {
                console.error("Error al enviar el formulario:", error);
            });
        });
    });
    