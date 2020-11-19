
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.




// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
var numCasualiPc= [];

function Casuale(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

while (numCasualiPc.length < 16) {
    var numeroCasuale = Casuale(1, 100);
    var trovaNumero = in_array(numCasualiPc, numeroCasuale);
    if (trovaNumero == false) {
    numCasualiPc.push(numeroCasuale);
  }
}

console.log(numCasualiPc);


function in_array (array,numero) {
  for(i = 0;  i<  array.length; i++) {
	  if (array[i] == numero) {
	  return true;
	  }
  }
    return false;
}

// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.

var listaNumUtente = [];
var numUtente = parseInt(prompt("Inserisci un numero tra 1 e 100"));
console.log(numUtente);


// L’utente non può inserire più volte lo stesso numero.
