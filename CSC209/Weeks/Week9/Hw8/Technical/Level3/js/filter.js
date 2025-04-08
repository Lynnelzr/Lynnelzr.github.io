document.addEventListener("DOMContentLoaded", function () {
    const selector = document.getElementById("imageSelector");
    const images = document.querySelectorAll(".slideshow-img");

    selector.addEventListener("change", function () {
        const selected = this.value;

        images.forEach(img => {
            const imgId = img.getAttribute("data-img-id");

            if (selected === "all") {
                img.classList.remove("hidden");
            } else {
                img.classList.toggle("hidden", imgId !== selected);
            }
        });
    });
});
