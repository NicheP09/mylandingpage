const hamburgerBtn = document.querySelector('.hamburger-button');
const ul = document.querySelector('.ul');

hamburgerBtn.addEventListener('click', () => {
 ul.classList.toggle('active')
})