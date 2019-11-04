# Numero Aleatorio

Generador de número aleatorio, útil para rifas o juegos al azar, funciona como dado.

`html`
``` [html]
<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="bootstrap.css">
  <title>Generador de número aleatorio</title>
</head>

<body>
  <div class="container-fluid text-center">

    <div id="contenedor" class="text-center display-1  bg-dark text-warning "></div>

    <div class="container-fluid ">
      <div class="container">

        <img src="dado logo.png" class="rounded-circle img-fluid w-25 m-2">

        <h1 class="display-5 ">Generador de Número   Aleatorio  </h1>
        <p class="font-weight-bold">Ingresa el número maximo</p>

        <input id="input" class="text-center border border-dark  " type="number" placeholder="ejemplo: 146" required>


        <hr class="my-2">
        <p>Será generado un número aleatorio partiendo desde el 1 hasta el numero ingresado</p>

        <button id="boton" class="btn btn-primary btn-lg display-1">SORTEAR</button>

      </div>
    </div>

  </div>

  <script src="javascript.js"></script>
</body>

</html>
```

`javascript`
``` [javascript]
//Generador de número aleatorio, útil para rifas o juegos al azar, funciona como dado.
var numeros = document.querySelector("#input");
var boton = document.querySelector("#boton");
var contenedor = document.querySelector("#contenedor");
var carga = document.querySelector("#carga");

boton.addEventListener("click", sortear);
// contenedor.innerHTML = "0";

function sortear(e) {
    e.preventDefault();

    contenedor.innerHTML = ' <div id="carga" class="mb-4 spinner-border text-warning display-1 " role="status"></div> ';


    setTimeout(() => {

        var numeroGanador = Math.ceil(Number(numeros.value) * Math.random());

        contenedor.innerHTML = numeroGanador;

    }, 2000);

}
```