document.addEventListener("DOMContentLoaded", function() {
    const firstRow = document.getElementById("firstRow");
    const checkbox = document.getElementById("showFirstRow");
    const toggleButton = document.getElementById("toggleRowBtn");

    // Function to toggle row visibility
    function toggleRowVisibility() {
        if (checkbox.checked) {
            firstRow.style.display = "table-row";
        } else {
            firstRow.style.display = "none";
        }
    }

    // Checkbox listener
    checkbox.addEventListener("change", toggleRowVisibility);

    // Button to show row and check checkbox
    toggleButton.addEventListener("click", function() {
        firstRow.style.display = "table-row";
        checkbox.checked = true;
    });
});
