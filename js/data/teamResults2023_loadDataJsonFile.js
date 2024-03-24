document.addEventListener("DOMContentLoaded", function() {
    const jsonFile = "../../data/teams_result2023.json";

    fetch(jsonFile)
        .then(response => response.json())
        .then(data => {
            function buildTable(data) {
                const tableBody = document.querySelector("table tbody");
                const screenWidth = window.innerWidth;

                tableBody.innerHTML = "";

                data.forEach((entry, index) => {
                    const row = document.createElement("tr");

                    if (index === 0) {
                        row.classList.add("first-row");
                    }

                    row.className += index % 2 === 0 ? " even" : " odd";

                    let rowContent = `
                        <td>${entry.Position}</td>
                        <td>${entry.Name}</td>
                        <td>${entry.Points}</td>
                    `;

                    // Agregar columnas de Wins y Nationality solo si el ancho de la pantalla es mayor que 980px
                    if (screenWidth > 980) {
                        rowContent += `
                            <td class="extra-column">${entry.Wins || ""}</td>
                            <td class="extra-column">${entry.Podiums || ""}</td>
                            <td class="extra-column">${entry.Scores || ""}</td>
                            <td>${entry.Drivers.join(", ")}</td>
                        `;
                    }

                    row.innerHTML = rowContent;
                    tableBody.appendChild(row);
                });
            }


            buildTable(data);
        })
        .catch(error => console.error("Error fetching data:", error));
});
