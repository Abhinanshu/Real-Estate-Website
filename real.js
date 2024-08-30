const nav = document.querySelector('nav');
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

burger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
});

document.getElementById('viewDetailsButton').addEventListener('click', function() {
    window.location.href = 'view details/index.html';
});
