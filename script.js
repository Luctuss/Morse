function afficherMessage() {
  document.getElementById("confirmation").textContent = "Votre message a bien été envoyé.";
}

function ajouterSymbole(symbole) {
  document.getElementById("champ-morse").value += symbole;
}
