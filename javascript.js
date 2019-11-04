var numeroIngresado = document.querySelector("#input");
var botonSortear = document.querySelector("#boton");
var contenedor = document.querySelector("#contenedor");

botonSortear.addEventListener("click", sortear);

function sortear(e) {
    e.preventDefault();

    //Muestra animacion del circulo cargando, las clases para la animacion de css son agregadas con bootstrap.css
    contenedor.innerHTML = '<div id="carga" class="mb-4 spinner-border text-warning display-1 " role="status"></div>';

    //Esta funtion crea un intervalo de tiempo, luego pasado 2 segundos ejecuta una accion
    setTimeout(() => {

        //Math.ceil() redondea un numero hacia arriba y Math.random() genera un numero aleatorio desde el 0 hasta el 1 ej: 0.54
        var numeroGanador = Math.ceil(Number(numeroIngresado.value) * Math.random());

        //Reemplaza el contenido (actualmente la animacion) por el numero generado aleatoriamente
        contenedor.innerHTML = numeroGanador;

    }, 2000);

}