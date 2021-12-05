const API =
  "https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyDzriiA1wOCg2iuczodo1FaAw2CRys4CMM";

const botonBuscar = document.querySelector(".cambiar");
let script_letra = document.querySelector("#script")
let parrafo = document.querySelector(".parrafo")

botonBuscar.addEventListener("click", () => {
  let input = document.querySelector(".input_buscar");
  fetch(API).then((response) =>
    response.json().then((response2) => {
      let font = response2.items;
      let font_filtered = font.find((element) => element.family === input.value);
      parrafo.textContent = `La fuente que estamos probando es: '${font_filtered.category}', ${font_filtered.family}`
      script_letra.src = font_filtered.files.regular
      parrafo.style.fontFamily = `'${font_filtered.category}', ${font_filtered.family}`
    })
  );
});
