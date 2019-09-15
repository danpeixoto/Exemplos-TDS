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
class Planeta {
    constructor(nome, circunferencia, Luas = []) {
        this.addLua = (Lua) => {
            this.Luas.push(Lua);
        };
        this.nome = nome;
        this.circunferencia = circunferencia;
        this.Luas = Luas;
    }
    ;
}
class Terra extends Planeta {
    constructor() {
        super(...arguments);
        this.rotationMetersPerSecond = 460;
        this.metersInMile = 1609.34;
        this.secondsInMinute = 60;
        this.minutesInHour = 60;
        this.getRotationSpeedMph = () => {
            return (this.rotationMetersPerSecond * this.secondsInMinute * this.minutesInHour) / this.metersInMile;
        };
    }
}
const terra = new Terra('Terra', 24901, [{ nome: 'Lua', circunferencia: 6786 }]);
console.log(`Oi! Meu nome é ${terra.nome} e eu estou girando a ${terra.getRotationSpeedMph().toFixed(2)} mph!`);
