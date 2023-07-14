window.onload=inicio;
var inputDniSoc=document.getElementById("dniSocio");
var inputDniBuscado=document.getElementById("dniBuscado");
var inputNombreSoc=document.getElementById("nombreSocio");
var inputApellidoSoc=document.getElementById("apellidoSocio"); 
var inputDireccionSoc=document.getElementById("direccionSocio"); 
var inputEmailSoc=document.getElementById("emailSocio"); 
var inputCuotaSoc=document.getElementById("cuotaSocio"); 
var inputCategoriaSoc=document.getElementById("categoriaSocio"); 
var inputAccesoSoc=document.getElementById("accesoEstadio"); 

var btnBuscar=document.getElementById("btn2");
var btnModificarDatos=document.getElementById("btn3");
var btnBorrar=document.getElementById("btn4");
var btnValidarAcceso=document.getElementById("btn9");
var btnLimpiarInput=document.getElementById("btn10");
var socio={};
var socios=[];
var index=-1;
var socios=JSON.parse(localStorage.getItem("socLS"));


function inicio (){
btnBuscar.addEventListener("click", buscarMisDatos);
btnBorrar.addEventListener("click", borrarMisDatos);
btnModificarDatos.addEventListener("click", modificarMisDatos);
btnValidarAcceso.addEventListener("click", validarAcceso);
btnLimpiarInput.addEventListener("click", limpiarInput);
};


function buscarMisDatos (){
    var datosEncontrado=socios.find((socio)=>{
        if (socio.dni===inputDniBuscado.value)
        {return 1}
    }); 

    index = socios.findIndex(function (socio){
        return socio.dni=== inputDniBuscado.value;
    });

    inputDniSoc.value=datosEncontrado.dni; 
    inputNombreSoc.value=datosEncontrado.nombre; 
    inputApellidoSoc.value=datosEncontrado.apellido; 
    inputDireccionSoc.value=datosEncontrado.direccion; 
    inputEmailSoc.value=datosEncontrado.email; 
    inputCuotaSoc.value=datosEncontrado.cuota;
    inputCategoriaSoc.value=datosEncontrado.categoria;
    inputAccesoSoc.value="A asignar";

};

function borrarMisDatos (){
    socios.splice(index,1);
    localStorage.setItem("socLS", JSON.stringify(socios));
    

    inputDniSoc.value=""; 
    inputNombreSoc.value=""; 
    inputApellidoSoc.value=""; 
    inputDireccionSoc.value=""; 
    inputEmailSoc.value="";
    inputCuotaSoc.value="";
    inputCategoriaSoc.value="";
    inputAccesoSoc.value=""; 

    alert("Sus datos fueron borrados correctamente");
};

function modificarMisDatos (){
    
    var valorCuota=inputCuotaSoc.value
    var valorCategoria=inputCategoriaSoc.value
    var valorAcceso=inputAccesoSoc.value

    socio={};
    socio.dni=inputDniSoc.value; 
    socio.nombre=inputNombreSoc.value; 
    socio.apellido=inputApellidoSoc.value; 
    socio.direccion=inputDireccionSoc.value; 
    socio.email=inputEmailSoc.value;
    socio.cuota=valorCuota;
    socio.categoria=valorCategoria;
    socio.acceso=valorAcceso;

    socios.splice(index,1,socio);

    localStorage.setItem("socLS", JSON.stringify(socios));
    inputDniSoc.value=""; 
    inputNombreSoc.value=""; 
    inputApellidoSoc.value=""; 
    inputDireccionSoc.value=""; 
    inputEmailSoc.value=""; 
    inputCuotaSoc.value="";
    inputCategoriaSoc.value="";
    inputAccesoSoc.value=""; 

    alert("Sus datos fueron modificados correctamente");
}

function validarAcceso (){
    if (inputCuotaSoc.value==="Cuota al dia") {
        inputAccesoSoc.value="ACCESO PERMITIDO";
        
    } else {
        inputAccesoSoc.value="ACCESO DENEGADO";
    }

};

