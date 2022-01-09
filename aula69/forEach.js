const a1 = [10, 20, 30];

// for(let valor of a1 ) {
//     console.log(valor);
// }

// a1.forEach(valor => console.log(valor))
let total = 0;
a1.forEach(valor => {
    total += valor;
});
console.log(total);