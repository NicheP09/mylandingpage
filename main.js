const hamburgerBtn = document.querySelector('.hamburger-button');
const ul = document.querySelector('.ul');
const loginBox = document.querySelector('.login-box');
const loginBtnTop = document.querySelector('.loginbutton');
const intro = document.querySelector('.intro1');
const services =  document.querySelector('.services');
const closeIcon =  document.querySelector('.close-icon');

const aboutBtn =  document.querySelector('.aboutbt');
const aboutUs =  document.querySelector('.about-us');
const homeBtn=  document.querySelector('.homebt');
const serviceBtn=  document.querySelector('.servicebt');
const contactBtn=  document.querySelector('.contactbt');


 






hamburgerBtn.addEventListener('click', () => {
 ul.classList.toggle('active')

})

contactBtn.addEventListener('click', () => {
 ul.classList.remove('active')

})

homeBtn.addEventListener('click', () => {
 ul.classList.remove('active')

})

serviceBtn.addEventListener('click', () => {
 ul.classList.remove('active')

})

loginBtnTop.addEventListener('click', () => {
  intro.classList.toggle('noshow');
  services.classList.toggle('noshow');
  loginBox.classList.toggle('show');
  ul.classList.remove('active');

})

closeIcon.addEventListener('click', () => {
   loginBox.classList.remove('show');
  intro.classList.remove('noshow');
  services.classList.remove('noshow');

})

aboutBtn.addEventListener('click', () => {
  aboutUs.classList.add('show');
  services.classList.remove('noshow');
  services.classList.add('show');
  loginBox.classList.add('noshow');
  intro.classList.add('noshow');
   ul.classList.remove('active');
 

})



