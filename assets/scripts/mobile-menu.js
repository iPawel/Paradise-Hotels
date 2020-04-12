const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.nav__container');


const handleClick = () => {
    burger.classList.toggle('burger--active');
    mobileMenu.classList.toggle('nav__container--active');
}



burger.addEventListener('click', handleClick);