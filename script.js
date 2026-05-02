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

function TraduireVersMorse() {
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

function TraduireVersLatin() {
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

// ── CLÉ TÉLÉGRAPHIQUE ─────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', function() {

  var CLE_DOT  = '\u00B7';
  var CLE_DASH = '\u2212';

  var CLE_MORSE_TABLE = {
    'A': CLE_DOT+CLE_DASH,
    'B': CLE_DASH+CLE_DOT+CLE_DOT+CLE_DOT,
    'C': CLE_DASH+CLE_DOT+CLE_DASH+CLE_DOT,
    'D': CLE_DASH+CLE_DOT+CLE_DOT,
    'E': CLE_DOT,
    'F': CLE_DOT+CLE_DOT+CLE_DASH+CLE_DOT,
    'G': CLE_DASH+CLE_DASH+CLE_DOT,
    'H': CLE_DOT+CLE_DOT+CLE_DOT+CLE_DOT,
    'I': CLE_DOT+CLE_DOT,
    'J': CLE_DOT+CLE_DASH+CLE_DASH+CLE_DASH,
    'K': CLE_DASH+CLE_DOT+CLE_DASH,
    'L': CLE_DOT+CLE_DASH+CLE_DOT+CLE_DOT,
    'M': CLE_DASH+CLE_DASH,
    'N': CLE_DASH+CLE_DOT,
    'O': CLE_DASH+CLE_DASH+CLE_DASH,
    'P': CLE_DOT+CLE_DASH+CLE_DASH+CLE_DOT,
    'Q': CLE_DASH+CLE_DASH+CLE_DOT+CLE_DASH,
    'R': CLE_DOT+CLE_DASH+CLE_DOT,
    'S': CLE_DOT+CLE_DOT+CLE_DOT,
    'T': CLE_DASH,
    'U': CLE_DOT+CLE_DOT+CLE_DASH,
    'V': CLE_DOT+CLE_DOT+CLE_DOT+CLE_DASH,
    'W': CLE_DOT+CLE_DASH+CLE_DASH,
    'X': CLE_DASH+CLE_DOT+CLE_DOT+CLE_DASH,
    'Y': CLE_DASH+CLE_DOT+CLE_DASH+CLE_DASH,
    'Z': CLE_DASH+CLE_DASH+CLE_DOT+CLE_DOT,
    '0': CLE_DASH+CLE_DASH+CLE_DASH+CLE_DASH+CLE_DASH,
    '1': CLE_DOT+CLE_DASH+CLE_DASH+CLE_DASH+CLE_DASH,
    '2': CLE_DOT+CLE_DOT+CLE_DASH+CLE_DASH+CLE_DASH,
    '3': CLE_DOT+CLE_DOT+CLE_DOT+CLE_DASH+CLE_DASH,
    '4': CLE_DOT+CLE_DOT+CLE_DOT+CLE_DOT+CLE_DASH,
    '5': CLE_DOT+CLE_DOT+CLE_DOT+CLE_DOT+CLE_DOT,
    '6': CLE_DASH+CLE_DOT+CLE_DOT+CLE_DOT+CLE_DOT,
    '7': CLE_DASH+CLE_DASH+CLE_DOT+CLE_DOT+CLE_DOT,
    '8': CLE_DASH+CLE_DASH+CLE_DASH+CLE_DOT+CLE_DOT,
    '9': CLE_DASH+CLE_DASH+CLE_DASH+CLE_DASH+CLE_DOT
  };

  var CLE_REVERSE = {};
  for (var k in CLE_MORSE_TABLE) {
    CLE_REVERSE[CLE_MORSE_TABLE[k]] = k;
  }

  var cleKey       = document.getElementById('telegraphKey');
  var cleLamp      = document.getElementById('lamp');
  var cleLampGlow  = document.getElementById('lampGlow');
  var cleMorse     = document.getElementById('manualMorse');
  var cleDecoded   = document.getElementById('decoded');
  var cleAddLetter = document.getElementById('addLetterBtn');
  var cleAddWord   = document.getElementById('addWordBtn');
  var cleClear     = document.getElementById('clearBtn');
  var cleRefGrid   = document.getElementById('refGrid');

  if (!cleKey) return; // pas sur cette page, on arrête

  var clePressStart    = null;
  var cleCurrentLetter = '';
  var cleFullMorse     = '';
  var CLE_THRESHOLD    = 250;

  function cleLampOn()  { cleLamp.classList.add('on'); cleLampGlow.classList.add('on'); }
  function cleLampOff() { cleLamp.classList.remove('on'); cleLampGlow.classList.remove('on'); }

  function cleOnDown(e) {
    e.preventDefault();
    if (clePressStart !== null) return;
    clePressStart = Date.now();
    cleLampOn();
    cleKey.classList.add('pressed');
  }

  function cleOnUp(e) {
    if (clePressStart === null) return;
    var duration = Date.now() - clePressStart;
    clePressStart = null;
    cleLampOff();
    cleKey.classList.remove('pressed');
    cleCurrentLetter += (duration < CLE_THRESHOLD) ? CLE_DOT : CLE_DASH;
    cleRefresh();
  }

  cleKey.addEventListener('mousedown', cleOnDown);
  cleKey.addEventListener('mouseup', cleOnUp);
  cleKey.addEventListener('touchstart', cleOnDown, { passive: false });
  cleKey.addEventListener('touchend', cleOnUp, { passive: false });

  function cleRefresh() {
    var display = cleFullMorse
      ? cleFullMorse + (cleCurrentLetter ? '   ' + cleCurrentLetter : '')
      : cleCurrentLetter;
    cleMorse.textContent = display || '\u2014';

    var parts = [];
    if (cleFullMorse) parts = cleFullMorse.split('   ');
    if (cleCurrentLetter) parts.push(cleCurrentLetter);

    var text = parts.map(function(code) {
      return code === '/' ? ' ' : (CLE_REVERSE[code] || '?');
    }).join('');

    cleDecoded.textContent = text || '\u2014';
    cleHighlightRef(text.toUpperCase());
  }

  cleAddLetter.addEventListener('click', function() {
    if (!cleCurrentLetter) return;
    cleFullMorse = cleFullMorse ? cleFullMorse + '   ' + cleCurrentLetter : cleCurrentLetter;
    cleCurrentLetter = '';
    cleRefresh();
  });

  cleAddWord.addEventListener('click', function() {
    if (!cleFullMorse && !cleCurrentLetter) return;
    if (cleCurrentLetter) {
      cleFullMorse = cleFullMorse ? cleFullMorse + '   ' + cleCurrentLetter : cleCurrentLetter;
      cleCurrentLetter = '';
    }
    cleFullMorse += '   /';
    cleRefresh();
  });

  cleClear.addEventListener('click', function() {
    cleFullMorse = '';
    cleCurrentLetter = '';
    cleMorse.textContent = '\u2014';
    cleDecoded.textContent = '\u2014';
    document.querySelectorAll('.ref-item').forEach(function(el) {
      el.classList.remove('active');
    });
  });

  function cleBuildRef() {
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split('').forEach(function(char) {
      var item = document.createElement('div');
      item.className = 'ref-item';
      item.dataset.char = char;
      var spanChar = document.createElement('span');
      spanChar.className = 'ref-char';
      spanChar.textContent = char;
      var spanCode = document.createElement('span');
      spanCode.className = 'ref-code';
      spanCode.textContent = CLE_MORSE_TABLE[char];
      item.appendChild(spanChar);
      item.appendChild(spanCode);
      cleRefGrid.appendChild(item);
    });
  }

  function cleHighlightRef(text) {
    document.querySelectorAll('.ref-item').forEach(function(el) {
      el.classList.remove('active');
    });
    text.split('').forEach(function(char) {
      var el = document.querySelector('.ref-item[data-char="' + char + '"]');
      if (el) el.classList.add('active');
    });
  }

  cleBuildRef();

}); // fin DOMContentLoaded