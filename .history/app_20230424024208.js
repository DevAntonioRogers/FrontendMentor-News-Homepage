const hamburger = document.getElementById('hamburger-icon')
const close = document.getElementById('close-icon')
const menu = document.querySelector('.nav-menu')

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active')
  close.classList.toggle('active')
})