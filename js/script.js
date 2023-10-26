let hamburgerBtn = document.querySelector('#hamburger');
let hamburgerBar = document.querySelectorAll('.bar')

function isActive(element) {
    element.forEach(function(element) {
        element.classList.toggle('is-active')
    })
}


hamburgerBtn.addEventListener('click', function() {
    isActive(hamburgerBar);
})