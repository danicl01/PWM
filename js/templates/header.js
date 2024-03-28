document.addEventListener("DOMContentLoaded", function() {

    fetch('../../html/templates/header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header-container').innerHTML = data;
        switchButtonsVisibility();
    });

    function switchButtonsVisibility() {
        const signupBtn = document.querySelector(".header_button-signUp");
        const loginBtn = document.querySelector(".header_button-login");
        const logoutBtn = document.querySelector(".header_button-logout");
        const profileBtn = document.querySelector(".header_button-profile");
        const loggedIn = localStorage.getItem("loggedIn");

        if (loggedIn) {
            signupBtn.classList.add("hidden");
            loginBtn.classList.add("hidden");
            logoutBtn.classList.remove("hidden");
            profileBtn.classList.remove("hidden");
        } else {
            signupBtn.classList.remove("hidden");
            loginBtn.classList.remove("hidden");
            logoutBtn.classList.add("hidden");
            profileBtn.classList.add("hidden");
        }
    }

    document.body.addEventListener("click", function(event) {
        if (event.target.matches("#logoutButton")) {
            localStorage.removeItem("loggedIn");
            switchButtonsVisibility();
            window.location.href = "homePage.html";
        }
    });

    switchButtonsVisibility();

});
