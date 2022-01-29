const iconMenu = document.querySelector('.menu__icon');
const burgerMenu = document.querySelector('.burger__menu');
if (iconMenu){
    iconMenu.addEventListener("click",function(){
        iconMenu.classList.toggle('_active');
        burgerMenu.classList.toggle('_opacity');
    });
}
