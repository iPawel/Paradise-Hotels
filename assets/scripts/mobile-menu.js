const menu = document.querySelector('.burger__icon');


const handleClick = () => {
    menu.classList.toggle('burger__icon--active');
    console.log('ok')
}



menu.addEventListener('click', handleClick)