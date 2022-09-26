// const carrito = [];

// function agregarAlCarrito() {
//     Toastify({
//         text: "Probando Toast",
//         duration: "1000",
//     }).showToast();
// }

// fetch('bd.json', {
//     method: 'POST',
//     body: JSON.stringify({
//     userId: 1,
//     nombre: 'miguel',
//     apellido: 'johnson',
//     edad: 34,
//     dni: 70442828,
//     direccion: 'Av. Coronel 321',
//     clave: 123456,
//     estado: true
//     },
//     {
//     userId: 2,
//     nombre: 'juan',
//     apellido: 'ordoñez',
//     edad: 40,
//     dni: 12345678,
//     direccion: 'Av. Pacifico 232',
//     clave: 987654,
//     estado: false
//     },
//     {
//     userId: 3,
//     nombre: 'vanesa',
//     apellido: 'palomino',
//     edad: 32,
//     dni: 34768593,
//     direccion: 'Av. Trapiche 345',
//     clave: 444444,
//     estado: true
//     },
//     {
//     userId: 4,
//     nombre: 'sara',
//     apellido: 'jimenez',
//     edad: 23,
//     dni: 98876788,
//     direccion: 'Av. Tungasuca 578',
//     clave: 980998,
//     estado: false
//     },
//     {
//     userId: 5,
//     nombre: 'julio',
//     apellido: 'salas',
//     edad: 45,
//     dni: 34098988,
//     direccion: 'Av. Delicias 445',
//     clave: 321323,
//     estado: true,
//     }),
//     headers: {'Content-type': 'aplication/json;charset=UTF-8',},
// })
// .then((Response) => Response.json())
// .then((data) => console.log(data))



const lista = document.querySelector("#listado")

fetch('/data.json')
.then((res) => res.json())
.then((data) => {
  data.forEach((usuariosBd) => {
    const li = document.createElement('ul')
    li.innerHTML =
    `
    <div class="row card-group">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">${usuariosBd.userId}</h5>
        <h5 class="card-title">${usuariosBd.nombre}</h5>
        <p class="card-text">${usuariosBd.apellido}</p>
        <p class="card-text">${usuariosBd.edad}</p>
        <p class="card-text">${usuariosBd.dni}</p>
        <p class="card-text">${usuariosBd.direccion}</p>
        <p class="card-text">${usuariosBd.clave}</p>
        <p class="card-text">${usuariosBd.estado}</p>
        <a href="#" class="btn btn-primary">Editar usuario</a>
      </div>
    </div>
  </div>
  </div>
`
  // <h4>id: ${usuariosBd.userId}</h4>
    // <p>name: ${usuariosBd.nombre}</p>
    // <p>last name: ${usuariosBd.apellido}</p>    
    // <p>age: ${usuariosBd.edad}</p>
    // <p>dni: ${usuariosBd.dni}</p>
    // <p>direccion: ${usuariosBd.direccion}</p>
    // <p>password: ${usuariosBd.clave}</p>
    // <p>estado: ${usuariosBd.estado}</p>
    
    lista.append(li)
  })
})

const btn = document.querySelector('#btn');
const formulario = document.querySelector('#formulario');
const respuesta = document.querySelector('#respuesta');

const getData = () => {
    const datos = new FormData(formulario);
    const datosProcesados = Object.fromEntries(datos.entries());
    formulario.reset();
    return datosProcesados;
}

const postData = async() => {
const newUser = getData();
try {
    const Response = await fetch (
        'http://localhost:3000/prestamos', {
            method: 'post',
    headers:{'Content-Type': 'application/json'},
    body:JSON.stringify(newUser)
    });
    if(Response.ok){
    const jsonResponse = await Response.json();
    const {nombres, apellidos, email, direccion, distrito, 
    provincia, telefono, monto, plazo} = jsonResponse;
    respuesta.innerHTML = `
    <ul>
        !Éxito¡ Se guardó la siguiente información:
        <li>${nombres}</li>
        <li>${apellidos}</li>
        <li>${email}</li>
        <li>${direccion}</li>
        <li>${distrito}</li>
        <li>${provincia}</li>
        <li>${telefono}</li>
        <li>${monto}</li>
        <li>${plazo}</li>
    </ul>
    `
    }
} catch (error) {
    console.log(error);
}
}
btn.addEventListener('click', (event) => {
event.preventDefault();
postData();
})

