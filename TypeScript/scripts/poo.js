class Funcionario {
    constructor(nome, sobrenome, funcao) {
        this.cumprimentar = (nomePessoa) => {
            return `Olá ${nomePessoa}, meu nome é ${this.nome} e eu sou ${this.funcao}`;
        };
        this.salario = (valor) => {
            console.log(valor.valueOf());
        };
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.funcao = funcao;
    }
}
let programador = new Funcionario('Bruce', 'Wayne', 'Programador');
console.log(programador.cumprimentar('Daniel'));
programador.salario(99999);
programador.salario('99999');
