const apikey = "https://jsonplaceholder.typicode.com/posts";

// CAPTURAR ELEMENTOS DEL DOM
const principal = document.querySelector("main");
const textSearch = document.querySelector("#titulo");


// FUNCION BOTON BUSCAR
const buscar = () => {
  principal.innerHTML = "";
  miPeticion();
};


// FUNCION BOTON RESETEAR
const resetear = () => {
  textSearch.value = "";
  principal.innerHTML = "";
  miPeticion();
};


// FUNCION PARA REALIZAR LA PETICIÓN
const miPeticion = async () => {
  const response = await axios.get(apikey); 

  let data = response.data; 
  let filterData = data.filter(
    (data) =>
      data.title.includes(textSearch.value) ||
      data.body.includes(textSearch.value)
  );

  filterData.forEach((element,i) => {
    principal.innerHTML += `
            <div class="articulos">
            <p>${i}
            <h1 class="titulo">${element.title}</h1>
            <p class="texto">${element.body}<p>
            </div>`;
  });

  textSearch.value = "";
};


// INICIO DEL PROGRAMA
miPeticion();