document.addEventListener('DOMContentLoaded', function() {

//########################################### TOOLTIP #####################################
// var tooltip = document.querySelector('.nav__items');
// var tooltip1 = document.querySelector('.nav__items__detail');
// var arrow = document.querySelector('.nav__items__detail--arrow');
//
// tooltip.querySelector('li').addEventListener('mouseover', function(event) {
//   event.preventDefault();
//   arrow.style.display = "block";
//   tooltip1.style.display = "block";
// });
// tooltip1.addEventListener('mouseout', function(event) {
//   event.preventDefault();
//   arrow.style.display = "none";
//   tooltip1.style.display = "none";//w css ostylować zamienione linki
// });

//######################################## SLIDER ######################################################3
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



//######################################## CHOICE SECTION ###########################################

//Etap 1 - dropdown
var listArrows = document.querySelectorAll('.list_arrow');

//Pobieranie wybranych elementow z list
var title = document.querySelector('.title');
var color = document.querySelector('.color');
var pattern = document.querySelector('.pattern');

//Pobieranie wartości z dodanych elementow
var titleValue = document.querySelector('.value1');
var colorValue = document.querySelector('.value2');
var patternValue = document.querySelector('.value3');

//Pobieranie informacji o transporcie
var transportCost = document.querySelector('#transport');
var transportValue = document.querySelector('.value4');
var transport = document.querySelector('.transport');

//Pobieranie pol sumy
var sum = document.querySelector('.sum strong');

//Pętla po strzałkach + eventy
for (var i = 0; i < listArrows.length; i++) {
  listArrows[i].addEventListener('click', function() {
    var listPanel = this.parentElement.querySelector('.list_panel');
    listPanel.classList.toggle('show');

    //Etap 2 - dodawanie elementow do panelu podsumowania
    var elements = this.parentElement.querySelectorAll('.list_panel li');
    for (var j = 0; j < elements.length; j++) {
      elements[j].addEventListener('click', function() {

        //Etap 3 - Warunki
        if (this.innerText == 'Clair' || this.innerText == 'Margarita' || this.innerText == 'Selena') {
          title.innerText = this.innerText;
          titleValue.innerText = this.dataset.price;
          listPanel.classList.remove('show');
        } else if (this.innerText == 'Czerwony' || this.innerText == 'Czarny' || this.innerText == 'Pomarańczowy') {
          color.innerText = this.innerText;
          colorValue.innerText = this.dataset.price;
          listPanel.classList.remove('show');
        } else if (this.innerText == 'Tkanina' || this.innerText == 'Skóra') {
          pattern.innerText = this.innerText;
          patternValue.innerText = this.dataset.price;
          listPanel.classList.remove('show');
        }

        //Wyświetlanie sumy cen wybranego produktu
        sum.innerText = Number(titleValue.innerText) + Number(colorValue.innerText) + Number(patternValue.innerText);
      });
    }
  });
}

//Etap 4 - informacje o transporcie na klik
transportCost.addEventListener('click', function() {
    transport.innerText = 'Transport';
    transportValue.innerText = this.dataset.price;
    sum.innerText = Number(sum.innerText) + Number(transportValue.innerText);
    //TODO
    //zabezpieczyć przed dodawaniem wielokrotnie transportu i zwiększaniem sumy,
    //zrobić coś, żeby działało gdy najpierw user wybeirze transport a potem fotel
});

























//Koniec DOMContentLoaded
});
