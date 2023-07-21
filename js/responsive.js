document.addEventListener('DOMContentLoaded', function() {
    eventListeners();
    navegacionFija();
})

function eventListeners(){
    const menuResponsive = document.querySelector('.menu-responsive');
    menuResponsive.addEventListener('click', navegacionResponsive);
}

function navegacionResponsive(){
    const navegacion = document.querySelector('.navegacion');
    if( navegacion.classList.contains('mostrar') ){
        navegacion.classList.remove('mostrar');
    } else {
        navegacion.classList.add('mostrar');
    }
}

document.addEventListener('keyup', function(e) {
    if(e.target.matches('#buscador')){
        if(e.key === 'escape') e.target.value = '';
        document.querySelectorAll('.productos').forEach( productoSupermaxi => {
            productoSupermaxi.textContent.toLowerCase().includes(e.target.value.toLowerCase())
                ?productoSupermaxi.classList.remove('filtro')
                :productoSupermaxi.classList.add('filtro');
        })
    }
})

function mostrarLista(){
    alert("Debes iniciar sesión para agregar a una lista de compras");
}

function compartir(){
    alert("SELECCIONA LA RED EN LA QUE DESEAS COMPARTIR ESTE CONTENIDO")
}
