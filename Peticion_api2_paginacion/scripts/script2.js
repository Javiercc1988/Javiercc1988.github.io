const apikey = "https://jsonplaceholder.typicode.com/posts";

const principal = document.querySelector("main");
let indice = 0;

const miPeticion = async (accion) => {
  principal.innerHTML = "";
  const response = await axios.get(apikey);
  if (accion === true && indice < 98) {
    indice += 2;
  } else if (accion === false && indice > 0) {
    indice -= 2;
  }

  let data = response.data.slice(indice, indice + 2);
  data.forEach((element) => {
    principal.innerHTML += `
            <div class="articulos">
            <p>${element.id}</p>
            <h1 class="titulo">${element.title}</h1>
            <p class="texto">${element.body}<p>
            </div>`;
  });
};

// INICIO DEL PROGRAMA
miPeticion(null);
