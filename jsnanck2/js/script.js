// <===========================INIZIO========================>
// snack2 blocco 2
// Generatore di “nomi cognomi” casuali: prendendo una lista
// di nomi e una lista di cognomi, Gatsby vuole generare una
// falsa lista di invitati.

var nomi = ['anna','barbara','carlo','francesco'];
var cognomi = ['dea','enjoi','fizzz'];
var nomiCognomi = [];
for (var i = 0; i < nomi.length; i++) {
  var randomNomi = getRandomName(nomi, cognomi);
  if (nomiCognomi.includes(randomNomi) == false) {
    nomiCognomi.push(randomNomi);
  }
}
console.log(nomiCognomi);

function getRandomName(element, element1) {
  var random = element[Math.floor(Math.random() * element.length)] + ' ' + element1[Math.floor(Math.random() * element1.length)];
  return random;
};

// <===========================FINE========================>
