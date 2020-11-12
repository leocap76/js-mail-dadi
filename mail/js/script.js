//array lista delle email
var emailList = ["prova@gmail.com", "alice@gmail.com", "giulia@gmail.com", "alessio@gmail.com", "leo@gmail.com"];

var usermail = prompt ("inserisci la tua email");

var result = false;

//controllare email: se l'email è inclusa nell'array invia messaggio: accesso consentito,
//se l'email non è presente, invia messaggio "accesso non consentito"

for (var i = 0; i < emailList.length; i++) {
  if (usermail == emailList[i]){
    result = true;
  }
}

if (result === true) {
  document.getElementById('access').innerHTML = "Accesso Consentito";
} else {
  document.getElementById('access').innerHTML = "Accesso non Consentito";
}
