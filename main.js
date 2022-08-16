const usuarioReg = ["miguel", "pedro", "juana", "vilma"];
let usuarioValid = prompt("Ingrese su usuario:");
const nuevoUsuario = [];
let cantidad = 1;

function valida (){    
    if (usuarioReg.includes(usuarioValid)) {
    alert("usuario registrado, puede usar el sistema");       
    } else {
    // for (let i=1; i<4; i++){
    alert("no puede usar el sistema, necesita registrarse");
    // usuarioValid = prompt("Intente nuevamente:");
    //         }   
    do {
        let entrada = prompt("Ingrese al nuevo usuario:");
        usuarioReg.push(entrada.toLowerCase());
        alert("Gracias por registrarse")
        alert("Los usuarios registrados hasta el momento son: " + "\n" + usuarioReg.join("\n"));
    } while (usuarioReg.includes(usuarioValid)=false);
    }}

valida();
