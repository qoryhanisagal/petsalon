// Define the pets array with 3 pets using object literals
const pets = [
    { name: "Buddy", age: 3, gender: "Male", service: "Grooming", breed: "Labrador" },
    { name: "Mittens", age: 2, gender: "Female", service: "Nail Trim", breed: "Persian Cat" },
    { name: "Charlie", age: 4, gender: "Male", service: "Check-up", breed: "Golden Retriever" }
];

// Function to display total pets count
function displayPetCount() {
    document.getElementById("pets-count").innerText = `Total Pets: ${pets.length}`;
}

// Function to display pet names in the HTML
function displayPetNames() {
    const petList = document.getElementById("pet-list");
    petList.innerHTML = ""; // Clear previous list
    for (let pet of pets) {
        let li = document.createElement("li");
        li.innerText = pet.name;
        petList.appendChild(li);
    }
}

// Initialize the display
displayPetCount();
displayPetNames();