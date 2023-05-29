const $btnSignIn = document.querySelector('.sign-in-btn'),
      $btnSignUp = document.querySelector('.sign-up-btn'),
      $signUp = document.querySelector('sign-up'),
      $signIn = document.querySelector('.sign-in');

document.addEventListener('click', e => {
    if (e.target === $btnSignIn || e.target === $btnSignUp) {
        $signIn.classList.toggle('active');
        $signUp.classList.toggle('inactive')
    }
})   



function agregarRegistro() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var tipoEntrada = document.getElementById("tipo-entrada").value;
    var restaurante = document.getElementById('restaurante').value;
    var fecha = document.getElementById('fecha').value;

    if (nombre !== "" && apellido !== "") {
        var tabla = document.getElementById("tabla-registros");

        var fila = tabla.insertRow();
        var celdaNombre = fila.insertCell();
        var celdaApellido = fila.insertCell();
        var celdaTipoEntrada = fila.insertCell();
        var celdaRestaurante = fila.insertCell();
        var celdaFecha = fila.insertCell();
        var celdaAcciones = fila.insertCell();

        celdaNombre.innerHTML = nombre;
        celdaApellido.innerHTML = apellido;
        celdaTipoEntrada.innerHTML = tipoEntrada;
        celdaRestaurante.innerHTML = restaurante;
        celdaFecha.innerHTML = fecha;
        celdaAcciones.innerHTML = "<button onclick='editarRegistro(this)'>Editar</button> <button onclick='eliminarRegistro(this)'>Eliminar</button>";

        document.getElementById("nombre").value = "";
        document.getElementById("apellido").value = "";
    }
}

function eliminarRegistro(boton) {
    var fila = boton.parentNode.parentNode;
    fila.parentNode.removeChild(fila);
}

function editarRegistro(boton) {
    var fila = boton.parentNode.parentNode;
    var celdas = fila.getElementsByTagName("td");

    var nombre = celdas[0].innerHTML;
    var apellido = celdas[1].innerHTML;
    var tipoEntrada = celdas[2].innerHTML;
    var restaurante = celdas [3].innerHTML;
    var fecha = celdas [4].innerHTML;

    document.getElementById("nombre").value = nombre;
    document.getElementById("apellido").value = apellido;
    document.getElementById("tipo-entrada").value = tipoEntrada;
    document.getElementById('restaurante').value = tipoRestaurante;
    document.getElementById('fecha').value = fecha

    fila.parentNode.removeChild(fila);
}