function verificaChuteValido(chute) {
    const numero = +chute

    if(chuteInvalido(numero)){
        elementoChute.innerHTML+= `<div id="ValorInvalido">Valor Inválido</div>`
        return
    }

    if (numeroMaiorOuMenorPermitido(numero)) {
        elementoChute.innerHTML += `<div id="ValorInvalidoMens">O número precisa estar entre ${menorValor} e ${maiorValor}</div>`
    }

    if(numero === numeroSecreto){
        document.body.innerHTML = `
        <h2 class = "acertou"> Você acertou !!! </h2>
        <h3 class = "acertou"> O número secreto era ${numeroSecreto} </h3>
        <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `
        return
    } else if (numero > numeroSecreto){
        elementoChute.innerHTML += `
        <div class="dica">O Numero secreto é menor <i class="fa-solid fa-turn-down"></i></div>
        `
    } else {
        elementoChute.innerHTML += `
        <div class="dica">O Número secreto é maior <i class="fa-solid fa-turn-up"></i></div>
        `
    }
}

function chuteInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroMaiorOuMenorPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e =>{
    if(e.target.id == 'jogar-novamente'){
        window.location.reload();
    }
})