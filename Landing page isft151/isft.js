/*
document.addEventListener("DOMContentLoaded", function () {
    const botonMenu = document.getElementById("boton-menu");
    const botonCerrar = document.getElementById("boton-cerrar");
    const barraDeNavegacion = document.getElementById("barraDeNavegacion");

    botonMenu.addEventListener("click", function () {
        barraDeNavegacion.style.display = "block";
        botonMenu.style.display = "none";
    });

    botonCerrar.addEventListener("click", function () {
        barraDeNavegacion.style.display = "none";
        botonMenu.style.display = "block";
    });
});*/
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})