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

const carruselHistorico =
document.querySelector(".carrusel-contenedor-historico");

const imagenesHistoricas =
document.querySelectorAll(".carrusel-contenedor-historico img");

let indiceHistorico = 0;

function mostrarHistorica(){

    imagenesHistoricas[indiceHistorico].scrollIntoView({
        behavior:"smooth",
        inline:"center",
        block:"nearest"
    });

}

document
.querySelector(".next-historico")
.addEventListener("click", () => {

    indiceHistorico++;

    if(indiceHistorico >= imagenesHistoricas.length){
        indiceHistorico = 0;
    }

    mostrarHistorica();

});

document
.querySelector(".prev-historico")
.addEventListener("click", () => {

    indiceHistorico--;

    if(indiceHistorico < 0){
        indiceHistorico = imagenesHistoricas.length - 1;
    }

    mostrarHistorica();

});