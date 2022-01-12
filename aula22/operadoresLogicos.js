/*
Operadores Lógicos
&& -> and -> E -> Todas as expressões precisam ser verdadeiras para retornar true
|| -> OR -> OU
! -> NOT -> NÃO
*/

console.log(true && true);
const expressaoAnd = true && true && false && false;
console.log(expressaoAnd);

// const expressaoOr = true || false;
// const expressaoOr = false || false || true || false;
const expressaoOr = false || false || false || false;
console.log(expressaoOr);

const usuario = 'Luiz'; // form usuário digitou
const senha = '123456'; // form usuário digitou

//                       true               false                  
const vaiLogar = usuario === 'Luiz' && senha === '12345';
console.log(vaiLogar);

console.log(!false);