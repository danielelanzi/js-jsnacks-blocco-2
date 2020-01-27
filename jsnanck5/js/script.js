// <===========================INIZIO========================>
// Snack5 blocco 2
// Scrivi una funzione per stabilire se un numero è primo.
// Chiedi un numero all’utente e utilizza la funzione per
// comunicargli se il numero inserito è primo oppure no.

var numero = parseInt(prompt('Inserisci un numero'));
var verify = ifNumberFirst(numero);
function ifNumberFirst(num){
  for (var i = 2; i < num; i++) {
    if (num % i == 0) {
      console.log(num + ' non è primo. E\' divisibile per ' + i + ".");
      break;
    } else {
      console.log(num + ' è un numero primo');
    }
  }
}



// <===========================FINE========================>
