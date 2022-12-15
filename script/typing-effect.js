const typingContainer = document.querySelector("#typingContainer");
const typingContainer2 = document.querySelector("#idd");
const homeSection = document.querySelector("#home");

const phrases = ["JavaScript", "Angular", "Node.JS", "Python", "Bootstrap", "SASS"];

var x = 0;
var txt = "Te doy la bienvenida a mi sitio web, soy desarrollador con tecnologías como";
var ee = 50;

function typeWriter() {
  
  if (x < txt.length) {
    typingContainer2.innerHTML += txt.charAt(x);
    x++;
    setTimeout(typeWriter, ee);
  } else {
    setTimeout(() => {
      typingContainer.style.textAlign = "center"
      phrases.forEach((value, index) =>
      setTimeout(() => typingContainer.innerHTML += `${value}<br>`, index * 1000)
      )
      
    }, 1000);
    }
}



typeWriter();
