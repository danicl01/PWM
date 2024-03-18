document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("registerButton").addEventListener("click", function(event) {
        event.preventDefault();

        var username = document.getElementById("username").value;
        var email = document.getElementById("user-email").value;
        var password = document.getElementById("user-password").value;
        var confirmPassword = document.getElementById("confirmPassword").value;

        clearErrors();

        var isValid = validateRegisterForm(username, email, password, confirmPassword);
        if (isValid) {
            navigateToConfirmationPage();
        }
    });
});

function validateRegisterForm(username, email, password, confirmPassword) {
    var isValid = true;
    if (username == "") {
        showError("Por favor, complete el campo de Nombre de usuario.", "usernameError");
        isValid = false;
    }

    if (email == "") {
        showError("Por favor, complete el campo de Email.", "emailError");
        isValid = false;
    } else if (!isValidEmail(email)) {
        showError("Por favor, introduzca un correo electrónico válido.", "emailError");
        isValid = false;
    }

    if (password == "") {
        showError("Por favor, complete el campo de Contraseña.", "passwordError");
        isValid = false;
    } else if (!isValidPasswordLength(password)) {
        showError("La contraseña debe tener al menos 8 caracteres.", "passwordError");
        isValid = false;
    }

    if (confirmPassword == "") {
        showError("Por favor, complete el campo de Confirmar contraseña.", "confirmPasswordError");
        isValid = false;
    }

    if (password != confirmPassword) {
        showError("Las contraseñas no coinciden.", "confirmPasswordError");
        isValid = false;
    }

    return isValid;
}

function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPasswordLength(password) {
    var passwordRegex = /^.{8,}$/;
    return passwordRegex.test(password);
}

function showError(message, errorMessageId) {
    var errorElement = document.getElementById(errorMessageId);
    errorElement.innerText = message;
}

function clearErrors() {
    var errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach(function(element) {
        element.innerText = "";
    });
}

function navigateToConfirmationPage() {
    var confirmationPageUrl = "confirmedRegisterPage.html";
    window.location.href = confirmationPageUrl;
}
