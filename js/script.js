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

var listaNumUtente = [];
var lanci = 84;
var numPresente = false;
var punti = 0;
// chiedere all’utente (100 - 16) volte di inserire un numero alla volta,
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
while (listaNumUtente.length < lanci && numPresente == false) {
var numUtente = parseInt(prompt("inserisci un numero da 1 a 100"));
NumRange();
  // L’utente non può inserire più volte lo stesso numero.
  if (in_array(listaNumUtente, numUtente) == false) {
    listaNumUtente.push(numUtente);
    console.log(listaNumUtente);

    // La partita termina quando il giocatore inserisce un numero “vietato”
    if (in_array(numCasualiPc, numUtente) == true) {
      numPresente = true;
      console.log("Hai preso una mina!");
      document.write("GAME OVER"+"<br>");
      // Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
    } else {
        punti++;
    }
  }
}
console.log(punti + " "+"punti");
document.write("Le mine erano nelle posizioni:"+ numCasualiPc+"<br>");
document.write("I tuoi numeri:"+ listaNumUtente +"<br>");
document.write("Punteggio:" + " "+ punti );


// La partita termina quando il giocatore raggiunge il numero massimo possibile di numeri consentiti.
if (listaNumUtente.length == lanci) {
  document.write("Congratulazioni, hai raggiunto il punteggio massimo!");
}


// Controllo range numero utente
function NumRange() {
  if (numUtente >= 1 && numUtente <= 100) {
    numUtente;
  } else{
    alert("il numero inserito non è valido, riprova!")
  }
}



// fare un po di css
// !!!!!!!mettere in ordine indentazione e funzioni a fine pagina!!!!!//
