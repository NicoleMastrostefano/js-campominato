// var maxNumberUtente;
// var numUtente;
// BONUS
var level= prompt("Scegli la difficoltà: 1,2 0 3");
switch(level){
  case "3":
    maxNumberUtente= 50;
    break;
  case "2":
    maxNumberUtente = 80;
    break;
    default:
    maxNumberUtente =100;
}
  listaNumUtente = maxNumberUtente - 16;

// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
var numCasualiPc= [];

while (numCasualiPc.length < 16) {
  var numeroCasuale = Casuale(1,maxNumberUtente);
  var trovaNumero = in_array(numCasualiPc, numeroCasuale);
  if (trovaNumero == false) {
  numCasualiPc.push(numeroCasuale);
  }
}

console.log(numCasualiPc);

var listaNumUtente = [];
var numPresente = false;
var punti = 0;

// chiedere all’utente (100 - 16) volte di inserire un numero alla volta,
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.

while (listaNumUtente.length < maxNumberUtente && numPresente == false) {
  numUtente = parseInt(prompt("inserisci un numero da 1 a"+ " "+ maxNumberUtente));
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
document.write("Punteggio:" + " "+ punti+"<br>" );


// La partita termina quando il giocatore raggiunge il numero massimo possibile di numeri consentiti.
if (listaNumUtente.length == maxNumberUtente) {
  document.write("Congratulazioni, hai raggiunto il punteggio massimo!");
}


// FUNZIONI:

// funzione che genera i numeri casuali del pc
function Casuale(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// funzione che trova il duplicato nell'array
function in_array (array,numero) {
  for(i = 0;  i<  array.length; i++) {
	  if (array[i] == numero) {
	  return true;
	  }
  }
    return false;
}

// Controllo range numero utente
function NumRange() {
  if (numUtente >= 1 && numUtente <= maxNumberUtente) {
    numUtente;
  } else{
    alert("il numero inserito non è valido, riprova!")
  }
}
