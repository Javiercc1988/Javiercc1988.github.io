// Scroll Button
const buttonGoTopPage = document.querySelector("#button-top-page");

// SideNav
const sidenav = document.querySelector(".sidenav");
const toggle = document.querySelector(".toggle");
const hamburguerButton = document.querySelector("#checkbox");
const menuButton = document.querySelectorAll(".menu-list-item");

// Cards
const cardImages = document.querySelectorAll(".card__image");
const cardImagesArr = [
  "../assets/img/web1-inmobiliaria.jpg",
  "../assets/img/web2-cafe.jpg",
  "../assets/img/web3-notas.jpg",
  "../assets/img/web5-inmobiliaria.jpg",
  "../assets/img/web4-buses.jpg",
  "../assets/img/web6-beauty-center.jpg",
  "../assets/img/web7-video-player.jpg",
  "../assets/img/web8-music-player.jpg"
];

// Night / Day Mode
const night = document.querySelector(".night-mode");
const body = document.querySelector("body");

// Scroll Button
function scrollTopButton() {
  window.addEventListener("load", () => {
    window.addEventListener("scroll", () => {
      let windowBottom = window.scrollY;
      if (windowBottom <= 100) {
        buttonGoTopPage.style.opacity = 0;
      } else {
        buttonGoTopPage.style.opacity = 1;
      }
    });
  });

  buttonGoTopPage.onclick = () => window.scrollTo({ top: 0 });
}

// SideNav
hamburguerButton.addEventListener("click", () => {
  sidenav.classList.toggle("close");
});

// Night / Day Mode
night.addEventListener("click", () => {
  if (night.classList.contains("fa-moon")) {
    night.classList.replace("fa-moon", "fa-lightbulb");
    night.style.color = "#f7f4f4";
  } else {
    night.classList.replace("fa-lightbulb", "fa-moon");
    night.style.color = "#6246ea";
  }
  body.classList.toggle("dark");
});

menuButton.forEach((button) => {
  button.addEventListener("click", () => {
    sidenav.classList.add("close");

    hamburguerButton.checked === true
      ? (hamburguerButton.checked = false)
      : hamburguerButton.checked;
  });
});

// Cards
cardImages.forEach((card, index) => {
  card.style.backgroundImage = `url(${cardImagesArr[index]})`;
});

// Execution
scrollTopButton();
