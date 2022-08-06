
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
let usuariosPromises = ["Gina", "Herry", "Rony", "Hermione"];

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

// inserirUsuarioPromises("Hermione").then(listarUsuariosPromises).catch((error) => { console.log(error.msg) });

// ASYNC
async function executar() {

    await inserirUsuarioPromises('Edwiges');
    listarUsuariosPromises();

}
executar();

// FILTER
function novoAluno(nome, idade) {
    return { nome, idade }
}

let alunos = [
    novoAluno("Luna Lovegood", 12),
    novoAluno("Cedrico Diggory", 17),
    novoAluno("Draco Mlfoy", 14),
    novoAluno("Herry Potter", 14),
];

function temMenosDe14(alunos) {
    return alunos.idade < 14
}
function temMaisDe14(alunos) {
    return alunos.idade > 14
}
function tem14(alunos) {
    return alunos.idade == 14
}

function filtro(callback) {

    let alunosFiltrados = [];
    for (let aluno of alunos) {
        if (callback(aluno)) {
            alunosFiltrados.push(aluno);
        }
    }

    return alunosFiltrados;

}

console.log(filtro(temMenosDe14))
console.log(filtro(temMaisDe14))
console.log(filtro(tem14))

// MAP

function novoProfessor(nome, idade) {
    return { nome, idade }
}

let professor = [
    novoProfessor("Alvo Percival Wulfrico Brian Dumbledore", 141),
    novoProfessor("Severo Prince Snape", 62),
    novoProfessor("Minerva McGonagall", 87),
    novoProfessor("Rúbeo Hagrid", 94),
]

function nomeIdade(professor) {
    return {
        nome: professor.nome,
        idade: professor.idade,
    };
}

console.log(professor.map(nomeIdade));


// ATRIBUIÇÃO POR REFERENCIA
let alunoA = { nome: "Hermione", idade: "14" };
let alunoB = alunoA
alunoB.idade = 25;

let turma1 = ["Herry", "Rony", "Hermione"];
let turma2 = turma1;
turma2.push("Simias");

// ATRIBUIÇÃO POR VALOR
let idadeA = 15;
let idadeB = idadeA;
idadeB = 10;

let turmaA = ["Gryffindor", "Hufflepuff", "Ravenclaw",];
let turmaB = turmaA.slice(); //[...turmaA];
turmaB.push("Slytherin");

// REDUCE
function novosProfessores(nome, idade) {
    return { nome, idade }
}

let professores = [
    novosProfessores("Alvo Percival Wulfrico Brian Dumbledore", 141),
    novosProfessores("Severo Prince Snape", 62),
    novosProfessores("Minerva McGonagall", 87),
    novosProfessores("Rúbeo Hagrid", 94),
]

function idadeDosProfessores(total, professores) {
    return total + professores.idade;
}

console.log(professores.reduce(idadeDosProfessores, 0));

function nomeDosProfessores(nomezao, professores) {
    return nomezao + professores.nome;
}

console.log(professores.reduce(nomeDosProfessores, ""));

