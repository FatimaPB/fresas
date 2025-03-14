function guardarPedido() {
    var nombre = document.getElementById("nombre").value.trim();
    var opcionesSeleccionadas = [];
    var resultado = document.getElementById("resultado");
    
    // Recolectar las opciones seleccionadas
    var opciones = document.querySelectorAll('input[name="opciones"]:checked');
    opciones.forEach(function(opcion) {
        opcionesSeleccionadas.push(opcion.value);
    });
    
    if (nombre === "" || opcionesSeleccionadas.length === 0) {
        alert("Por favor, ingresa tu nombre y selecciona al menos una opción.");
        return;
    }
    
    var pedido = { nombre, opciones: opcionesSeleccionadas };
    var pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];
    pedidos.push(pedido);
    localStorage.setItem("pedidos", JSON.stringify(pedidos));
    
    // Mostrar el mensaje de agradecimiento
    resultado.innerHTML = `<p>Gracias, <strong>${nombre}</strong>. Has elegido ${opcionesSeleccionadas.map(opcion => `<strong>${opcion}</strong>`).join(", ")}.</p>`;
    resultado.style.display = "block";
    
    // Ocultar el mensaje después de 3 segundos
    setTimeout(function() {
        resultado.style.display = "none";
    }, 3000); // 3000 milisegundos = 3 segundos
    
    // Limpiar el formulario
    document.getElementById("nombre").value = "";
    document.querySelectorAll('input[name="opciones"]').forEach(function(checkbox) {
        checkbox.checked = false;
    });
}
