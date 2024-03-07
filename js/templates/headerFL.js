document.addEventListener("DOMContentLoaded", function() {
    fetch('../../html/templates/headerFL.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-container').innerHTML = data;
        });
});
