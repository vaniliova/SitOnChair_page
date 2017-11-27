document.addEventListener('DOMContentLoaded', function() {

//###########TOOLTIP
var tooltip = document.querySelector('.nav__items');
var tooltip1 = document.querySelector('.nav__items__detail');
var arrow = document.querySelector('.nav__items__detail--arrow');

tooltip.querySelector('li').addEventListener('mouseover', function(event) {
  event.preventDefault();
  arrow.style.display = "block";
  tooltip1.style.display = "block";
});
tooltip1.addEventListener('mouseout', function(event) {
  event.preventDefault();
  arrow.style.display = "none";
  tooltip1.style.display = "none";//w css ostylować zamienione linki
});

//############SLIDER
var arrowRight = document.querySelector('.header__arrow--right');
var arrowLeft = document.querySelector('.header__arrow--left');
var chairFoto = document.querySelectorAll('.header__chair img');
var imgId = 0;

chairFoto[imgId].classList.add('invisible');
//eventy wywołuja się po podwojnym kliknięciu...
arrowRight.addEventListener('click', function() {
  chairFoto[imgId].classList.add('invisible');
  imgId++;
  if (imgId == chairFoto.length) {
    imgId = 0;
  }
  chairFoto[imgId].classList.remove('invisible');
});
arrowLeft.addEventListener('click', function() {
  chairFoto[imgId].classList.add('invisible');
  imgId--;
  if (imgId < 0) {
    imgId = chairFoto.length-1;
  }
  chairFoto[imgId].classList.remove('invisible');
})




















//Koniec DOMContentLoaded
});
