
function evento(){
    
    let nombreEv = prompt('Ingrese el nombre del evento');
    let fechaEv = prompt('Ingrese la fecha (formato: dd/mm/aaaa)');
    let direccionEv = prompt('Ingrese la direccion');
    let horaEv = prompt('Ingrese la hora (formato: hh:mm 24hrs)');
    
    document.getElementById('nombreEvento').innerHTML=''+ nombreEv;
    document.getElementById('fechaEvento').innerHTML=''+ fechaEv;
    document.getElementById('direccionEvento').innerHTML=''+ direccionEv;
    document.getElementById('horaEvento').innerHTML=''+ horaEv;

    alert('¡Tu evento ha sido agregado con éxito!')
}

function mostrarEvento() {

    document.getElementById('contenedor-evento').style.display = 'block';
}

let ejecutarEvento = document.getElementById('botonjs');
ejecutarEvento.addEventListener('click', evento);

let ejecutarEvento2 = document.getElementById('botonjs');
ejecutarEvento2.addEventListener('click', mostrarEvento);