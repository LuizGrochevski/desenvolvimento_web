
let pessoas = ["Igor", "José", "Marcos", "Pamela", "Joana"]

function sortear_pessoa(){

    let np = pessoas.length;

    let ns = Math.floor(Math.random() * np);

    document.getElementById("p").innerHTML = pessoas[ns];

}

function sortear_numero(){

    let np = 100;

    let ns = Math.round(Math.random() * np);

    document.getElementById("n").innerHTML = ns;

}

