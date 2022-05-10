// export const nome = 'Luiz';
// export const sobrenome = 'Souza';
// export const idade = 19;
const nome = 'Luiz';
const sobrenome = 'Souza';
const idade = 19;
const cpf = '123.456.789-00';

function soma(x,y) {
    return x + y;
}

export default (x, y) => x * y;

export { nome, sobrenome, idade, soma };

// export class Pessoa {
//     constructor(nome, sobrenome) {
//         this.nome = nome;
//         this.sobrenome = sobrenome;
//     }
// }

// export { nome as nome2, sobrenome, idade, soma };