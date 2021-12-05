const apiKey = "https://jsonplaceholder.typicode.com/photos";

const principal = document.querySelector("#contenedor-principal");
let contador = 0;
const miPeticion = async () => {
  contador += 1;
  const response = await axios.get(apiKey);
  const data = response.data.slice(contador, contador+1);
  data.forEach(element => {
    principal.innerHTML += `
    <div class="container">
        <img src="${element.thumbnailUrl}"></img>
        <h1>${element.title}</h1>
    </div>`
  });

};

const getImage = () => miPeticion()
