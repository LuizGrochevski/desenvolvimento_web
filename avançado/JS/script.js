
function speakGeneric() {
    console.log(this.sound)
}

let dog = {
    sound: "Au Au",
    speak: speakGeneric
}

let cat = {
    sound: "Miau",
    speak: speakGeneric
}

dog.speak();
cat.speak();

let bindedFunction = speakGeneric.bind(dog);

bindedFunction();

// Arrow Functions
let dodro = x => 2 * x;

let dobro = function () {
    return 2 * x;
}

console.log(dodro(8));

// Callback
let usuariosCallback = ["Igor", "Marcia", "José"];

function inserirUsuarioCallback(nome, callback) {

    let promise = new Promise(function (resolve, reject) {

    });


    setTimeout(() => {
        usuariosCallback.push(nome);
        callback();
    }, 1000);
}

function listarUsuariosCallback() {
    console.log(usuariosCallback);
}

inserirUsuarioCallback("Luiz", listarUsuariosCallback);

// Promises
let usuariosPromises = ["Gina", "Rony", "Carlinhos"];

function inserirUsuarioPromises(nome, callback) {

    let promise = new Promise(function (resolve, reject) {
        setTimeout(() => {
            usuariosPromises.push(nome);

            let error = false;

            if (!error) {
                resolve();
            } else {
                reject({ msg: "Erro generico" })
            }

        }, 1000);
    });

    return promise;

}

function listarUsuariosPromises() {
    console.log(usuariosPromises);
}

inserirUsuarioPromises("Hermione").then(listarUsuariosPromises).catch((error) => { console.log(error.msg) });


