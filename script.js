console.log("Muchachas de Abril");

function toggleInfo(id){

    const info = document.getElementById(id);

    if(info.style.display === "block"){
        info.style.display = "none";
    }else{
        info.style.display = "block";
    }

}

const carrusel = document.querySelector(".carrusel-contenedor");
const imagenes = document.querySelectorAll(".carrusel-contenedor img");

let indice = 0;

function mostrarImagen(){

    imagenes[indice].scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest"
    });

}

document.querySelector(".next").addEventListener("click", () => {

    indice++;

    if(indice >= imagenes.length){
        indice = 0;
    }

    mostrarImagen();

});

document.querySelector(".prev").addEventListener("click", () => {

    indice--;

    if(indice < 0){
        indice = imagenes.length - 1;
    }

    mostrarImagen();

});