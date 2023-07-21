const pasaporte = document.querySelector("#pasaporte");
const password = document.querySelector("#password");
const formularioIniciar = document.querySelector(".formulario-socios");
const camposRequeridos = document.querySelectorAll(".campo__obligatorio");

formularioIniciar.addEventListener("submit", e => {
    e.preventDefault();

    let condicion = true;
    camposRequeridos.forEach(campo => {
        campo.lastElementChild.innerHTML = "";
        campo = pasaporte.style.border = "";
        campo = password.style.border = "";
    })

    if( pasaporte.value === "" ){
        camposObligatorios("pasaporte", "Este campo es requerido", "campo-requerido");
        condicion = false;
    }

    if( password.value === "" ){
        camposObligatorios("password", "Este campo es requerido", "campo-requerido");
        condicion = false;
    }

    return condicion;
})

formularioIniciar.addEventListener("keyup", e => {
    e.preventDefault();

    let condicion = true;
    camposRequeridos.forEach(campo => {
        campo.lastElementChild.innerHTML = "";
        campo = pasaporte.style.border = "";
        campo = password.style.border = "";
    })

    if( pasaporte.value === "" ){
        camposObligatorios("pasaporte", "Este campo es requerido", "campo-requerido");
        condicion = false;
    }

    if( password.value === "" ){
        camposObligatorios("password", "Este campo es requerido", "campo-requerido");
        condicion = false;
    } else if( password.value.length < 8 ){
        camposObligatorios("password", "La contraseña debe tener mínimo 8 caracteres", "campo-requerido");
        condicion = false;
    }

    return condicion;
})

function camposObligatorios(clase, mensaje, elemento){
    let entrada = document.querySelector(`.${clase}`);
    entrada.lastElementChild.innerHTML = mensaje;
    let campoRequerido = document.querySelector(`.${elemento}`);
    campoRequerido = pasaporte.style.border = "1px solid red";
    campoRequerido = password.style.border = "1px solid red";
}