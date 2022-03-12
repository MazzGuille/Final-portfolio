document.getElementById('name').innerHTML = localStorage.getItem('textvalue');

const menuIcon = document.getElementById("ham");
const navbar = document.getElementById("nav-container")
menuIcon.addEventListener("click", () => {
navbar.classList.toggle("change");
});

