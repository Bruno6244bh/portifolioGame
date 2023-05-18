let img = new Image(); // criação do objeto imagem no javascript
img.src = './sources/character.png'; // definição do source da imagem
img.onload = function() { // função que será executada assim que o objeto "img" for carregado
    init();
}

let canvas = document.querySelector('canvas'); // referencia ao objeto "canvas" no javascript
let contexto = canvas.getContext('2d');
const escala = 1; // constante para escalar o tamanho do personagem
const largura = 48; // contante de largura do personagem
const altura = 63; //constante de altura o personagem
const escalaLargura = escala * largura; //constante que multiplica a largura com escala
const escalaAltura = escala * altura; //constante que multiplica a altura com escala
let posicaoX = 0; //variavel que define a posição do personagem no eixo x do mapa
let posicaoY = 0; //variavel que define a posição do personagem no eixo y do mapa
let velocidade = 1.5 //variavel que define a velocidade memrelação a movimentação do personagem
let up = false;
let down = false;
let right = false;
let left = false;

function desenhaQuadro(posX, posY, canvasX, canvasY) {
    // contexto.clearRect(0, 0, canvas.width, canvas.height);
    contexto.drawImage(img, posX*largura, posY*altura, largura, altura, canvasX, canvasY, escalaLargura, escalaAltura);
}

const imagens = [1, 0, 1, 2]; // vetor que define a ordem dos sprites na animação
let indiceImagem = 0; // variavel que vai buscar a posição do vetor
let contaQuadro = 0; // variavel que vai contar os sprites
let direcaoAtual = 0; // variavel que ocnta a direção dos sprites

function passo() {
    contaQuadro++;
    if(contaQuadro < 13) {
        window.requestAnimationFrame(passo);
        return;
    }
    contaQuadro = 0;
    contexto.clearRect(0, 0, canvas.width, canvas.height);
    desenhaQuadro(imagens[indiceImagem], direcaoAtual, posicaoX, posicaoY);
    indiceImagem++;
    if(indiceImagem >= imagens.length) {
        indiceImagem = 0;
    }
    window.requestAnimationFrame(passo);
}

function init() {
    window.requestAnimationFrame(passo);
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
        posicaoY -= velocidade;
        direcaoAtual = 3
    }
    if (down === true) {
        posicaoY += velocidade;
        direcaoAtual = 0
    }
    if (left === true) {
        posicaoX -= velocidade;
        direcaoAtual = 1
    }
    if (right === true) {
        posicaoX += velocidade;
        direcaoAtual = 2
    }
    requestAnimationFrame(game);
    desenhaQuadro();
}
requestAnimationFrame(game)