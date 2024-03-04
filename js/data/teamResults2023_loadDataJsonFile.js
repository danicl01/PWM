document.addEventListener("DOMContentLoaded", function() {
    const jsonFile = "../../data/teams_result2023.json";

    fetch(jsonFile)
        .then(response => response.json())
        .then(data => {
            function buildTable(data) {
                const tableBody = document.querySelector("table tbody");

                tableBody.innerHTML = "";

                data.forEach((entry, index) => {
                    const row = document.createElement("tr");

                    if (index === 0) {
                        row.classList.add("first-row");
                    }

                    row.className += index % 2 === 0 ? " even" : " odd";

                    row.innerHTML = `
            <td>${entry.Position || ""}</td>
            <td>${entry.Name}</td>
            <td>${entry.Points || ""}</td>
            <td>${entry.Wins || ""}</td>
            <td>${entry.Podiums || ""}</td>
            <td>${entry.Scores || ""}</td>
            <td>${entry.Nationality}</td>
            <td>${entry.Drivers.join(", ")}</td>
          `;
                    tableBody.appendChild(row);
                });
            }

            buildTable(data);
        })
        .catch(error => console.error("Error fetching data:", error));
});
