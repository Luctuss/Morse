function afficherMessage() {
  document.getElementById("confirmation").textContent = "Votre message a bien été envoyé.";
}

const MORSE = {
  A:'.-', B:'-...', C:'-.-.', D:'-..', E:'.', F:'..-.', G:'--.', H:'....', I:'..', J:'.---',
  K:'-.-', L:'.-..', M:'--', N:'-.', O:'---', P:'.--.', Q:'--.-', R:'.-.', S:'...', T:'-',
  U:'..-', V:'...-', W:'.--', X:'-..-', Y:'-.--', Z:'--..',
  '0':'-----', '1':'.----', '2':'..---', '3':'...--', '4':'....-', '5':'.....', 
  '6':'-....', '7':'--...', '8':'---..', '9':'----.',
  '.':'.-.-.-', ',':'--..--', '?':'..--..', "'":'.----.', '!':'-.-.--', '/':'-..-.', 
  '(':'-.--.', ')':'-.--.-', '&':'.-...', ':':'---...', ';':'-.-.-.', '=':'-...-', 
  '+':'.-.-.', '-':'-....-', '_':'..--.-', '"':'.-..-.', '$':'...-..-', '@':'.--.-.'
};
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

function MorseToText(){
  const text = document.getElementById('champ-latin').value.toUpperCase();
  const result = text.split('').map(c => {
    if (c === ' ') return '/';
    return MORSE[c] || c;
  }).join(' ');
  document.getElementById('champ-morse').value = result;
}


function TextToMorse(){
  const morse = document.getElementById('champ-morse').value.trim();
  const words = morse.split(' / ');
  const result = words.map(word =>
    word.split(' ').map(code => REVERSE[code] || code).join('')
  ).join(' ');
  document.getElementById('champ-latin').value = result;
}

function traduire() {
  const texte = document.getElementById('champ-latin').value.toUpperCase();
  const morse = {
    A:'.-', B:'-...', C:'-.-.', D:'-..', E:'.', F:'..-.', G:'--.', H:'....',
    I:'..', J:'.---', K:'-.-', L:'.-..', M:'--', N:'-.', O:'---', P:'.--.',
    Q:'--.-', R:'.-.', S:'...', T:'-', U:'..-', V:'...-', W:'.--', X:'-..-',
    Y:'-.--', Z:'--..',
    '0':'-----', '1':'.----', '2':'..---', '3':'...--', '4':'....-',
    '5':'.....', '6':'-....', '7':'--...', '8':'---..', '9':'----.'
  };

  const resultat = texte.split('').map(c => {
    if (c === ' ') return '/';
    return morse[c] || c;
  }).join(' ');

  document.getElementById('champ-morse').value = resultat;
}

function traduireInverse() {
  const morseTexte = document.getElementById('champ-morse').value.trim();
  const morse = {
    '.-':'A', '-...':'B', '-.-.':'C', '-..':'D', '.':'E', '..-.':'F', '--.':'G',
    '....':'H', '..':'I', '.---':'J', '-.-':'K', '.-..':'L', '--':'M', '-.':'N',
    '---':'O', '.--.':'P', '--.-':'Q', '.-.':'R', '...':'S', '-':'T', '..-':'U',
    '...-':'V', '.--':'W', '-..-':'X', '-.--':'Y', '--..':'Z',
    '-----':'0', '.----':'1', '..---':'2', '...--':'3', '....-':'4',
    '.....':'5', '-....':'6', '--...':'7', '---..':'8', '----.':'9'
  };

  const resultat = morseTexte.split(' / ').map(mot =>
    mot.split(' ').map(code => morse[code] || '?').join('')
  ).join(' ');

  document.getElementById('champ-latin').value = resultat;
}