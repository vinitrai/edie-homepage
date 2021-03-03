const menuIcon = document.querySelector('.menu');
const topNav = document.getElementById('topNav');

menuIcon.addEventListener('click', function () {
    topNav.classList.toggle('active');
});