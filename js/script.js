const menuHamburguer = document.querySelector('.menu-hamburguer');
const navResponsive = document.querySelector('.nav-responsive');

if (menuHamburguer && navResponsive) {
    menuHamburguer.addEventListener('click', () => {
        menuHamburguer.classList.toggle('change');
        navResponsive.classList.toggle('visible');
    });
} else {
    console.error('Menu hambúrguer ou navegação responsiva não encontrados!');
}
