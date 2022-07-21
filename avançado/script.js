
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

ctx.rect(10, 10, 100, 200);
ctx.fillstyle = "blue";
ctx.fillRect(10, 10, 100, 200);
ctx.lineWidth = 5;
ctx.strokeStyle = "red";
ctx.strokeRect(10, 10, 100, 200);

ctx.fill();
ctx.stroke();

ctx.clearRect(20, 20, 30, 30);

ctx.beginPath();
ctx.lineWidth = 4;
ctx.strokeStyle = "yellow";
ctx.moveTo(10, 10);
ctx.lineTo(400, 300);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 7;
ctx.strokeStyle = "cyan";
ctx.fillStyle = "green";
ctx.moveTo(50,10);
ctx.lineTo(300, 300);
ctx.lineTo(400, 300);
ctx.closePath();
ctx.fill();
ctx.stroke();



let circle = {
    x : 250,
    y : 250,
    raio : 100,
    inicio : 0,
    fim : 0,
    antiHor : true
}

function drawCircle(circle){
    /*ctx.beginPath();
    ctx.Rect(0, 0, 500, 500);
    ctx.fillStyle = "beige";
    ctx.fill();*/

    ctx.beginPath();
    ctx.strokeStyle = "lime";
    ctx.fillStyle = "purple"
    ctx.arc(circle.x, circle.y, circle.raio, circle.inicio, circle.fim, circle.antiHor);

    ctx.fill();
    ctx.stroke();
}

setInterval(function(){
     
    if(circle.fim < 2*Math.PI){
        circle.fim += 0.3;
        circle.x += 5;
    }

    drawCircle(circle);


}, 40)
