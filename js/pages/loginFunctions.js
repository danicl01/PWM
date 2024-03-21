document.addEventListener("DOMContentLoaded", function() {
    var email = document.getElementById("user-email");
    var password = document.getElementById("user-password");
    var loginForm = document.getElementById("loginForm");

    function validateEmail() {
        var emailValue = email.value.trim();
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailValue == "") {
            showError("Por favor, rellena este campo", "emailError");
            email.setCustomValidity("");
            email.classList.add("input-error");
        } else if (!emailRegex.test(emailValue)) {
            showError("Por favor, introduzca un correo electrónico válido", "emailError");
            email.setCustomValidity("Por favor, introduzca un correo electrónico válido");
            email.classList.add("input-error");
        } else {
            showError("", "emailError");
            email.setCustomValidity("");
            email.classList.remove("input-error");
        }
    }

    function validatePassword() {
        var passwordValue = password.value.trim();
        var passwordRegex =  /^.{8,}$/;

        if (passwordValue == "") {
            showError("Por favor, rellena este campo", "passwordError");
            password.setCustomValidity("");
            password.classList.add("input-error");
        } else if (!passwordRegex.test(passwordValue)) {
            showError("Por favor, ingresa la contraseña válida", "passwordError");
            password.setCustomValidity("Por favor, ingresa la contraseña válida");
            password.classList.add("input-error");
        } else {
            showError("", "passwordError");
            password.setCustomValidity("");
            password.classList.remove("input-error");
        }
    }

    function navigateToHomePage() {
        var emailValue = email.value.trim();
        var passwordValue = password.value.trim();

        if (emailValue != "" && passwordValue != "") {
            window.location.href = "homePage.html";
        }
    }

    function showError(message, errorMessageId) {
        var errorElement = document.getElementById(errorMessageId);
        errorElement.innerText = message;
    }

    function validateForm(event) {
        event.preventDefault();
        validateEmail();
        validatePassword();
        navigateToHomePage();
    }

    email.addEventListener("blur", validateEmail);
    password.addEventListener("blur", validatePassword);
    loginForm.addEventListener("submit", validateForm);
});
