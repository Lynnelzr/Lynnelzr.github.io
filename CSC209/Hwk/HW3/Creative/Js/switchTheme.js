function switchTheme() {
    var theme = document.getElementById("themeStylesheet");
    var sidebarImage = document.getElementById("sidebarImg");

    if (theme.getAttribute("href") === "Css/style1.css") {
        theme.setAttribute("href", "Css/style2.css");
        sidebarImage.src = "https://cdn1.parksmedia.wdprapps.disney.com/vision-dam/digital/hkdl-platform/hkdl-global-assets/custom/duffy-and-friends-friendversary/DF-24-Friendversary-web-banner-7-16x9.jpg"; // New image for theme 2
    } else {
        theme.setAttribute("href", "Css/style1.css");
        sidebarImage.src = "https://cdn1.parksmedia.wdprapps.disney.com/vision-dam/digital/hkdl-platform/hkdl-global-assets/custom/duffy-and-friends-friendversary/DF-24-Friendversary-web-banner-5-16x9.jpg"; // Original image for theme 1
    }
}