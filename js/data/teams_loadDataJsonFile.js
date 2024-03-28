document.addEventListener("DOMContentLoaded", function() {
    fetch("../../data/teams_data.json")
        .then(response => response.json())
        .then(data => {
            const mainElement = document.querySelector("main");

            data.forEach(equipo => {
                const containerDiv = document.createElement("div");
                containerDiv.classList.add("container");

                const imagenDiv = document.createElement("div");
                imagenDiv.classList.add("imagen");
                const imagen = document.createElement("img");
                imagen.src = equipo.imagen;
                imagen.width = 240;
                imagen.height = 160;
                imagen.alt = equipo.nombre;
                imagenDiv.appendChild(imagen);

                const parrafoDiv = document.createElement("div");
                parrafoDiv.classList.add("parrafo");
                const h2 = document.createElement("h2");
                h2.textContent = equipo.nombre;
                const p = document.createElement("p");
                p.textContent = equipo.descripcion;
                parrafoDiv.appendChild(h2);
                parrafoDiv.appendChild(p);

                containerDiv.appendChild(imagenDiv);
                containerDiv.appendChild(parrafoDiv);

                mainElement.appendChild(containerDiv);
            });
        })
        .catch(error => console.error("Error al cargar el archivo JSON:", error));
});
