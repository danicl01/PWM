document.addEventListener("DOMContentLoaded", function() {
    const username = document.getElementById("username");
    const email = document.getElementById("user-email");
    const password = document.getElementById("user-password");
    const confirmPassword = document.getElementById("confirmPassword");
    const registrationForm = document.getElementById("registrationForm");

    function validateInput(input, regex, errorMessageId, errorMessage) {
        const inputValue = input.value.trim();

        if (inputValue == "") {
            showError("Por favor, rellena este campo", errorMessageId, input);
            input.classList.add("input-error");
        } else if (!regex.test(inputValue)) {
            showError(errorMessage, errorMessageId);
            input.classList.add("input-error");
        } else {
            showError("", errorMessageId);
            input.classList.remove("input-error");
        }
    }

    function validatePasswordMatch(password, confirmPassword, errorMessageId, errorMessage) {
        const passwordValue = password.value.trim();
        const confirmPasswordValue = confirmPassword.value.trim();

        if (passwordValue != confirmPasswordValue) {
            showError(errorMessage, errorMessageId);
            confirmPassword.classList.add("input-error");
        } else {
            showError("", errorMessageId);
            confirmPassword.classList.remove("input-error");
        }
    }

    function showError(message, errorMessageId) {
        const errorElement = document.getElementById(errorMessageId);
        errorElement.innerText = message;
    }

    function validateForm(event) {
        event.preventDefault();
        validateInput(username, /^.{4,}$/, "usernameError", "El nombre de usuario es demasiado corto");
        validateInput(email, /^[^\s@]+@[^\s@]+\.[^\s@]+$/, "emailError", "Por favor, introduzca un correo electrónico válido");
        validateInput(password, /^.{8,}$/, "passwordError", "La contraseña debe tener al menos 8 caracteres");
        validateInput(confirmPassword, /^.{8,}$/, "confirmPasswordError", "La contraseña no cumple con los requisitos");
        validatePasswordMatch(password, confirmPassword, "confirmPasswordError", "Las contraseñas no coinciden");

        const usernameValue = username.value.trim();
        const emailValue = email.value.trim();
        const passwordValue = password.value.trim();
        const confirmPasswordValue = confirmPassword.value.trim();

        if (usernameValue != "" && emailValue != "" && passwordValue != "" && confirmPasswordValue != "" && passwordValue === confirmPasswordValue) {
            window.location.href = "confirmedRegisterPage.html";
        }
    }

    username.addEventListener("blur", () => validateInput(username, /^.{4,}$/, "usernameError", "El nombre de usuario es demasiado corto"));
    email.addEventListener("blur", () => validateInput(email, /^[^\s@]+@[^\s@]+\.[^\s@]+$/, "emailError", "Por favor, introduzca un correo electrónico válido"));
    password.addEventListener("blur", () => validateInput(password, /^.{8,}$/, "passwordError", "La contraseña debe tener al menos 8 caracteres"));
    confirmPassword.addEventListener("blur", () => {
        validateInput(confirmPassword, /^.{8,}$/, "confirmPasswordError", "La contraseña no cumple con los requisitos");
        validatePasswordMatch(password, confirmPassword, "confirmPasswordError", "Las contraseñas no coinciden");
    });
    registrationForm.addEventListener("submit", validateForm);
});
