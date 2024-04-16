let listaClientes = JSON.parse(localStorage.getItem("listaClientes"));

let nomUser = document.getElementById("nombUser");
nomUser.innerHTML = listaClientes[0].nombre;

let apellidos = document.getElementById("apellidos");
apellidos.innerHTML = listaClientes[0].apellidos;


let telefono = document.getElementById("telefono");
telefono.innerHTML = listaClientes[0].telefono;

let email = document.getElementById("email");
email.innerHTML = listaClientes[0].email;

let DNI = document.getElementById("dni");
dni.innerHTML = listaClientes[0].dni;


