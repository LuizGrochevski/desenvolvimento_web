
function loaded(){
    let t = document.getElementById("titulo");

    t.addEventListener("click", mudarText);

}

function mudarText(){
    this.innerHTML = "novo Text";
}

function h1click(){
    console.log("Executando a função")
}

function changeH1(input){

    let h1 = document.getElementsByTagName("h1")[0]
    h1.innerText = input.value;

}

function hideH1(){
    let h1 = document.getElementsByTagName("h1")[0];
    h1.style.display = "none";
}

function onOver(elemento){
    elemento.style.backgroundColor = "red";
}

function onOut(elemento){
    elemento.style.backgroundColor = "darkslateblue";
}





