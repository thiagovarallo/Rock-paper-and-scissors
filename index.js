const resultado = document.getElementById('resultado');
const pontos = document.getElementById('score')
var score = 0


function gerador() {
    const pcPedra = document.getElementById('pcPedra');
    const pcPapel = document.getElementById('pcPapel');
    const pcTesoura = document.getElementById('pcTesoura');
    const pcNumber = Math.floor(Math.random() * 3);

    if (pcNumber == 0) {
        pcPedra.style.display = "flex";
        pcPapel.style.display = "none";
        pcTesoura.style.display = "none";

    };
    if (pcNumber == 1) {
        pcPapel.style.display = "flex"
        pcTesoura.style.display = "none";
        pcPedra.style.display = "none";
    };
    if (pcNumber == 2 ) {
        pcTesoura.style.display = "flex"
        pcPapel.style.display = "none";
        pcPedra.style.display = "none";
    }

    return pcNumber
}

function pedra() {
    const userPedra = document.getElementById('userPedra');
    const userNumber = 0

    userPedra.style.display = "flex"
    trocarTela()
    gerador()
    verificar(userNumber)
}

function papel() {
    const userPapel = document.getElementById('userPapel');
    const userNumber = 1

    userPapel.style.display = "flex"
    trocarTela()
    gerador()
    verificar(userNumber)
}

function tesoura() {
    const userTesoura = document.getElementById('userTesoura');
    const userNumber = 2

    userTesoura.style.display = "flex"
    trocarTela()
    gerador()
    verificar(userNumber)
}

function telaVencedor() {

    const tela1 = document.getElementById('escolher');
    const tela2 = document.getElementById('vencedor')

    tela1.style.display = "none";
    tela2.style.display = "flex"
}

function trocarTela() {

    setTimeout(() => {
        telaVencedor()
    }, 900)
}

function verificar (userNumber) {

    


    
    if (userNumber == 0) {
        switch (gerador()) {
            case 0:
                resultado.innerHTML = "Empatou"
                setTimeout(() => {
                    score = score + 5;
                    pontos.innerHTML = score
                }, 950)
                break;
            case 1:
                resultado.innerHTML = "Perdedor"
                setTimeout(() => {
                    score = score - 5;
                    pontos.innerHTML = score
                }, 950)
                break
            case 2:
                resultado.innerHTML = "Ganhador"
                setTimeout(() => {
                    score = score + 10;
                    pontos.innerHTML = score
                }, 950)
                break            
        }
    }
    if (userNumber == 1) {
        switch (gerador()) {
            case 0:
                resultado.innerHTML = "Ganhador"
                setTimeout(() => {
                    score = score + 10;
                    pontos.innerHTML = score
                }, 950)
                break;
            case 1:
                resultado.innerHTML = "Empatou"
                setTimeout(() => {
                    score = score + 5;
                    pontos.innerHTML = score
                }, 950)
                break;
            case 2:
                resultado.innerHTML = "Perdedor"
                setTimeout(() => {
                    score = score - 5;
                    pontos.innerHTML = score
                }, 950)
                break;
        }
    }
    if (userNumber == 2) {
        switch (gerador()) {
            case 0:
                resultado.innerHTML = "Perdedor"
                setTimeout(() => {
                    score = score - 5;
                    pontos.innerHTML = score
                }, 950)
                break;
            case 1: 
                resultado.innerHTML = "Ganhador"
                setTimeout(() => {
                    score = score + 10;
                    pontos.innerHTML = score
                }, 950)
                break
            case 2: 
                resultado.innerHTML = "Empatou"
                setTimeout(() => {
                    score = score + 5;
                    pontos.innerHTML = score
                }, 950)
                break
        }
    }
}




function tentarNovamente() {
    const userPedra = document.getElementById('userPedra');
    const tela1 = document.getElementById('escolher');
    const tela2 = document.getElementById('vencedor')
    const userPapel = document.getElementById('userPapel');
    const userTesoura = document.getElementById('userTesoura');


    tela2.style.display = "none";
    tela1.style.display = "flex";
    userPedra.style.display = "none";
    userPapel.style.display = "none";
    userTesoura.style.display = "none";

}

function opemModal() {
    const modal = document.getElementById('modal');
    const closeModal = document.getElementById('closeModal');

    modal.style.display = "flex";
    closeModal.addEventListener('click', () => {
        modal.style.display = "none"
    })

}