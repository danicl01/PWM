// mainLoader.js

document.addEventListener("DOMContentLoaded", function () {
    fetch("../../data/home_data.json")
      .then(response => response.json())
      .then(data => {
        const main = document.querySelector("main");

        // Crear el elemento cover
        const coverElement = document.createElement("div");
        coverElement.classList.add("cover");
  
        // Agregar la zona main-zone-1
        const mainZone1 = data.mainZone1;
        const mainZone1Element = document.createElement("div");
        mainZone1Element.classList.add("main-zone-1");
  
        const articleLink1 = document.createElement("a");
        articleLink1.href = mainZone1.link;
  
        const articleImage1 = document.createElement("img");
        articleImage1.src = mainZone1.image;
        articleImage1.alt = mainZone1.title;
  
        const articleTitle1 = document.createElement("h2");
        articleTitle1.textContent = mainZone1.title;
  
        const articleDescription1 = document.createElement("p");
        articleDescription1.textContent = mainZone1.description;
  
        articleLink1.appendChild(articleImage1);
        articleLink1.appendChild(articleTitle1);
        articleLink1.appendChild(articleDescription1);
  
        mainZone1Element.appendChild(articleLink1);
        coverElement.appendChild(mainZone1Element);

        // Crear el contenedor square-group
        const squareGroupElement = document.createElement("div");
        squareGroupElement.classList.add("square-group");
  
        // Agregar los demás artículos al contenedor square-group
        data.articles.forEach(article => {
          // Crear enlace para cada artículo
          const articleLink2 = document.createElement("a");
          articleLink2.href = "secondaryNewsPage.html"; // Establecer el link aquí

          const articleElement = document.createElement("div");
          articleElement.classList.add("square");

          const mainZone2 = document.createElement("div");
          mainZone2.classList.add("main-zone-2");
  
          const articleTitle2 = document.createElement("h2");
          articleTitle2.textContent = article.title;
  
          const articleDescription2 = document.createElement("p");
          articleDescription2.textContent = article.description;
  
          mainZone2.appendChild(articleTitle2);
          mainZone2.appendChild(articleDescription2);

          const mainZone3 = document.createElement("div");
          mainZone3.classList.add("main-zone-3");
  
          const articleImage = document.createElement("img");
          articleImage.src = article.image;
          articleImage.alt = article.title;
  
          const articleImageContainer = document.createElement("article");
          articleImageContainer.appendChild(articleImage);
          
          mainZone3.appendChild(articleImageContainer);
  
          articleElement.appendChild(mainZone2);
          articleElement.appendChild(mainZone3);

          articleLink2.appendChild(articleElement);
  
          squareGroupElement.appendChild(articleLink2);
        });

        // Agregar el contenedor square-group al cover
        coverElement.appendChild(squareGroupElement);
  
        // Agregar el cover al main
        main.appendChild(coverElement);
      })
      .catch(error => console.error("Error loading main content:", error));
  });
