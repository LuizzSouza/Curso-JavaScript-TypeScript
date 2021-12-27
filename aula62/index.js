// Valor por referência
//                          0         1        2          3          4
// const nomes = ['Eduardo', 'Maria', 'Joana', 'Wallace', 'Rosana'];

//Strings , Objetos, Funções, Numeros
//const nomes = new Array('Eduardo', 'Maria', 'Joana');
// nomes[2] = 'João';
// delete nomes[2];
// const novo = [...nomes];

// novo.pop()
// console.log(nomes);
// console.log(novo);

//console.log(nomes.length);

// const removido = nomes.pop(); //remove do final
// console.log(nomes, removido);

// const removido = nomes.shift(); //remove do começo
// console.log(nomes, removido);

// nomes.push('João'); //adiciona elementos no final do array
// nomes.push('Wallace');
// console.log(nomes);

// nomes.unshift('João'); //adiciona elementos no inicio do array
// nomes.unshift('Wallace');
// console.log(nomes);

// const novo = nomes.slice(1, -2)
// console.log(novo);

// const nome  = 'Luiz Otavio Miranda';
// const nomes = nome.split(' '); // separar o nome em arrays
const nomes = ['Luiz', 'Otavio', 'Miranda'];
const nome = nomes.join(' '); //unir os arrays em um nome

console.log(nome);