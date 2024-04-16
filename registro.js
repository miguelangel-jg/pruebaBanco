class Cliente {
  constructor(nombre, apellidos, telefono, dni, email, password, cuenta) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.telefono = telefono;
    this.dni = dni;
    this.email = email;
    this.password = password;
    this.tCuenta = cuenta;
  }
}

// Array de clientes:
let listaClientes = [];

//Accion del boton para registrarse:
document.getElementById("registrarse").addEventListener("click", () => {
  let nombre = document.getElementById("nombre").value;
  let apellidos = document.getElementById("apellidos").value;
  let telefono = parseInt(document.getElementById("telefono").value);
  let dni = document.getElementById("dni").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let cuenta = document.getElementById("tCuenta").value;

  console.log("Aqui llega");

  if (nombre && apellidos && telefono && dni && email && password) {
    // Creamos un nuevo cliente
    let nCliente = new Cliente(
      nombre,
      apellidos,
      telefono,
      dni,
      email,
      password,
      cuenta
    );
    // Añadimos el nuevo cliente al array de clientes:
    listaClientes.push(nCliente);

    console.log("Elementos en el array " + listaClientes.length)

    alert("Cliente añadido");

    // Redirigir a la página de inicio de sesión
    window.location.href = "inicio-sesion.html";
  } else {
    alert("Por favor introduzca los valores en el formulario");
  }
});

// document.getElementById("iniciarSesion").addEventListener("click", () => {
//     alert("Detecta Iniciar Sesion");
//   // Ahora puedes usar listaClientes en tu lógica para iniciar sesión, por ejemplo:
//   function verificarUsuario(email, password) {
//     const usuario = listaClientes.find(
//       (cliente) => cliente.email === email && cliente.password === password
//     );
//     return usuario !== undefined;
//   }

//   // Ejemplo de uso
//   const emailUsuario = document.getElementById("user").value; // Obtener el valor del campo de correo electrónico
//   const passwordUsuario = document.getElementById("passwd").value; // Obtener el valor del campo de contraseña

//   if (verificarUsuario(emailUsuario, passwordUsuario)) {
//     alert("Usuario válido. Iniciando sesión...");

//     let nombreUsuario = "";

//     for (let i = 0; i < listaClientes.length; i++) {
//       if (emailUsuario == listaClientes[i].email);
//       nombreUsuario = listaClientes[i].nombre;
//     }

//     // Aquí puedes redirigir al usuario a la página de inicio de sesión exitosa
//     window.location.href = "clientes.html";
//     alert("Ha llegado");
//   } else {
//     alert("Usuario no válido. Verifica tus credenciales.");
//   }
// });

function registrarUsuario() {
  // Tu código de registro aquí
}

// Asociar la función a un evento en ambos archivos HTML
window.onload = function() {
  document.getElementById("registrarse").addEventListener("click", registrarUsuario);
};


function iniciarSesion() {
  const emailUsuario = document.getElementById("user").value; // Obtener el valor del campo de correo electrónico
  const passwordUsuario = document.getElementById("passwd").value; // Obtener el valor del campo de contraseña

  let encontrado = false;

  // Verificar si la lista de clientes no está vacía
  if (listaClientes.length > 0) {
    for (let i = 0; i < listaClientes.length; i++) {
      // Comprobar si el email y la contraseña coinciden
        
      if (emailUsuario === listaClientes[i].email) {
        encontrado = true;
        break; // Salir del bucle una vez que se encuentra el usuario
      }
    }
  }else{
    alert("lista Vacia")
  }

  if (encontrado) {
    alert("Usuario válido. Iniciando sesión...");
    
    // Aquí puedes redirigir al usuario a la página de inicio de sesión exitosa
    window.location.href = "clientes.html";
  } else {
    alert("Usuario no válido. Verifica tus credenciales.");
  }
};




//PAGINA CLIENTES:

//Buscar el numero de cliente que es: 
// let numCliente;
// for (let i = 0; i < listaClientes.length; i++) {
    
    
// }

// let nomUser = document.getElementById("nombUser");
// nomUser.innerHTML = nombreUsuario;

// //PAGINA DATOSCLIENTE
// let nomUser = document.getElementById("nombUser");
// nomUser.innerHTML = listaClientes[0].nombre;

// let apellidos = document.getElementById("apellidos");
// apellidos.innerHTML = listaClientes[0].apellidos;

// let telefono = document.getElementById("telefono");
// telefono.innerHTML = listaClientes[0].telefono;

// let email = document.getElementById("email");
// email.innerHTML = listaClientes[0].email;

// let DNI = document.getElementById("dni");
// dni.innerHTML = listaClientes[0].dni;
