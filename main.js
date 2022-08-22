// Creando clase con funciones locales
class usuario {
        constructor(nombre,apellido,edad,dni,direccion,clave,estado){
                this.nombre = nombre
                this.apellido = apellido
                this.edad = edad
                this.dni = dni
                this.direccion = direccion
                this.clave = clave
                this.estado = estado
        }
        activarUsuario(){
                let error = "el usuario ya está activado"
                if (this.estado == false) {
                        this.estado = true
                } else {
                        alert(error)
                }
        }
        desactivarUsuario(){
              let error = "el usuario ya está desactivado"
              if (this.estado == true) {
                        this.estado = false
              } else {
                        alert(error)
              }  
        }
}

// Creando objetos
let usuario1 = new usuario("miguel","johnson",34,70442828,"Av. Coronel 321",123456,true)
let usuario2 = new usuario("juan","ordoñez",40,12345678,"Av. Pacifico 232",987654,false)
let usuario3 = new usuario("vanesa","palomino",32,34768593,"Av. Trapiche 345",444444,true)
let usuario4 = new usuario("sara","jimenez",23,98876788,"Av. Tungasuca 578",980998,false)
let usuario5 = new usuario("julio","salas",45,34098988,"Av. Delicias 445",321323,true)

// Creando un array
const regUsuario = []

// Cargando datos al array
regUsuario.push(usuario1,usuario2,usuario3,usuario4,usuario5)

// Creando una funcion de agregar usuario por prompt
function agregarUsuario(){
        let nombreUsuarioNuevo = prompt("Ingrese su nombre:")
        let apellidoUsuarioNuevo = prompt("Ingrese su apellido:")
        let edadUsuarioNuevo = Number(prompt("Ingrese su edad:"))
        let dniUsuarioNuevo = Number(prompt("Ingrese el nro de su DNI:"))
        let direccionUsuarioNuevo = prompt("Ingrese su direccion:")
        let claveUsuarioNuevo = Number(prompt("Ingrese su clave:"))
        let estadoUsuarioNuevo = confirm("Ingrese el estado del usuario:")
        let usuarioNuevo = new usuario(nombreUsuarioNuevo,apellidoUsuarioNuevo,edadUsuarioNuevo,dniUsuarioNuevo,direccionUsuarioNuevo,claveUsuarioNuevo,estadoUsuarioNuevo)
        regUsuario.push(usuarioNuevo)        
}

// Busqueda de usuarios por nombre
let usuarioValid = prompt("Para usar el Sistema de Cash_Now, por favor \nIngrese su usuario:")
const buscarUsuario = regUsuario.some(usuario => usuario.nombre == usuarioValid)

// Busqueda de usuarios por clave
let claveValid = prompt("Ahora ingrese su clave:")
const buscarClave = regUsuario.some(usuario => usuario.clave == claveValid)

// Agregando la funcion de validar usuario
function validarUsuarios() {
        if (buscarUsuario == true && buscarClave == true) {
        alert("Hola " + usuarioValid + "!! Bienvenido al sistema de Cash Now, puedes operar")
        } else if (buscarUsuario == false || buscarClave == false) {
        alert("Usted no se encuentra en nuestra Base de datos")
        let deseaUsuario = prompt("Desea agregar un nuevo Usuario").toUpperCase()
        while (deseaUsuario == "SI") {
                agregarUsuario()
                deseaUsuario = prompt("Desea agregar otro Usuario").toUpperCase()
        }
        } else {
                alert("Ocurrio un error, lo sentimos")
        }   
}

//Imprimiedo la funcion de validar usuario e imprimiendo los registros actualizados
validarUsuarios()
console.log(regUsuario)

//Creando array de saludos random
const mensajes = ["mensaje random 1", "mensaje random 2", "mensaje random 3", "mensaje random 4"]
let aleatorio = Math.floor(Math.random()*(mensajes.length))
console.log(mensajes[aleatorio])

//Creando elementos desde objetos
for (const logeado of regUsuario) {
        let contenedor = document.createElement("div")
        contenedor.innerHTML = `<h3> Nombre: ${logeado.nombre} </h3>         
                                <p> DNI: ${logeado.dni} </p>
                                <b> Estado: ${logeado.estado}</b>`
        document.body.appendChild(contenedor)
}

//Ingresando datos para modificar el DOM
let modifica1 = document.getElementById("modificando")
modifica1.innerHTML = `<h5 class="card-header">Area de Prestamos</h5>`

let modifica2 = document.getElementById("modificando2")
modifica2.innerHTML = `<h5 class="card-title">Prestamos a tu medida</h5>`

let modifica3 = document.getElementById("modificando3")
modifica3.innerHTML = `<p class="card-text">Con Cash Now podras tener tu dinero en menos de 30 minutos, al alcance de tus manos.</p>`

let modifica4 = document.getElementById("modificando4")
modifica4.innerHTML = `<a href="#" class="btn btn-primary">Pedir prestamo ahora..</a>`

