const products = [
    { name: "AquaPure Smart Bottle", description: "A self-cleaning water bottle with UV-C technology that purifies your water and keeps it fresh all day." },
    { name: "GlowSkin Pro Face Serum", description: "A vitamin C and hyaluronic acid-infused serum that hydrates, brightens, and rejuvenates your skin." },
    { name: "FlexiCharge Wireless Pad", description: "A fast-charging wireless pad that powers up your devices efficiently while keeping your desk clutter-free." },
    { name: "ZenSleep Memory Foam Pillow", description: "An ergonomic pillow with cooling gel technology that ensures restful sleep and perfect neck support." },
    { name: "EverFresh Smart Fridge", description: "A compact, AI-powered mini fridge that adjusts temperature based on stored items to keep food fresh longer." },
];

let debounceTimer;
function searchProduct(query) {
    clearTimeout(debounceTimer); 
    debounceTimer = setTimeout(() => {
        const resultsDiv = document.getElementById("searchResults");
        if (query.trim() === "") {
            resultsDiv.innerHTML = "Start typing to search...";
            return;
        }

        const results = products.filter(
            (p) =>
                p.name.toLowerCase().includes(query.toLowerCase()) ||
                p.description.toLowerCase().includes(query.toLowerCase())
        );

        if (results.length > 0) {
            resultsDiv.innerHTML = results
                .map((p) => `<div class="result-item"><strong>${p.name}</strong><br>${p.description}</div>`)
                .join("");
        } else {
            resultsDiv.innerHTML = "Product Not Found";
        }
    }, 500); 
}

document.getElementById("searchInput").addEventListener("input", (event) => {
    searchProduct(event.target.value);
});
