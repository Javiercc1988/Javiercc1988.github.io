var user = document.getElementById("user");
var pass = document.getElementById("password");
var fallo = document.getElementById("error");
var contenido_registro = document.getElementById("contenido_form_id");
var popup = document.getElementById("popup");
var contenido_login = document.getElementById("contenido_form_id");
var contenido_registro = document.getElementById("form_registro");

const blur_container = document.getElementById("blur_container");
const container_login = document.getElementById("container_login");

function acceder() {
  /* Al acceder difuminaremos el fondo, y hacemos aparecer el display */
  blur_container.style.filter = "blur(5px)";
  container_login.style.display = "flex";
  contenido_login.style.display = "flex";
  fallo.style.display = "flex";
  contenido_registro.style.display = "none";
}

function registrarse() {
  contenido_login.style.display = "none";
  fallo.style.display = "none";
  contenido_registro.style.display = "flex";
}

function login() {
  contenido_registro = document.getElementById("contenido_form_id");

  if (user.value != "javier" && pass.value != "1234") {
    fallo.innerHTML = "¡Error!";
    user.style.backgroundColor = "red";
    pass.style.backgroundColor = "red";

    setTimeout(function () {
      /* En caso de error pintamos en rojo los campos e informamos al user con un texto */
      fallo.innerHTML = "Login";
      user.style.backgroundColor = "rgb(218,218,218)";
      pass.style.backgroundColor = "rgb(218,218,218)";
      user.value = "";
      pass.value = "";
    }, 1500);
  } else {
    contenido_registro.style.display = "none";
    error.innerHTML = "<h1> ¡Bienvenido! </h1>";
  }
}

function cerrar() {
  container_login.style.transition = ".5s";
  blur_container.style.filter = "blur(0px)";
  container_login.style.display = "none";
  contenido_registro.style.display = "none";

  contenido_login.style.display = "flex";
  fallo.style.display = "flex";
  contenido_registro.style.display = "none";

  error.innerHTML = "Login";
  user.value = "";
  pass.value = "";
}

function Onmouse(x) {
  x.classList.add("close-onmouse");
}

function Outmouse(x) {
  x.classList.remove("close-onmouse");
}
