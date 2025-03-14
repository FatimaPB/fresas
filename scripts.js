function verificarClave() {
    var clave = document.getElementById("clave").value;
    if (clave === "GABjua123$") { // Cambia esta clave por una más segura
        document.getElementById("login").style.display = "none";
        document.getElementById("pedidosContainer").style.display = "block";
        cargarPedidos();
    } else {
        alert("Clave incorrecta");
    }
}

function cargarPedidos() {
    var pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];
    var pedidosDiv = document.getElementById("pedidos");
    pedidosDiv.innerHTML = "";
    
    // Mostrar los pedidos con las opciones
    pedidos.forEach((pedido, index) => {
        pedidosDiv.innerHTML += `<p><strong>${index + 1}.</strong> ${pedido.nombre} - ${pedido.opciones.join(", ")}</p>`;
    });
}

function borrarPedidos() {
    if (confirm("¿Estás seguro de borrar todos los pedidos?")) {
        localStorage.removeItem("pedidos");
        cargarPedidos();
    }
}
