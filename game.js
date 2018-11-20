// Minimum positions of visual elements
const MIN_X_POS = 10;
const MAX_X_POS = 261;
const MIN_Y_POS = 5;
const MAX_Y_POS = 135.5;

let visualElements = {
  mario: {
    position: {
      x: MIN_X_POS,
      y: MIN_Y_POS
    }
  },
  coin: {
    position: {
      x: MIN_X_POS,
      y: MIN_Y_POS
    }
  },
  score: {
    value: 0,
    color: '#e0710f'
  }
};

let imgBoard;
let imgMario;
let imgCoin;

function main() {
  drawBoard();
  drawMario();
  drawCoin();
  drawScore();
  winCoin();
}

function start() {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  loadImages();
  visualElements.coin.position = getCoinPosition();
}

function loadImages() {
  imgBoard = new Image();
  imgBoard.src = "img/board.png";
  imgMario = new Image();
  imgMario.src = "img/mario.png";
  imgCoin = new Image();
  imgCoin.src = "img/coin.png";
}

function drawBoard() {
  /**
   * function drawImage
   * params {sourceImage, xOrigin, yOrigin, imgRealWidth, imgRealHeight, xPosition, yPosition, width, height}
   **/
  ctx.drawImage(imgBoard, 0, 0, 300, 150);
}

function drawMario() {
  ctx.drawImage(
    imgMario,
    visualElements.mario.position.x,
    visualElements.mario.position.y,
    15,
    10
  );
}

function drawCoin() {
  ctx.drawImage(
    imgCoin,
    visualElements.coin.position.x,
    visualElements.coin.position.y,
    15,
    10
  );
}

function drawScore() {
  ctx.font = '30px impact';
  // Score color varies according to the score obtained
  if (visualElements.score.value < 20 && visualElements.score.value > 10) {
    visualElements.score.color = '#cecece'
  } else if (visualElements.score.value >= 20) {
    visualElements.score.color = '#ffd105'
  }
  ctx.fillStyle = visualElements.score.color;
  ctx.fillText (`${visualElements.score.value}`, 140, 80);
}

function getCoinPosition() {
  // Coin position is random
  // position in x and y cords. are 10 y 5 respectively
  // a whole random number between 0 and 10 is added
  // in x coord is multiplid by 29 (29 represents increment value for each)
  // possible coin position, in y coord is 14.5

  let x = MIN_X_POS + Math.floor(Math.random() * 10) * 29;
  let y = MIN_Y_POS + Math.floor(Math.random() * 10) * 14.5;

  // If the coin position is the same that mario, it recalculate coin position
  if (
    x === visualElements.mario.position.x &&
    y === visualElements.mario.position.y
  ) {
    getCoinPosition();
    return;
  }
  return { x, y };
}

function winCoin() {
  if (
    visualElements.mario.position.x === visualElements.coin.position.x &&
    visualElements.mario.position.y === visualElements.coin.position.y
  ) {
    visualElements.score.value += 1;
    visualElements.coin.position = getCoinPosition();
  }
}

// MAIN BUCLE
const FPS = 50;
setInterval(function() {
  main();
}, 1000 / FPS);
