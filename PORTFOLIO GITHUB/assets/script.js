let menuicon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuicon.onclick = () => {
    menuicon.classList.toggle('bx-x')
    navbar.classList.toggle('active');
}
document.querySelector('#about').scrollIntoView({
    behavior: 'smooth'
});
window.onload = function() {
    window.scrollTo(0, 0);
};