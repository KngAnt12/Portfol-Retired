const HamburgerButton = document.getElementById('Hamburger')
const navList = document.getElementById9('nav-list')

function toggleButton(){
    navList.classList.toggle('show')
}

HamburgerButton.addEventListener('click', toggleButton)