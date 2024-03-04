document.addEventListener("DOMContentLoaded", function() {
    const circuits = [
        "bahrain", "catalunya", "hungaroring", "imola", "monaco", "monza",
        "mugello", "portimao", "red-bull-ring", "silverstone", "sochi", 
        "spa-francorchamps"
    ];

    const squareGroup = document.getElementById("square-group");

    circuits.forEach(circuit => {
        const square = document.createElement("div");
        square.className = "square";

        const squareContent = document.createElement("div");
        squareContent.className = "square-content";

        const article1 = document.createElement("article");
        const img = document.createElement("img");
        img.src = `../../assets/images/circuits/${circuit}-circuit.png`;
        img.alt = circuit;
        article1.appendChild(img);

        const backContent = document.createElement("div");
        backContent.className = "back-content";

        const mainZone1 = document.createElement("div");
        mainZone1.className = "main-zone-1";

        const article2 = document.createElement("article");
        for (let i=0; i<5; i++) {
            const p = document.createElement("p");
            p.textContent = "Fecha";
            mainZone1.appendChild(p);
        }

        const mainZone2 = document.createElement("div");
        mainZone2.className = "main-zone-2";

        const article3 = document.createElement("article");
        const schedules = ["Carrera: Horario", "Clasificación: Horario", "FP3", "FP2", "FP1"];
        schedules.forEach(schedule => {
            const p = document.createElement("p");
            p.textContent = schedule;
            mainZone2.appendChild(p);
        });

        backContent.appendChild(mainZone1);
        backContent.appendChild(mainZone2);

        squareContent.appendChild(article1);
        squareContent.appendChild(backContent);

        square.appendChild(squareContent);

        squareGroup.appendChild(square);
    });
});