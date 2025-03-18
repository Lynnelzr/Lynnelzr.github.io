function addAllCities() {
    let tabContainer = document.getElementById("tabContainer");

    for (let i = 0; i < NRCITY; i++) {
        //create the tab button
        let button = document.createElement("button");
        button.classList.add("tablinks");
        button.innerText = CITYS[i];
        button.onclick = function(event) {
            openCity(event, CITYS[i]);
        };
        tabContainer.appendChild(button);

        //create the tab content div
        let contentDiv = document.createElement("div");
        contentDiv.id = CITYS[i];
        contentDiv.classList.add("tabcontent");
        contentDiv.innerHTML = `<h3>${CITYS[i]}</h3><p>${CITYS[i]} is a city of ${COUNTRIES[i]}.</p>`;
        document.body.appendChild(contentDiv);
    }
}

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
