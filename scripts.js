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
    fetch("https://doctors-api-theta.vercel.app/api/pedidos")  // 👈 Cambia esto por tu URL real
        .then(response => response.json())
        .then(pedidos => {
            var pedidosDiv = document.getElementById("pedidos");
            pedidosDiv.innerHTML = "";

            pedidos.forEach((pedido, index) => {
                pedidosDiv.innerHTML += `<p><strong>${index + 1}.</strong> ${pedido.nombre} - ${pedido.opciones.join(", ")}</p>`;
            });
        })
        .catch(error => console.error("Error al cargar pedidos:", error));
}

// 🗑️ Modificar `borrarPedidos()` para eliminar los pedidos de la base de datos
function borrarPedidos() {
    if (confirm("¿Estás seguro de borrar todos los pedidos?")) {
        fetch("https://doctors-api-theta.vercel.app/api/eliminarpedidos", {  // 👈 Cambia esto por tu URL real
            method: "DELETE"
        })
        .then(response => response.json())
        .then(data => {
            alert(data.mensaje);
            cargarPedidos();
        })
        .catch(error => console.error("Error al borrar pedidos:", error));
    }
}

