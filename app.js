
let list_numSorteado = []
let num_aleatorio = GerarnumAleatorio()
let tentativas = 1




function exibirTextoTela(tag, texto) {
  let campo = document.querySelector(tag)
  campo.innerHTML = texto
}


function exibirMensagem() {

  exibirTextoTela('h1', 'Jogo do número secreto')
  exibirTextoTela('p', 'Escolha um número entre 1 e 10')

}
    exibirMensagem()







function verificarChute() {
  let chute = document.querySelector('input').value
  if (chute == num_aleatorio) {
    exibirTextoTela('h1', 'Acertou!!')
    let palavraTentativa = tentativas > 1 ? 'tentativas ' : 'tentativa'
    exibirTextoTela('p', `Você achou o número secreto com ${tentativas} ${palavraTentativa}`)
    document.getElementById('reiniciar').removeAttribute('disabled')

  }
  else if (chute > num_aleatorio) {
    exibirTextoTela('p', `o número secreto é menor que ${chute}`)

  }
  else {
    exibirTextoTela('p', `o número secreto é maior que ${chute}`)
  }
  tentativas++
  limparCampo()

}
  function GerarnumAleatorio() {

      let num_escolhido =  parseInt(Math.random() * 10 + 1)
      let quant_elementos_lista = list_numSorteado.length

      if(quant_elementos_lista == 10){
            
          list_numSorteado = []

      }
      if(list_numSorteado.includes(num_escolhido)){

          return GerarnumAleatorio()

      }
      else{
        list_numSorteado.push(num_escolhido)
        console.log(list_numSorteado)
        return num_escolhido
      }


}

function limparCampo() {
  chute = document.querySelector('input')
  chute.value = ' '
}



function reiniciarJogo() {
  num_aleatorio = GerarnumAleatorio()
  limparCampo()
  tentativas = 1
  exibirTextoTela('h1', 'Jogo do número secreto')
  exibirTextoTela('p', 'Escolha um número entre 1 e 10')
  document.getElementById('reiniciar').setAttribute('disabled', true)
}

