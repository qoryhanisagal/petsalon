// Handle form submission
document.getElementById("pet-registration-form").addEventListener("submit", (e) => {
    e.preventDefault();

    // Gather form data
    const pet = {
        name: document.getElementById("pet-name").value,
        age: document.getElementById("pet-age").value,
        gender: document.getElementById("pet-gender").value,
        breed: document.getElementById("pet-breed").value,
        service: document.getElementById("pet-service").value,
    };

    // Display the registered pet information
    console.log("Registered Pet:", pet);
    alert(`Successfully registered ${pet.name} for ${pet.service}!`);
});