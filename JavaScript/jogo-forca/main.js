

const PALAVRA = Array.from('Homem-Aranha'.toLowerCase());
const letrasDescobertas = [];
var vidas = 6;

function clickHandler(elemento) {
    const idLetra = elemento.id;
    elemento.style.display = 'none';
    if (PALAVRA.includes(idLetra)) {

        document.querySelectorAll(`#segredo_${idLetra}`).forEach(letra => {
            letra.innerHTML = idLetra;
        });
        letrasDescobertas.push(idLetra);
    } else {
        vidas--;
        document.getElementById('imagem').src =`./assets/${vidas}.png`;
    }
    checar();
}



function checar() {
    if (vidas <= 0) {
       setTimeout(criarJogoPerdido , 250);//executa após 500 ms
    }

    //indexOf retorna -1 se nao encontra o elemento dentro do array
    //.every checa se a função dentro retorna sempre true , se sim retorna true se nao false
    if (PALAVRA.every(elem => letrasDescobertas.indexOf(elem) > -1)) {
        setTimeout(criarJogoGanho , 250);
    }
}


const reset = ()=>{
    const tela = document.querySelector('.main-container');
    const li = document.createElement('li');
}


const criarJogoGanho = function () {

    const tela = document.querySelector('.main-container');
    const elementos = document.querySelectorAll('.main-container > *');
    elementos.forEach(e => {

        e.style.display = 'none';
    });

    const h1 = document.createElement('h1');
    h1.className = 'fim-jogo';
    h1.innerHTML = 'Você Ganhou!';

    tela.appendChild(h1);

    //jogarNovamente();
}

const criarJogoPerdido = function () {
    const tela = document.querySelector('.main-container');
    const elementos = document.querySelectorAll('.main-container > *');
    elementos.forEach(e => {

        e.style.display = 'none';
    });

    const h1 = document.createElement('h1');
    h1.className = 'fim-jogo';
    h1.innerHTML = 'Você Perdeu!';

    tela.appendChild(h1);

    //jogarNovamente();
}



const criarAlfabeto = () => {
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'
    ];

    const myButtons = document.querySelector('.main-container');
    const letters = document.createElement('ul');
    const hr = document.createElement('hr');
    myButtons.append(hr);
    alphabet.forEach(letra => {
        letters.id = 'alphabet';
        var list = document.createElement('li');
        list.id = letra;
        list.innerHTML = letra;
        list.setAttribute('onclick', 'clickHandler(this)');
        myButtons.appendChild(letters);
        letters.appendChild(list);
    });

};



const criarPalavra = () => {
    const tela = document.querySelector('.main-container');
    const segredo = document.createElement('ul');
    segredo.className = 'segredo';
    PALAVRA.forEach(letra => {
        const list = document.createElement('li');

        if (letra === ' ' || letra === '-') {
            list.innerHTML = letra;
            list.className = 'espacoSegredo';
            letrasDescobertas.push(letra);
        } else {
            list.className = 'letraSegredo';
            list.id = `segredo_${letra}`;
            list.innerHTML = ' ';
        }
        tela.appendChild(segredo);
        segredo.appendChild(list);
    });
};

criarPalavra();
criarAlfabeto();
