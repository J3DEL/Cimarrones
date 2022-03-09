// Función para almacenar los datos del evento

function evento(){
    
    let nombreEv = prompt('Ingrese el nombre del evento');
    let direccionEv = prompt('Ingrese la direccion');
    let horaEv = prompt('Ingrese la hora (formato: hh:mm 24hrs)');
    
    // Repetir hasta que la fecha es correcta
    var d = 0; var m = 0; var a = 0;
    while (a < 2022 || m > 12  && m <= 2  || d > 31) {

        var fechaEv = prompt('Ingrese la fecha (formato: dd/mm/aaaa)');
                    //nombre cadena
         d = Number( fechaEv.substring(0,2)); //Se define como numero, se pone el nombre de la subcadena y los espacios en los que se va a trabajar
         m = Number( fechaEv.substring(3,5));
         a = Number( fechaEv.substring(6,10));
        
        if (a < 2022 || m > 12  || d > 31) {
    
            alert('Usted ha ingresado una fecha incorrecta');

        } 
        else if (a == 2022 && m == 1) {

            alert('Su fecha contiene el mes de Enero de 2022, es una fecha pasada');

        } 
        else if (a == 2022 && m == 2) {
            alert('Su fecha contiene el mes de Febrero de 2022, es una fecha pasada');
        }
         else{

        }
        //Para los meses que tienen 30 - 31 dias 
        switch (m){
    
            // Meses que tienen 31 días
    
            case  3 || 5 || 7 || 9 || 10 || 11 || 12:
                
                if(d>=1 && d<=31){
                    //si es verdadero no hacer nada
             }else{
                    //si es falso mandar alerta de error
                alert('El mes que eligió no puede tener mas de 31 días');
                }
            break;
    
                // Meses que tienen 30 días
    
            case 4 || 6 || 8 || 11:
        
                if(d>=1 && d<=30){
    
                }else{
            
                    alert('El mes que eligió no puede tener mas de 30 días');
                }
                break;
        
                default:     
        }
    }

    alert('¡Tu evento ha sido agregado con éxito!');

    document.getElementById('nombreEvento').innerHTML='' + nombreEv;
    document.getElementById('fechaEvento').innerHTML='' + fechaEv;
    document.getElementById('direccionEvento').innerHTML='' + direccionEv;
    document.getElementById('horaEvento').innerHTML=''+ horaEv;
    
}

let ejecutarEvento = document.getElementById('botonjs');
ejecutarEvento.addEventListener('click', evento);

// Función para mostrar el evento que se ingresó
function mostrarEvento() {

    document.getElementById('contenedor-evento').style.display = 'block';
}

let ejecutarEvento2 = document.getElementById('botonjs');
ejecutarEvento2.addEventListener('click', mostrarEvento);