/* Azioni sito principali:
- Chiedere il nome dell'hamburger all'utente prima di poter eseguire calcolo
- Attribuire valore ad ingredienti e sommarlo al prezzo base se "attivati"
- Creare una lista di codici in cui ricercare quello del coupon utente
- Stampare prezzo base(50)+ingredienti+coupon
 */


// Chiedere il nome dell'hamburger all'utente prima di poter eseguire calcolo
var nBurger = document.getElementById('n_burger');
var compute = document.getElementById('compute');

compute.addEventListener("click", function(){
  if(nBurger.value === ""){
  compute = alert("nome vuoto");
  }
  console.log(nBurger.value);

});
