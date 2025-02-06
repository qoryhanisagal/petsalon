// Landing Page Script

// Event listener for the "Explore" button in the Hero Section
const exploreButton = document.querySelector(".hero button");
exploreButton.addEventListener("click", () => {
    alert("Explore our amazing services for your pets!");
});

// Filter functionality: Log selected filter options to the console
const filters = {
    location: document.querySelector(".filters select:nth-child(1)"),
    date: document.querySelector(".filters select:nth-child(2)"),
    pets: document.querySelector(".filters select:nth-child(3)"),
    searchButton: document.querySelector(".filters button"),
};

// Event listener for the Search button
filters.searchButton.addEventListener("click", () => {
    const selectedLocation = filters.location.value;
    const selectedDate = filters.date.value;
    const selectedPets = filters.pets.value;

    console.log(`Location: ${selectedLocation}`);
    console.log(`Date: ${selectedDate}`);
    console.log(`Number of Pets: ${selectedPets}`);

    alert(`Searching for services in ${selectedLocation} on ${selectedDate} for ${selectedPets} pets.`);
});

// Hover animation for grid items in Categories and Deals sections
const gridItems = document.querySelectorAll(".category-grid div, .deal-grid div");
gridItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
        item.style.transform = "scale(1.05)";
        item.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.2)";
    });

    item.addEventListener("mouseleave", () => {
        item.style.transform = "scale(1)";
        item.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
    });
});