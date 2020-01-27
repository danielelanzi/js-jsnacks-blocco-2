// <===========================INIZIO========================>
// Snack3 Crea un array di numeri interi e fai la somma di tutti gli
// elementi che sono in posizione dispari


var numInteri = [1,2,3,4,5];
var verify = positionOdd(numInteri);
console.log(verify);

function positionOdd(num) {
  var sum = 0;
  for (var i = 0; i < num.length; i++){
    if (i % 2 == 0) {
      sum = sum + num[i];
    }
  }
  return sum;
}



// <===========================FINE========================>
