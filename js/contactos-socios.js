const nombre = document.querySelector("#nombre");
const apellido = document.querySelector("#apellido");
const cedula = document.querySelector("#cedula");
const telefono = document.querySelector("#telefono");
const correo = document.querySelector("#correo");
const ciudad = document.querySelector("#ciudad");
const cursos = document.querySelector("#cursos");
const formularioCursos = document.querySelector(".formulario-vinos");
const error = document.querySelector(".errorFormulario");
error.style.color = "red";

formularioCursos.addEventListener("submit", e => {
    e.preventDefault();

    let errorMensajes = [];

    if( nombre.value == null || nombre.value === "" ){
        errorMensajes.push("Ingrese su nombre");
    }

    if( apellido.value == null || apellido.value === "" ){
        errorMensajes.push("Ingrese su apellido");
    }
    
    if( cedula.value == null || cedula.value === "" ){
        errorMensajes.push("Ingrese su cédula");
    }

    if( telefono.value == null || telefono.value === "" ){
        errorMensajes.push("Ingrese su número de teléfono");
    }

    if( correo.value == null || correo.value === "" ){
        errorMensajes.push("Ingrese su correo");
    }

    if( ciudad.value == null || ciudad.value === "" ){
        errorMensajes.push("Ingrese su ciudad");
    }

    if( cursos.selectedIndex === 0 || cursos.selectedIndex == null ){
        errorMensajes.push("Ingrese un curso");
    }

    error.innerHTML = errorMensajes.join("<br>");
})