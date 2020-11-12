


var dadoGiocatore = Math.floor(Math.random()*6)+1 ;

var dadoComputer = Math.floor(Math.random()*6)+1;

if (dadoGiocatore > dadoComputer) {
  document.getElementById('win').innerHTML = "Il giocatore"

} else if (dadoGiocatore == dadoComputer) {
  document.getElementById('win').innerHTML = " pareggio"
}
else {
  document.getElementById('win').innerHTML = "Il computer"
}
