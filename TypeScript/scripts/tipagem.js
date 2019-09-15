
let num;
num = 5 + 8;
console.log(num);
let hexNum = 0xf00d;
let binaryNum = 0b1010;
let octalNum = 0o744;
console.log(`hex:${hexNum};bin:${binaryNum};oct:${octalNum};`);
let text = 'Valor da string';
console.log(text);
let verdade = true;
console.log(verdade);
let vetor = ['TypeScript', 'JavaScript', 'ECMAScript'];
vetor.forEach(e => console.log(e));
let tupla = ['minha idade', 20];
tupla.reduce((palavra, numero) => {
    console.log(`${palavra} ${numero}`);
    return 0;
});
let n = null;
let u = undefined;
console.log(n, u);
