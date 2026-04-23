function afficherMessage() {
  document.getElementById("confirmation").textContent = "Votre message a bien été envoyé.";
}

function insertMorse(c) {
  const ta = document.getElementById('champ-morse');
  const start = ta.selectionStart;
  const end = ta.selectionEnd;
  const val = ta.value;
  ta.value = val.slice(0, start) + c + val.slice(end);
  const pos = start + c.length;
  ta.selectionStart = ta.selectionEnd = pos;
  ta.focus();
}
