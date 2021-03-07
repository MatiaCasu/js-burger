/* Azioni sito principali:
- Chiedere il nome dell'hamburger all'utente prima di poter eseguire calcolo
- Attribuire valore ad ingredienti e sommarlo al prezzo base se "attivati"
- Creare una lista di codici in cui ricercare quello del coupon utente
- Stampare prezzo base(50)+ingredienti+coupon
*/

// Dichiarazioni variabili
var nBurger = document.getElementById('n_burger');
var compute = document.getElementById('compute');
var ingredienti = document.getElementsByClassName('ingredients');
var burgerPrice = document.getElementById('price');
var listaCoupon = ["in", "123", "abc", "miao"];
var inputCoupon = document.getElementById('yourCoupon');
// /Dichiarazioni variabili

// Ad ogni Click del bottone Calculate
compute.addEventListener("click", function(){
  // crea Alert fin che l'input n_burger non ha valore diverso da vuoto ("")
  if(nBurger.value === ""){
    compute = alert("Dai un nome al tuo Hamburger!");
  }
  else{
    var plainPrice = 50;

    // aggiungi/togli valore ingredienti al prezzo base
    for(var i = 0; i < ingredienti.length; i++){
      ingredienti[i] = i;

      if(ingredienti[i].checked){
        plainPrice += parseInt(ingredienti[i].value);
      }
    }
    // /aggiungi/togli valore ingredienti al prezzo base

    // Trova in listaCoupn l'elemento uguale al valore inputCoupon e applica il 20% di sconto
    if(listaCoupon.includes(yourCoupon.value)){
      plainPrice -= plainPrice * 0.2;
    }
    // /Trova in listaCoupn l'elemento uguale al valore inputCoupon e applica il 20% di sconto

    price.innerHTML = "$ " + plainPrice;
  }
  // /crea Alert fin che l'input n_burger non ha valore diverso da vuoto ("")

});
// /Ad ogni Click del bottone Calculate
