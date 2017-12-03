document.addEventListener('DOMContentLoaded', function() {

//######################################## SLIDER
var arrowRight = document.querySelector('.header__arrow--right');
var arrowLeft = document.querySelector('.header__arrow--left');
var chairFoto = document.querySelectorAll('.header__chair img');
var imgId = 0;

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
});

//######################################## IMAGES


//######################################## CHOICE SECTION

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




// //Kod od Marcina - SZTOS!
// //tutaj bedziemy podliczac
//     var dataCost = {
//         color : 0,
//         pattern : 0,
//         type : 0,
//         transport : 0
//     }
//
//     //zliczam dane w powyszym obiekcie
//     function sumCost() {
//         var totalCost = 0;
//         for (var i in dataCost) {
//             if (dataCost.hasOwnProperty(i)) {
//                 totalCost += dataCost[i];
//             }
//         }
//         return totalCost;
//     }
//
//     var listArrows = document.querySelectorAll('.list_arrow');
//
//     //Pobieranie wybranych elementow z list
//     var rightPanel = document.querySelector('.panel_right')
//     var leftPanel = document.querySelector('.panel_left')
//     var transportCost = document.querySelector('#transport');
//
//     //Pobieranie pol sumy
//     var sum = document.querySelector('.sum strong');
//
//     //PÄtla po strzaĹkach + eventy
//     for (var i = 0; i < listArrows.length; i++) {
//         listArrows[i].addEventListener('click', function() {
//             var listPanel = this.parentElement.querySelector('.list_panel');
//             listPanel.classList.toggle('show');
//         });
//     }
//
//     var li = document.querySelectorAll('.list_panel li');
//     for (var i = 0; i < li.length; i++) {
//         li[i].addEventListener('click', function() {
//             //po kliknieciu na li pobieram dataset target z jego rodzica
//             //np target = "pattern"
//             var target = this.parentElement.dataset.target;
//             //wstawiam wartosc dataset.price do dataCost pod odpowiedni klucz
//             //do obiektow mozna sie odwolywac jak w tablicach czyli
//             //dataCost["pattern"]...
//
//             //dataset trzyma dane w formie string, trzeba je skonwertowac
//             dataCost[target] = parseInt(this.dataset.price, 10);
//             console.log(rightPanel, target)
//             //pobieram odpowiedni element z right i left panel np
//             //.right_panel .pattern
//             //:scope oznacza - szukaj tylko w tym elemencie
//             //mozna w sumie go poninac
//             rightPanel.querySelector(':scope .'+target).innerText = this.dataset.price;
//             leftPanel.querySelector(':scope .'+target).innerText = this.innerText;
//             this.parentElement.classList.toggle('show')
//
//             //podliczam sume
//             sum.innerText = sumCost();
//
//         });
//     }
//
//
//     //Etap 4 - informacje o transporcie na klik
//     transportCost.addEventListener('click', function() {
//         //metoda podobna do powyzszej.
//         //czyli z dataset kliknietego checkboxa biore data-target
//         //nastepnie pobieram na podstawie tej danej odpowiednie
//         //elemnety ze strony i odpowiednia rzecz w dataCost
//         var target = this.dataset.target;
//         var price = parseInt(this.dataset.price, 10)
//         if (!this.checked) {
//             price = 0;
//             rightPanel.querySelector(':scope .'+target).innerText = '';
//             leftPanel.querySelector(':scope .'+target).innerText = '';
//         } else {
//             rightPanel.querySelector(':scope .'+target).innerText = price;
//             leftPanel.querySelector(':scope .'+target).innerText = 'Transport';
//         }
//
//         dataCost[target] = price;
//
//         sum.innerText = sumCost();
//     });




















//Koniec DOMContentLoaded
});
