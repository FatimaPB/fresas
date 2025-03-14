function guardarPedido() {
    var nombre = document.getElementById("nombre").value.trim();
    var opcionesSeleccionadas = [];
    var resultado = document.getElementById("resultado");

    // Recolectar las opciones seleccionadas
    document.querySelectorAll('input[name="opciones"]:checked').forEach(opcion => {
        opcionesSeleccionadas.push(opcion.value);
    });

    if (nombre === "" || opcionesSeleccionadas.length === 0) {
        alert("Por favor, ingresa tu nombre y selecciona al menos una opción.");
        return;
    }

    var pedido = { nombre, opciones: opcionesSeleccionadas };

    // Enviar pedido a la API en Vercel
    fetch("https://doctors-api-theta.vercel.app/api/pedidos", {  // 👈 Cambia esto por tu URL real
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(pedido),
    })
    .then(response => response.json())
    .then(data => {
        alert(data.mensaje);
        document.getElementById("nombre").value = "";
        document.querySelectorAll('input[name="opciones"]').forEach(checkbox => checkbox.checked = false);
    })
    .catch(error => console.error("Error:", error));
}
