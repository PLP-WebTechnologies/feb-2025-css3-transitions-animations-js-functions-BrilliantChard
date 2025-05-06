document.addEventListener("DOMContentLoaded", function () {
    const changeHeader = document.getElementById("changeHeader");
    let toggled = false; // Track toggle state

    if (changeHeader) {
      changeHeader.addEventListener("click", function () {
        const header = document.getElementById("header");
        const headerWrapper = document.querySelector(".header-wrapper");

        if (header) {
          if (!toggled) {
            header.textContent = "Welcome to JS and CSS Animations!";
            header.style.color = "blue";
            header.style.fontSize = "2em";
            header.style.fontWeight = "bold";
            header.style.textAlign = "center";

            headerWrapper.style.backgroundColor = "#293d5b";
            headerWrapper.style.padding = "20px";
            headerWrapper.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
          } else {
            header.textContent = "JS, The Future!";
            header.style.color = "#c360b7"; // Different color for toggled back
            header.style.fontSize = "2em";
            header.style.fontWeight = "bold";
            header.style.textAlign = "center";

            headerWrapper.style.backgroundColor = "#eef5ff";
            headerWrapper.style.padding = "20px";
            headerWrapper.style.boxShadow = "none";
          }

          toggled = !toggled;
        }
      });
    }
  });