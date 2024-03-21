document.addEventListener("DOMContentLoaded", function() {
    var username = document.getElementById("username");
    var email = document.getElementById("user-email");
    var password = document.getElementById("user-password");
    var confirmPassword = document.getElementById("confirmPassword");
    var registrationForm = document.getElementById("registrationForm");

    function validateUsername() {
        var usernameValue = username.value.trim();

        if (usernameValue == "") {
            showError("Por favor, rellena este campo", "usernameError");
            username.setCustomValidity("");
            username.classList.add("input-error");
        } else if (usernameValue.length < 4) {
            showError("El nombre de usuario es demasiado corto", "usernameError");
            username.setCustomValidity("El nombre de usuario es demasiado corto");
            username.classList.add("input-error");
        } else {
            showError("", "usernameError");
            username.setCustomValidity("");
            username.classList.remove("input-error");
        }
    }

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
            showError("La contraseña debe tener al menos 8 caracteres", "passwordError");
            password.setCustomValidity("La contraseña debe tener al menos 8 caracteres");
            password.classList.add("input-error");
        } else {
            showError("", "passwordError");
            password.setCustomValidity("");
            password.classList.remove("input-error");
        }
    }

    function validateConfirmPassword() {
        var passwordValue = password.value.trim();
        var confirmPasswordValue = confirmPassword.value.trim();
        var passwordRegex =  /^.{8,}$/;

        if (confirmPasswordValue == "") {
            showError("Por favor, rellena este campo", "confirmPasswordError");
            confirmPassword.setCustomValidity("");
            confirmPassword.classList.add("input-error");
        } else if (passwordValue != confirmPasswordValue) {
            showError("Las contraseñas no coinciden", "confirmPasswordError");
            confirmPassword.setCustomValidity("Las contraseñas no coinciden");
            confirmPassword.classList.add("input-error");
        } else if (!passwordRegex.test(confirmPasswordValue)) {
            showError("La contraseña no cumple con los requisitos", "confirmPasswordError");
            confirmPassword.setCustomValidity("La contraseña no cumple con los requisitos");
            confirmPassword.classList.add("input-error");
        } else {
            showError("", "confirmPasswordError");
            confirmPassword.setCustomValidity("");
            confirmPassword.classList.remove("input-error");
        }
    }

    function navigateToConfirmRegistration() {
        var usernameValue = username.value.trim();
        var emailValue = email.value.trim();
        var passwordValue = password.value.trim();
        var confirmPasswordValue = confirmPassword.value.trim();

        if (usernameValue !== "" && emailValue !== "" && passwordValue !== "" && confirmPasswordValue !== "") {
            window.location.href = "confirmedRegisterPage.html";
        }
    }

    function showError(message, errorMessageId) {
        var errorElement = document.getElementById(errorMessageId);
        errorElement.innerText = message;
    }

    function validateForm(event) {
        event.preventDefault();
        validateUsername();
        validateEmail();
        validatePassword();
        validateConfirmPassword();
        navigateToConfirmRegistration();
    }

    username.addEventListener("blur", validateUsername);
    email.addEventListener("blur", validateEmail);
    password.addEventListener("blur", validatePassword);
    confirmPassword.addEventListener("blur", validateConfirmPassword);
    registrationForm.addEventListener("submit", validateForm);

});
