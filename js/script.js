document.addEventListener('DOMContentLoaded', nav)

function nav(){
    let menuToggle = document.querySelectorAll('.menu-toggle');
    const nav = document.querySelector('.navbar');
    menuToggle.forEach(function(element) {
      element.addEventListener('click', () => {
        nav.classList.toggle('show')
      })
    })
}