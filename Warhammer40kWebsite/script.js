// Get references to the button and the element to change
const changeTextButton = document.getElementById("changeTextButton");
const textToChange = document.getElementById("textToChange");
const bodyElement = document.body; // Get the body element

// Add a click event listener to the button
changeTextButton.addEventListener("click", function() {
    // Change the text of the element when the button is clicked
    bodyElement.classList.toggle("body-color-changed");
    textToChange.textContent = "In the 41st Millennium, ancient civilizations and rising empires coexist harmoniously, bringing prosperity to countless worlds.Humanity thrives, surrounded by allies who uphold tradition, evolution, and unity. Compassion reigns, and tranquility prevails. Prepare for an era of peace.";
});
