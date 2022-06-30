burger = document.querySelector('.burger')
navbarN = document.querySelector('.navbarN')
navList = document.querySelector('.nav-l')

burger.addEventListener('click' ,()=>{


    navList.classList.toggle('v-class-r');
    navbarN.classList.toggle('h-nav-r');
})