const board = document.querySelector('#board');
const SQUARES_NUMBER = 460;
const colors = ['red', 'blue', 'green', 'yellow', 'purple'];

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div');
  square.classList.add('square');


  square.addEventListener('mouseover', setColor);

  square.addEventListener('mouseleave', removeColor);

  board.append(square);
}

function setColor(event) {
  const elem = event.target;
  const randomColor = getRandomColor();
  elem.style.backgroundColor = randomColor;
  elem.style.boxShadow = `0 0 2px ${randomColor}, 0 0 10px ${randomColor}`;
}

function removeColor(event) {
  const elem = event.target;
  elem.style.backgroundColor = '#1d1d1d';
  elem.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * 5)];
}



