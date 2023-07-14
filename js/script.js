window.onload=inicio;
var inputDni=document.getElementById("dni");
var inputNombre=document.getElementById("nombre");
var inputApellido=document.getElementById("apellido"); 
var inputDireccion=document.getElementById("direccion"); 
var inputEmail=document.getElementById("email");

var inputDniSoc=document.getElementById("dniSocio");
var inputDniBuscado=document.getElementById("dniBuscado");
var inputNombreSoc=document.getElementById("nombreSocio");
var inputApellidoSoc=document.getElementById("apellidoSocio"); 
var inputDireccionSoc=document.getElementById("direccionSocio"); 
var inputEmailsoc=document.getElementById("emailSocio"); 

var btnEnviar=document.getElementById("btn1");
var btnBuscar=document.getElementById("btn2");
var btnBuscarSoc=document.getElementById("btn3");
var socio={};
var socios=[];
var socios=JSON.parse(localStorage.getItem("socLS"));

function limpiarInput (){
    inputDniSoc.value=""; 
    inputNombreSoc.value=""; 
    inputApellidoSoc.value=""; 
    inputDireccionSoc.value=""; 
    inputEmailSoc.value="";
    inputCuotaSoc.value="";
    inputCategoriaSoc.value="";
    inputAccesoSoc.value=""; 
}


function inicio (){
btnEnviar.addEventListener("click", guardarSocioNuevo);
btnBuscar.addEventListener("click", buscarMisDatos);
btnBuscarSoc.addEventListener("click", buscarDatos);
};

function buscarDatos (){
    var datosEncontrado=socios.find((socio)=>{
        if (socio.dni===inputDniBuscado.value)
        {return 1}
    });
    inputDniSoc.value=datosEncontrado.dni; 
    inputNombreSoc.value=datosEncontrado.nombre; 
    inputApellidoSoc.value=datosEncontrado.apellido; 
    inputDireccionSoc.value=datosEncontrado.direccion; 
    inputEmailsoc.value=datosEncontrado.email; 
};

function buscarMisDatos (){
    var datosEncontrado=socios.find((socio)=>{
        if (socio.dni===inputDniBuscado.value)
        {return 1}
    });
    inputDni.value=datosEncontrado.dni; 
    inputNombre.value=datosEncontrado.nombre; 
    inputApellido.value=datosEncontrado.apellido; 
    inputDireccion.value=datosEncontrado.direccion; 
    inputEmail.value=datosEncontrado.email; 

    inputDniSoc.value=datosEncontrado.dni; 
    inputNombreSoc.value=datosEncontrado.nombre; 
    inputApellidoSoc.value=datosEncontrado.apellido; 
    inputDireccionSoc.value=datosEncontrado.direccion; 
    inputEmailsoc.value=datosEncontrado.email; 
};

function guardarSocioNuevo (){
    socio={}; 

    socio.dni=inputDni.value; 
    socio.nombre=inputNombre.value; 
    socio.apellido=inputApellido.value; 
    socio.direccion=inputDireccion.value; 
    socio.email=inputEmail.value; 

    inputDni.value=""; 
    inputNombre.value=""; 
    inputApellido.value=""; 
    inputDireccion.value=""; 
    inputEmail.value=""; 

    var inputCuota="Para verificar"; 
    socio.cuota=inputCuota; 
    inputCuota="";

    var inputCategoriaSocio="A asignar"; 
    socio.categoria=inputCategoriaSocio; 
    inputCategoriaSocio="";

    var inputAccesoEstadio="A asignar"; 
    socio.acceso=inputAccesoEstadio; 
    inputAccesoEstadio="";

    socios.push(socio);
    localStorage.setItem("socLS",JSON.stringify(socios));

    alert("Su formulario fue enviado correctamente");
};