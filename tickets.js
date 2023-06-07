function agregarRegistro() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var tipoEntrada = document.getElementById("tipo-entrada").value;
    var cantidad = document.getElementById('cantidad').value;
    var restaurante = document.getElementById('restaurante').checked;
    var fecha = document.getElementById('fecha').value;


    if (nombre == "") {
        alert("Debes ingresar el nombre");
    } else if (apellido == "") {
        alert("Debes ingresar el apellido");
    } else if(tipoEntrada == ""){
        alert("Debes seleccionar tipo de ticket");
    }else if(cantidad == ""){
        alert("Debes elegir cuántas entradas")

    }else if(fecha == ""){
        alert("Debes seleccionar una fecha")
    } else {
        var tabla = document.getElementById("tabla-registros");

            var fila = tabla.insertRow();
            var celdaNombre = fila.insertCell();
            var celdaApellido = fila.insertCell();
            var celdaTipoEntrada = fila.insertCell();
            var celdaCantidad = fila.insertCell();
            var celdaRestaurante = fila.insertCell();
            var celdaFecha = fila.insertCell();
            var celdaAcciones = fila.insertCell();
    
            celdaNombre.innerHTML = nombre;
            celdaApellido.innerHTML = apellido;
            celdaTipoEntrada.innerHTML = tipoEntrada;
            celdaCantidad.innerHTML = cantidad;
            celdaRestaurante.innerHTML = restaurante ? 'Sí' : 'No';
            celdaFecha.innerHTML = fecha;
            celdaAcciones.innerHTML = "<button onclick='editarRegistro(this)'>Editar</button> <button onclick='eliminarRegistro(this)'>Eliminar</button>";
    
            document.getElementById("nombre").value = "";
            document.getElementById("apellido").value = "";
            document.getElementById("tipo-entrada").value = "";
            document.getElementById("cantidad").value = "";
            document.getElementById("restaurante").checked = "";
            document.getElementById("fecha").value = "";
    }


}

function eliminarRegistro(boton) {
    var fila = boton.parentNode.parentNode;
    
    document.getElementById("tipo-entrada").value = "";
    document.getElementById("cantidad").value = "";
    document.getElementById("restaurante").checked = "";
    document.getElementById("fecha").value = "";
    
    fila.parentNode.removeChild(fila);
}

function editarRegistro(boton) {
    var fila = boton.parentNode.parentNode;
    var celdas = fila.getElementsByTagName("td");

    var nombre = celdas[0].innerHTML;
    var apellido = celdas[1].innerHTML;
    var tipoEntrada = celdas[2].innerHTML;
    var cantidad = celdas[3].innerHTML;
    var restaurante = celdas[4].innerHTML;
    var fecha = celdas[5].innerHTML;

    document.getElementById("nombre").value = nombre;
    document.getElementById("apellido").value = apellido;
    document.getElementById("tipo-entrada").value = tipoEntrada;
    document.getElementById("cantidad").value = cantidad;
    document.getElementById('restaurante').value = restaurante;
    document.getElementById('fecha').value = fecha

    fila.parentNode.removeChild(fila);
}