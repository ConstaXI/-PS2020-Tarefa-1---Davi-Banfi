//Referente  Universidade

let CJM = {
    nome: "Engenharia da Computação",
    carga: 3630,
    periodos: 10
}

let EJM = {
    nome: "Engenharia Elétrica",
    carga: 3630,
    periodos: 10
}

let SJM = {
    nome: "Sistemas de Informação",
    carga: 3000,
    periodos: 8
}

let Campus0 = {
    nome: "ICEA",
    cursos: [CJM, SJM, EJM]
}

let Universidade = {
    nome: "Universidade Federal de Ouro Preto",
    cnpj: "23.070.659/0001-10",
    campus: [Campus0] //Vetor de 1 elemento
}

//Referente a Pessoas

let Pessoa0 = {
    nome: "André",
    idade: 32,
    cpf: "15587276598",

    checarIDs: function (nome, idade) {
        if(idade >= 18) {
            return (nome + " vai beber cerveja.");
        } else {
            return (nome + " vai beber coca-cola.");
        }
    }
}

let Pessoa1 = {
    nome: "Pedro",
    idade: 20,
    cpf: "12887244591",
    curso: Universidade.campus[0].cursos[0]
}

let Pessoa2 = {
    nome: "Ana",
    idade: 17,
    cpf: "85946370101",
    curso: Universidade.campus[0].cursos[0]
}

//Referente a Repúblicas

let Rep0 = {
    nome: "Catafractários",
    trote: false,
    moradores: [Pessoa1, Pessoa2]
}

let Rep1 = {
    nome: "Legionários",
    trote: true,
    moradores: []
}

//Main

console.log(Pessoa0, Pessoa1, Pessoa2);
console.log(Pessoa0.checarIDs(Pessoa2.nome, Pessoa2.idade));