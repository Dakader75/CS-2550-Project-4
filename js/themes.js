function loadStylesheet() {
    const savedStyle = localStorage.getItem("main-stylesheet");

    // Use saved stylesheet if it exists, otherwise default to style1.css
    const link = document.getElementById("main-stylesheet");
    link.setAttribute("href", savedStyle ? savedStyle : "css\\main.css");
}

function switchStyles() {
    const link = document.getElementById("main-stylesheet");
    const currentStyle = link.getAttribute("href");

    // Toggle between stylesheets
    const newStyle = currentStyle === "css\\main.css" ? "css\\dark_main.css" : "css\\main.css";
    link.setAttribute("href", newStyle);

    // Save the selected style in localStorage
    localStorage.setItem("main-stylesheet", newStyle);
}

window.onload = loadStylesheet();
