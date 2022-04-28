const board = document.querySelector('#board');
const SQUARES_NUMBER = 460;
const colors = ['red', 'blue', 'green', 'yellow', 'purple'];

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div');
  square.classList.add('square');


  square.addEventListener('mouseover', () => {
    setColor(square);
  });

  square.addEventListener('mouseleave', () => {
    removeColor(square);
  });

  board.append(square);
}

function setColor(elem) {
  const randomColor = getRandomColor();
  elem.style.backgroundColor = randomColor;
  elem.style.boxShadow = `0 0 2px ${randomColor}, 0 0 10px ${randomColor}`;
}

function removeColor(elem) {
  elem.style.backgroundColor = '#1d1d1d';
  elem.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
  let index = Math.floor(Math.random() * 5);
  return colors[index];
}



