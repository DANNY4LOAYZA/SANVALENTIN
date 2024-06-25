const buttonNo = document.querySelector('#no');
const buttonYes = document.querySelector('#yes');
const messageDisplay = document.querySelector('#message');

let fontSize = 2;

let messages = [
    '¿Estás segura?',
    'Piénsalo bien',
    'Piénsalo muy bien',
    'Piénsalo',
    'Mira el otro botón',
    'No lo hagas',
    'Tal vez más tarde',
    'Puede que sí, puede que no',
    'La decisión es tuya',
    'Escoge con el corazón',
    'Haz lo que sientas',
    'Sigue tu instinto',
    'Elige con cuidado',
    'Confía en ti misma',
    '¿Estás lista?',
    'Tómate tu tiempo',
    'Analízalo con calma',
    'Todo saldrá bien',
    'No te preocupes',
    'Estoy aquí para ti'
  ];
  

buttonNo.addEventListener('click', () => {
  fontSize += 0.5;
  buttonYes.style.fontSize = `${fontSize}rem`;

  const indexRandom = Math.floor(Math.random() * messages.length);
  buttonNo.textContent = messages[indexRandom];
});

buttonYes.addEventListener('click', () => {
  messageDisplay.style.display = 'flex';
});
