burger = docuemnt.querySelector('.burger')
navbar = docuemnt.querySelector('.navbar')
rightNav = docuemnt.querySelector('.rightNav')
navList = docuemnt.querySelector('.nav-list')

burger.addEventListener('click', () => {
    rightNav.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
})