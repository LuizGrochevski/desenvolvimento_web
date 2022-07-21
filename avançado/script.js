
let jogador = document.getElementById('jogador');

let xInicial = 0;
let yInicial = 0;

function moverJogadorPara(x, y) {

    let posX = x + 'px';
    let posY = y + 'px';

    jogador.style.top = posX;
    jogador.style.left = posY;

}

setInterval(function () {

    moverJogadorPara(xInicial++, yInicial++);

}, 6000)

// CANVAS
let tela = document.getElementById('tela');

let ctx = tela.getContext("2d");
ctx.moveTo(0, 0);
ctx.lineTo(250, 250);
ctx.lineTo(500, 0);
ctx.lineWidth = 5;
ctx.strokeStyle = '#FF0000';
ctx.stroke();

