console.log("bonjour");

//Recherche dans le DOM
console.log(document.getElementById("c1"));

console.log(document.querySelector(".carte"));

for (let elem of document.querySelectorAll(".carte")) {
  console.log(elem);
}
//console.log(document.getElementsByClassName("carte"));

let noeuds = document.getElementsByTagName("p");
for (let i = 0; i < noeuds.length; i++) {
  console.log(noeuds[i]);
}

console.log(document.getElementById("j1").className);

console.log(document.getElementById("j1").lastElementChild.id);

//Modification du DOM
document.getElementById("titre").textContent = "TP2 manipulation du DOM";

document.getElementById("c1").style.background = "red";
document.getElementById("c2").style.background = "green";

let carte3 = document.createElement("p");
carte3.id = "c3";
carte3.class = "carte";
carte3.innerHTML = "<a> 3 </a>";
carte3.style.background = "blue";
document.getElementById("j1").appendChild(carte3);

function ajouterCarte(numero) {
  let carte = document.createElement("p");
  carte.id = "c" + numero;
  carte.class = "carte";
  carte.innerHTML = "<a>" + numero + "</a>";
  carte.style.background = couleurAleatoire();
  document.getElementById("j1").appendChild(carte);
}
ajouterCarte(4);
ajouterCarte(5);

function couleurAleatoire() {
  let tCouleurs = ["blue", "red", "purple", "yellow", "green"];
  let indice = Math.round(Math.random() * tCouleurs.length - 1);
  return tCouleurs[indice];
}

for (let i = 6; i <= 10; i++) {
  ajouterCarte(i);
}

function supprimerCarte(numero) {
  document.getElementById("c" + numero).remove();
}
supprimerCarte(5);

function deplacerCarte() {
  let carte1 = document.getElementById("j1").firstElementChild;
  document.getElementById("j1").appendChild(carte1);
}
deplacerCarte();
setInterval(deplacerCarte, 2000); //paramètre : nom de la fonction, temps d'intervalle en ms
