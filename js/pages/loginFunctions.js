document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("loginButton").addEventListener("click", function(event) {
        event.preventDefault();

        var email = document.getElementById("user-email").value;
        var password = document.getElementById("user-password").value;

        clearErrors();

        var isValid = validateLoginForm(email, password);
        if (isValid) {
            navigateToHomePage();
        }
    });
});

function validateLoginForm(email, password) {
    var isValid = true;

    if (email == "") {
        showError("Por favor, complete el campo de Email.", "emailError");
        isValid = false;
    }

    if (password == "") {
        showError("Por favor, complete el campo de Contraseña.", "passwordError");
        isValid = false;
    }

    return isValid;
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

function navigateToHomePage() {
    var homePageUrl = "homePage.html";
    window.location.href = homePageUrl;
}
