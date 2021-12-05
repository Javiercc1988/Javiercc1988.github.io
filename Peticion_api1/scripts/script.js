const apikey = "https://jsonplaceholder.typicode.com/posts";

// CAPTURAR ELEMENTOS DEL DOM
const principal = document.querySelector("main");
const textSearch = document.querySelector("#titulo");


// FUNCION BOTON BUSCAR
const buscar = () => {
  // Esta funcion vacía el html para que no se acumulen los articulos.
  principal.innerHTML = "";
  miPeticion();
};


// FUNCION BOTON RESETEAR
const resetear = () => {
  // Esta funcion simplemente vacía el imput de buscar y el html para realizar la peticion principal desde 0 y solo muestre los 10 articulos originales.
  textSearch.value = "";
  principal.innerHTML = "";
  miPeticion();
};


// FUNCION PARA REALIZAR LA PETICIÓN
const miPeticion = async () => {
  const response = await axios.get(apikey); 
  // Realizamos la petición a la api que nos devuelve un objeto con todos los datos de la api

  let data = response.data.splice(0, 10); 
  // Creamos una variable y cargamos el apartado 'data' del response dado por la api y aprovechamos para cortarlo ya que el ejercicio solo requiere 10
  let filterData = data.filter(
    (data) =>
      data.title.includes(textSearch.value) ||
      data.body.includes(textSearch.value)
  );
  // Filtramos la busqueda del usuario con .filter que es un metodo de arrays que usamos para recorrer data, al cual se le pasa una funcion flecha y las condiciones a buscar

  filterData.forEach((element) => {
    principal.innerHTML += `
            <div class="articulos">
            <h1 class="titulo">${element.title}</h1>
            <p class="texto">${element.body}<p>
            </div>`;
  });
  // Recorremos la lista almacenada en 'filterData' y vamos creando en cada vuelta del bucle un elemento div con sus h1 y p correspondientes dentro del main del html.

  textSearch.value = "";
  // Por ultimo vacío el valor del input para que el usuario siempre tenga ese campo vacío a la hora de escribir y no tenga que borrar el anterior.
};


// INICIO DEL PROGRAMA
miPeticion();
// Ejecuto la funcion de peticion para así cuando cargue la pagina de entrada ya me aparezcan 10 articulos
