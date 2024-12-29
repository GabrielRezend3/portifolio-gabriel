



const menuHamburguer = document.querySelector('.menu-hamburguer')

menuHamburguer.addEventListener('click', ()   => {


console.log("OK");
toggleMenu();


});


function toggleMenu () {

    const nav = document.querySelector('.nav-responsive');
    menuHamburguer.classList.toggle('change')

    if(menuHamburguer.classList('change'))  {


        nav.style.display = 'block'

    } else {

         nav.style.display = 'none'

    }



}
