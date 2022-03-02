document.getElementById('name').innerHTML = localStorage.getItem('textvalue');

const menuIcon = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".navbar")
menuIcon.addEventListener("click", () => {
navbar.classList.toggle("change");
});

