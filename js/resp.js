burger = document.querySelector('.burger')
navbar = document.querySelector('.nav-bar')
navlist = document.querySelector('.nav-list')
rightnav = document.querySelector('.right-nav')


burger.addEventListener('click', ()=>{
    rightnav.classList.toggle('v-class-resp');
    navlist.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');

})