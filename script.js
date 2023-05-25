let img = new Image(); // criação do objeto imagem no javascript
img.src = './sources/character.png'; // definição do source da imagem
img.onload = function() { // função que será executada assim que o objeto "img" for carregado
    init();
}

let canvas = document.querySelector('canvas'); // referencia ao objeto "canvas" no javascript
let context = canvas.getContext('2d');
const escale = 1; // constant to scale character's size
const Width = 48; // character's width
const Height = 63; // character's height
const escaleWidth = escale * Width;
const escaleHeight = escale * Height;
let positionX = 0; //variable that define character's position on the X axis
let positionY = 0; //variable that define character's position on the Y axis
let speed = 1.5 //variable that defines character's speed

//variables above define character's current direction 
let up = false;
let down = false;
let right = false;
let left = false;

function drawFrames(posX, posY, canvasX, canvasY) {
    // context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(img, posX*Width, posY*Height, Width, Height, canvasX, canvasY, escaleWidth, escaleHeight);
}

const images = [1, 0, 1, 2]; // sprites's order in spritesheet to animation
let indexImage = 0; // array position
let countingFrames = 0; // scoring position in spritesheet
let currentDirection = 0; // sprite direction

function step() {

    countingFrames++;
    if(countingFrames < 13) {
        window.requestAnimationFrame(step);
        return;
    }
    countingFrames = 0;
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawFrames(images[indexImage], currentDirection, positionX, positionY);
    indexImage++;
    if(indexImage >= images.length) {
        indexImage = 0;
    }
    window.requestAnimationFrame(step);
}

function init() {
    window.requestAnimationFrame(step);
}

window.addEventListener('keydown', (event) => {
    if (event.keyCode === 37) {
        left = true;
    } else if (event.keyCode === 39) {
        right = true;
    } else if (event.keyCode === 38) {
        up = true
    } else if (event.keyCode === 40) {
        down = true;
    } 
} )

window.addEventListener('keyup', (event) => {
    if (event.keyCode === 37) {
        left = false;
    } else if (event.keyCode === 39) {
        right = false;
    } else if (event.keyCode === 38) {
        up = false
    } else if (event.keyCode === 40) {
        down = false;
    }
} )

const game = () => {
    if (up === true) {
        positionY -= speed;
        currentDirection = 3
    }
    if (down === true) {
        positionY += speed;
        currentDirection = 0
    }
    if (left === true) {
        positionX -= speed;
        currentDirection = 1
    }
    if (right === true) {
        positionX += speed;
        currentDirection = 2
    }
    requestAnimationFrame(game);
    drawFrames();
}
requestAnimationFrame(game)



