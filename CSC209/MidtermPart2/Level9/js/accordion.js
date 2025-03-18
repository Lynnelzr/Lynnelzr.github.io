function toggleFunction() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
    } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
    }
}

window.onload = function() {
var container = document.getElementById("accordionContainer");

for (var i = 0; i < NRIMAGES; i++) {
    var button = document.createElement("button");
    button.className = "accordion";
    button.innerHTML = "Section " + (i + 1);

    var panel = document.createElement("div");
    panel.className = "panel";
    panel.innerHTML = "<p>Image "+(i + 1)+" Link Here.</p>";

    container.appendChild(button);
    container.appendChild(panel);

    // Attach event listener for toggling
    button.addEventListener("click", toggleFunction);
}
};