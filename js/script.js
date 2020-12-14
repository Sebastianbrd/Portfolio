document.addEventListener('DOMContentLoaded', nav)

function nav(){
    let menuToggle = document.querySelectorAll('.menu-toggle');
    const menuHide = document.querySelector('.menu-hide')
    const nav = document.querySelector('.navbar');
    menuToggle.forEach(function(element) {
      element.addEventListener('click', () => {
        nav.classList.toggle('show')
      })
    })
    menuHide.addEventListener('click', () => {
      nav.classList.remove('show')
    })
}