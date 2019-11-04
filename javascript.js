var numeros = document.querySelector("#input");
var boton = document.querySelector("#boton");
var contenedor = document.querySelector("#contenedor");
var carga = document.querySelector("#carga");

boton.addEventListener("click", sortear);

function sortear(e) {
    e.preventDefault();

    contenedor.innerHTML = ' <div id="carga" class="mb-4 spinner-border text-warning display-1 " role="status"></div> ';


    setTimeout(() => {

        var numeroGanador = Math.ceil(Number(numeros.value) * Math.random());

        contenedor.innerHTML = numeroGanador;

    }, 2000);

}