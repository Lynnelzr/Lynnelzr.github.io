function toggleReadMe() {
    var readMeText = document.getElementById("readMeText");
    var btn = document.getElementById("readMeBtn");
    if (readMeText.style.display === "none") {
        readMeText.style.display = "block";
        btn.innerText = "Hide";
    } else {
        readMeText.style.display = "none";
        btn.innerText = "ReadMe";
    }
}