const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

canvas.width = 1280;
canvas.height = 736;

context.fillStyle = 'white';
context.fillRect(0, 0, canvas.width, canvas.height);

const image = new Image();
image.src = './sources/mainTileset.png';

const playerImage = new Image();
playerImage.src = './sources/runDown.png'

image.onload = () => {
context.drawImage(image, 0, 0);
context.drawImage(
playerImage, 
0,
0,
playerImage.width / 3,
playerImage.height,
canvas.width / 2 - playerImage.width / 2, 
canvas.height / 2 - playerImage.height / 2,
playerImage.width / 3,
playerImage.height,)
}

window.addEventListener('keydown', (e) => {
    console.log('keydown = ' + e.keyCode)
    switch (e.keyCode) {
        case 87:
            console.log('up')
        break;

        case 38:
            console.log('up')
        break;

        case 65:
            console.log('left')
        break;

        case 37:
            console.log('left')
        break;

        case 83:
            console.log('down')
        break;

        case 40:
            console.log('down')
        break;

        case 68:
            console.log('right')
        break;

        case 39:
            console.log('right')
        break;
    }
})
