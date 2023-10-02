// Find the toggle button using the class name
const toggleButton = document.getElementsByClassName("toggle-button")[0];
// Find the navigation links using the class name
const navbarLinks = document.getElementsByClassName("navbar")[0];

// When the toggleButton is clicked, toggle the classList for navbarLinks to active
toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
})