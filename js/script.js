let hamburgerBtn = document.querySelector('#hamburger');
let hamburgerBar = document.querySelectorAll('.bar')
let hamburgerMenu = document.querySelector('#hamburger-container')

function isActive(element) {
    element.forEach(function(element) {
        element.classList.toggle('is-active')
    })
}


hamburgerBtn.addEventListener('click', function() {
    isActive(hamburgerBar);
});

hamburgerBtn.addEventListener('click', function() {
    hamburgerMenu.classList.toggle('is-active')
})