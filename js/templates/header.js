document.addEventListener("DOMContentLoaded", function() {
    fetch('../../html/templates/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-container').innerHTML = data;
        });
});

