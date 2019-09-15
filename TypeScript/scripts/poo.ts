interface IPessoa{
    nome:string;
    sobrenome:string;
    cumprimentar:(nome:string)=>string;
}

class Funcionario implements IPessoa{
    nome:string;
    sobrenome:string;
    funcao:string;
    constructor(nome:string , sobrenome:string,funcao:string){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.funcao = funcao;
    }
    cumprimentar = (nomePessoa:string):string=>{
        return `Olá ${nomePessoa}, meu nome é ${this.nome} e eu sou ${this.funcao}`;
    }
    salario = (valor:number | string ):void=>{
        console.log(valor.valueOf());
    }
}

let programador = new Funcionario('Bruce','Wayne','Programador');

console.log(programador.cumprimentar('Daniel'));

programador.salario(99999);
programador.salario('99999');

