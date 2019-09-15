interface IPessoa {
    nome: string;
    sobrenome: string;
    cumprimentar: (nome: string) => string;
}

class Funcionario implements IPessoa {
    nome: string;
    sobrenome: string;
    funcao: string;
    constructor(nome: string, sobrenome: string, funcao: string) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.funcao = funcao;
    }
    cumprimentar = (nomePessoa: string): string => {
        return `Olá ${nomePessoa}, meu nome é ${this.nome} e eu sou ${this.funcao}`;
    }
    salario = (valor: number | string): void => {
        console.log(valor.valueOf());
    }
}

let programador = new Funcionario('Bruce', 'Wayne', 'Programador');

console.log(programador.cumprimentar('Daniel'));

programador.salario(99999);
programador.salario('99999');
//////////////////////////////////////////////////////////////////

interface Lua {
    nome: string;
    circunferencia: number;
}

abstract class Planeta {
    public nome: string;
    public circunferencia: number;
    public Luas: Lua[];

    constructor(nome: string, circunferencia: number, Luas: Lua[] = []) {
        this.nome = nome;
        this.circunferencia = circunferencia;
        this.Luas = Luas;
    };

    addLua = (Lua: Lua) => {
        this.Luas.push(Lua);
    };

    abstract getRotationSpeedMph: () => number;
}

class Terra extends Planeta {
    private rotationMetersPerSecond = 460;
    private metersInMile = 1609.34;
    private secondsInMinute = 60;
    private minutesInHour = 60;

    getRotationSpeedMph = () => {
        return (this.rotationMetersPerSecond * this.secondsInMinute * this.minutesInHour) / this.metersInMile;
    }
}


const terra = new Terra('Terra', 24901, [{ nome: 'Lua', circunferencia: 6786 } as Lua]);

console.log(`Oi! Meu nome é ${terra.nome} e eu estou girando a ${terra.getRotationSpeedMph().toFixed(2)} mph!`);