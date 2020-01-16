// <===========================INIZIO========================>
// Inserisci un numero, se è pari stampa il numero, se è dispari
// stampa il numero successivo

var numero = parseInt(prompt('Inserisci il numero'));
console.log('Il primo numero inserito è: ' + numero);

if (numero % 2 == 0) {
  console.log('il numero è pari: ' + numero);
} else {
  console.log('Il numero inserito è dispari, verrà inserito il numero successivo: ' + (numero + 1));
}
// <===========================FINE========================>
