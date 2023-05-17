let img = new Image();
img.src = './sources/character.png';
img.onload = function() {
    init();
}

let canvas = document.querySelector('canvas');
let contexto = canvas.getContext('2d');
const escala = 1;
const largura = 48;
const altura = 63;
const escalaLargura = escala * largura;
const escalaAltura = escala * altura;

function desenhaQuadro(posX, posY, canvasX, canvasY) {
    contexto.drawImage(img, posX*largura, posY*altura, largura, altura, canvasX, canvasY, escalaLargura, escalaAltura);
}

const imagens = [1, 0, 1, 2];
let indiceImagem = 0;
let contaQuadro = 0;
let direcaoAtual = 0;

function passo() {
    contaQuadro++;
    if(contaQuadro < 13) {
        window.requestAnimationFrame(passo);
        return;
    }
    contaQuadro = 0;
    contexto.clearRect(0, 0, canvas.width, canvas.height);
    desenhaQuadro(imagens[indiceImagem], direcaoAtual, 0, 0);
    indiceImagem++;
    if(indiceImagem >= imagens.length) {
        indiceImagem = 0;
        direcaoAtual++;
    }
    if(direcaoAtual >= 4) {
        direcaoAtual = 0;
    }
    window.requestAnimationFrame(passo);
}

function init() {
    window.requestAnimationFrame(passo);
}