//FORM
const input = document.querySelectorAll(".form-input");
const label = document.querySelectorAll(".form-label");
const textarea = document.querySelectorAll(".form-textarea");
const inputName = document.querySelector("#from_name");
const inputEmail = document.querySelector("#email_id");
const inputMessage = document.querySelector("#message");

//SEND BUTTON
const button = document.querySelector("#send-button");
const buttonText = document.querySelector("#button-text");
const buttonIconSend = document.querySelector("#button-icon-send");
const buttonIconCheck = document.querySelector("#button-icon-check");

// Event Listeners
button.addEventListener("click", () => {});

// RegExp
const emailRegex =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

function formIsValid() {
  if (
    inputName.value === "" ||
    !emailRegex.test(inputEmail.value) ||
    inputEmail.value === "" ||
    inputMessage.value === ""
  ) {
    if (inputName.value === "") {
      inputName.style.border = "2px solid #e45858";
      setTimeout(() => {
        inputName.style.border = "2px solid #d1d1e9";
      }, 2500);
    }

    if (emailRegex.test(inputEmail.value) || inputEmail.value === "") {
      inputEmail.style.border = "2px solid #e45858";
      setTimeout(() => {
        inputEmail.style.border = "2px solid #d1d1e9";
      }, 2500);
    }

    if (inputMessage.value === "") {
      inputMessage.style.border = "2px solid #e45858";
      setTimeout(() => {
        inputMessage.style.border = "2px solid #d1d1e9";
      }, 2500);
    }

    return false;
  }

  return true;
}

function formStyles() {
  input.forEach((element, i) => {
    element.addEventListener("input", () => {
      element.value
        ? label[i].classList.add("label-fixed")
        : label[i].classList.remove("label-fixed");
    });
  });

  textarea.forEach((element) => {
    element.addEventListener("input", () => {
      element.value
        ? label[2].classList.add("label-fixed")
        : label[2].classList.remove("label-fixed");
    });
  });
}

function sendButtonStyles() {
  buttonIconSend.classList.toggle("clicked");

  setTimeout(() => {
    buttonText.classList.add("text-disabled");
    button.classList.add("sended");
    buttonIconCheck.classList.add("sended");
  }, 100);

  setTimeout(() => {
    buttonIconSend.classList.remove("clicked");
    buttonIconCheck.classList.remove("sended");
  }, 3000);

  setTimeout(() => {
    buttonText.classList.remove("text-disabled");
    button.classList.remove("sended");
  }, 4000);
}

// Envío de email con datos del formulario.
document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  if (formIsValid()) {
    const serviceID = "default_service";
    const templateID = "template_ju5f1vf";
    sendButtonStyles();

    emailjs.sendForm(serviceID, templateID, this).then(
      () => {
        inputName.value = null;
        inputEmail.value = null;
        inputMessage.value = null;
      },
      (err) => {}
    );
  }
});

// Run
formStyles();
