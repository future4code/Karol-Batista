import comprarCarta from './naoMexer.js'
// NÃO REMOVA ESTA LINHA

/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
const cartaJogador1 = comprarCarta(); 
const cartaJogador2 = comprarCarta(); 
const cartaMaquina1 = comprarCarta(); 
const cartaMaquina2 = comprarCarta(); 

let pontuacaoJogador = cartaJogador1.valor + cartaJogador2.valor
let pontucaoMaquina = cartaMaquina1.valor + cartaMaquina2.valor
console.log("Bem vindo ao jogo")

if(confirm("Deseja jogar uma rodada?")){
   console.log("Jogador - cartas: "+ cartaJogador1.texto + cartaJogador2 + " - pontuação "+ pontuacaoJogador);
   console.log("Maquina - cartas: " + cartaMaquina1.texto + cartaMaquina2.texto + " - pontuação " + pontucaoMaquina);
}else{
	console.log("O jogo acabou")
  
}

