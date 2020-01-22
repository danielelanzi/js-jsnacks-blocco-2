// <===========================INIZIO========================>
// Snack4 blocco2
// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi,
// fino a quando ne avrà tanti quanti l’altro.


var array1 = [1,2,3,4,5,'a','v',7];
console.log('elementi primo array: ' + array1);
var array2 = [1,2];
console.log('elementi secondo array: ' + array2);
for (var i = 0; i < array1.length && i < array2.length; i++){
  var array1Length = array1;
  var array2Length = array2;
}
var elementiMancanti = array1Length.length - array2Length.length;
console.log('Numero elementi mancanti nell\'array più corto: ' + elementiMancanti);
var i = 0;
while (i < elementiMancanti) {
  if (array2Length.includes(array1) == false) {
    array2Length.push(getRandomName(array1));
  }
  i++;
}
console.log('dopo il cicli gli elementi nell\'array più corto: ' + array2Length);

// Numero random
function getRandomNumber(min,max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  var random = Math.floor(Math.random() * (max - min + 1)) + min;
  return random;
};
//
// Elemento random
function getRandomName(element) {
  var random = element[Math.floor(Math.random() * element.length)];
 return random;
 };

// <===========================FINE========================>
