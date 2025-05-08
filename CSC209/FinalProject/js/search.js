function searchEntries() {
    const tag = document.getElementById("searchInput").value.trim();

    if (!tag) {
        alert("Please enter a hashtag to search.");
        return;
    }

    fetch(`php/search_public_entries.php?hashtag=${encodeURIComponent(tag)}`)
        .then(res => res.json())
        .then(data => {
        const resultsDiv = document.getElementById("searchResults");
        resultsDiv.innerHTML = `<h3>Search Results for #${tag}</h3>`;

        if (data.length === 0) {
            resultsDiv.innerHTML += "<p>No matching public entries found.</p>";
            return;
        }

        data.forEach(item => {
            const card = document.createElement("div");
            card.style.border = "1px solid #ccc";
            card.style.padding = "10px";
            card.style.marginBottom = "10px";
            card.style.borderRadius = "8px";
            card.style.background = "#f9f9f9";
            card.innerHTML = `<strong>@${item.username}</strong> <em>${item.date}</em><br>${item.text}`;
            resultsDiv.appendChild(card);
        });
        });
}
  