// toggles the mobile nav menu open and closed

const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', function () {
    mobileMenu.classList.toggle('open');
});

// closes the menu when a link is clicked
mobileMenu.addEventListener('click', function () {
    mobileMenu.classList.remove('open');
});