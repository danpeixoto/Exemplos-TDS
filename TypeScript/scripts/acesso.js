class contaBancaria {
    constructor(saldo = 0, nome) {
        this._saldo = saldo;
        this.nome = nome;
    }
    ;
    get saldo() {
        return this._saldo;
    }
    ;
    set saldo(valor) {
        this._saldo += valor;
    }
    ;
    sacarDinheiro(qnt) {
        if (this.saldo - qnt >= 0) {
            this.saldo = -qnt;
            return qnt;
        }
        return 0;
    }
    ;
    dizerSegredo() {
        console.log('1+1=3');
    }
}
const minhaConta = new contaBancaria(1500, 'Daniel');
minhaConta.sacarDinheiro(1000);
console.log(minhaConta.saldo);
//minhaConta.dizerSegredo(); // ERRO: função privada e só pode ser acessivel pela classe.
