const form = document.querySelector("#contactForm");
const errorMessage = document.querySelector("#firstNameError")
const input = document.querySelector("#firstName")

form.addEventListener("submit", showError)

function showError(evt) {
  evt.preventDefault()
  if (input.value.length < 2) {
    errorMessage.style.display = "block"
  }
  else {
    errorMessage.style.display = "none"
  }
}
