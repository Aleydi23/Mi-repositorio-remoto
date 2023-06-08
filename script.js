function showAlert() {
  alert("¡Hola, esta es una alerta de JS!");
}

const form = document.getElementById("myForm");

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/;
  return regex.test(email);
}

function validateForm(event) {
  event.preventDefault();

  const input = document.getElementById('email');
  const emailInputValue = input.value;

  if (!validateEmail(emailInputValue)) {
    alert('Por favor ingrese un correo electrónico válido.');
  } else {
    alert('Correo electrónico enviado correctamente.');
  }
}

form.addEventListener("submit", validateForm);

document.querySelector("button.buton-menu-toggle")
  .addEventListener("click", function () {
    document.querySelector(".nav-links").classList.toggle("nav-links-responsive");
  });
