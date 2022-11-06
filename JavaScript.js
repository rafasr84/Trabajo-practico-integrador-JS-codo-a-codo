//valor del ticket
const valorTicket = 200;

//porcentajes
const descuentoEstudiante = 0.80;
const descuentoTrainee = 0.50;
const descuentoJunior = 0.15;

//valores del input
const cantidad = document.getElementById('cantidad');
const categoria = document.getElementById('categoriaSelect');
const botonCalcular = document.getElementById('Calcular');
const botonReset = document.getElementById('reset');
const parrafo= document.getElementById('Total a pagar');

//funcion total a pagar

function totalPagar (){
    let totalValor = (cantidad.value) * valorTicket;

    if (categoria.value ==1){
        totalValor = totalValor - (totalValor*descuentoEstudiante);
    }else if (categoria.value ==2){
        totalValor = totalValor - (totalValor*descuentoTrainee);
    }else if (categoria.value ==3){
        totalValor = totalValor - (totalValor*descuentoJunior);
    }else if (categoria.value ==''){
        alert("seleccione una categoría");
    }


    parrafo.innerHTML = totalValor;
}

//botón calcular
botonCalcular.addEventListener('click',totalPagar);
//botón reste
botonReset.addEventListener('click',()=>{
    parrafo.textContent='';
});