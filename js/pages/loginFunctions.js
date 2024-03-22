document.addEventListener("DOMContentLoaded", function() {
    const email = document.getElementById("user-email");
    const password = document.getElementById("user-password");
    const loginForm = document.getElementById("loginForm");

    function validateInput(input, regex, errorMessageId, errorMessage) {
        const inputValue = input.value.trim();

        if (inputValue == "") {
            showError("Por favor, rellena este campo", errorMessageId, input);
        } else if (!regex.test(inputValue)) {
            showError(errorMessage, errorMessageId, input);
        } else {
            showError("", errorMessageId, input);
        }
    }

    function showError(message, errorMessageId, input) {
        const errorElement = document.getElementById(errorMessageId);
        errorElement.innerText = message;

        if (message != "") {
            input.classList.add("input-error");
        } else {
            input.classList.remove("input-error");
        }
    }

    function navigateToHomePage() {
        const emailValue = email.value.trim();
        const passwordValue = password.value.trim();

        if (emailValue != "" && passwordValue != "") {
            window.location.href = "homePage.html";
        }
    }

    function validateForm(event) {
        event.preventDefault();
        validateInput(email, /^[^\s@]+@[^\s@]+\.[^\s@]+$/, "emailError", "Por favor, introduzca un correo electrónico válido");
        validateInput(password, /^.{8,}$/, "passwordError", "Por favor, ingrese la contraseña válida");
        navigateToHomePage();
    }

    email.addEventListener("blur", () => validateInput(email, /^[^\s@]+@[^\s@]+\.[^\s@]+$/, "emailError", "Por favor, introduzca un correo electrónico válido"));
    password.addEventListener("blur", () => validateInput(password, /^.{8,}$/, "passwordError", "Por favor, ingrese la contraseña válida"));
    loginForm.addEventListener("submit", validateForm);
});
