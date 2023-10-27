const meuNome = document.querySelector('.meu-nome');
const fName = meuNome.innerHTML;
const botaoVerMais = document.querySelector('button');
const habilidades = document.querySelectorAll('.escondido');
const node = document.querySelector('#fundo')
meuNome.innerHTML='';

function cliqueVer (e) {
    habilidades.forEach( (elemento) => {
        if (elemento.classList.contains('escondido')) {
            elemento.classList.remove('escondido');
            elemento.classList.add('visivel');
            botaoVerMais.innerHTML = 'Less';
        } else {
            elemento.classList.add('escondido');
            elemento.classList.remove('visivel');
            botaoVerMais.innerHTML = 'More';
        }
    } )
}

function seeMore (e) {
    habilidades.forEach( (elemento) => {
        if (elemento.classList.contains('hidden')) {
            elemento.classList.remove('hidden');
            elemento.classList.add('visible');
            botaoVerMais.innerHTML = 'LESS';
        } else {
            elemento.classList.add('hidden');
            elemento.classList.remove('visible');
            botaoVerMais.innerHTML = 'MORE';
        }
    } )
}



function maisHabilidades (elemento) {
    elemento.addEventListener('click', cliqueVer)
}

function typeWriter (nome) {
    setTimeout( () => {
    const meuNomeF = nome.split('');
    meuNome.innerHTML='';
    meuNomeF.forEach( (letra, index) => {
        setTimeout(function (){
            meuNome.innerHTML += letra;
        }, 150 * index)
    })}, 1500)
    
}

/* typeWriter(fName); */
maisHabilidades(botaoVerMais);