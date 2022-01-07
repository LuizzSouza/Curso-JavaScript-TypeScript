// Filter -> sempre retornar um array, com a mesma quantidade de elementos ou menos
// Retorne os números maiores que 10
//               0   1   2  3  4  5  6  7  8   9  10  11  12
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// método 1:
// function callbackFilter(valor) {
//     return valor > 10;
// }
// const numerosFiltrados = numeros.filter(callbackFilter);

// método 2:
// const numerosFiltrados = numeros.filter(function(valor) {
//     return valor > 10;
// });

// método 3(filter completo):
// const numerosFiltrados = numeros.filter((valor, indice, array) => {
    //     console.log(valor, indice, array);
    //     return valor > 10; 
    // });
 
//método 4:    
const numerosFiltrados = numeros.filter(valor => valor > 10 ); //tooop :D

console.log('Numeros maiores que 10: ', numerosFiltrados);




// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Leticia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];
// const pessoasComNomeGrande = pessoas.filter(function(obj){
//     return obj.nome.length >= 5;
// });

const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);
console.log('Pessoas que tem o nome com 5 letras ou mais: ', pessoasComNomeGrande);


const pessoasComMaisDe50Anos = pessoas.filter(obj => obj.idade > 50);
console.log('Pessoas com mais de 50 anos: ', pessoasComMaisDe50Anos);

const nomeTerminaComA = pessoas.filter(obj => {
    return obj.nome.toLowerCase().endsWith('a');
});
console.log('Pessoas cujo nome termina com "a": ', nomeTerminaComA);