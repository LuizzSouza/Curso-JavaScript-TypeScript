//                          -5      -4        -3         -2        -1
//                          0        1        2          3         4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

//push
// nomes.splice(5, 0, 'Luiz')
// nomes.splice(nomes.length, 0, 'Luiz', 'Otávio', 'Miranda');
// console.log(nomes);

//unshift
nomes.splice(0, 0, 'Luiz', 'Otávio' )
console.log(nomes);

// nomes.splice(índice atual, delete, elem1, elem2, elem3);

// pop
// const removidos = nomes.splice(-1, 1);
// const removidos = nomes.splice(3, 2)
// const removidos = nomes.splice(-2, 2)
// const removidos = nomes.splice(-2, Number.MAX_VALUE)
// const removidos = nomes.splice(-2, 1)

// Shift
// const removidos = nomes.splice(0, 1)



// const removidos = nomes.splice(3, 2, 'Luiz', 'Otávio') //Adiciona elementos a partir do indice

// console.log(nomes, removidos);
