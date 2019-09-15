export { };//transforma o script em um módulo
let num: number;
num = 5 + 8;
console.log(num);

let hexNum: number = 0xf00d;
let binaryNum: number = 0b1010;
let octalNum: number = 0o744;
console.log(`hex:${hexNum};bin:${binaryNum};oct:${octalNum};`);

let text: string = 'Valor da string';
console.log(text)

let verdade: boolean = true;
console.log(verdade);

let vetor: Array<string> = ['TypeScript', 'JavaScript', 'ECMAScript'];
vetor.forEach(e => console.log(e));

let tupla: [string, number] = ['minha idade', 20];
tupla.reduce((palavra, numero) => {
    console.log(`${palavra} ${numero}`);
    return 0;
});

let n: null = null;
let u: undefined = undefined;
console.log(n, u);