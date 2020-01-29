//Exercícios de interpretação de código
//EXERCÍCIO 1
/*
O código pede para o usuário inserir um número, o código testa se os números
são divisíveis por 2
Ele imprime a mensagem "Passou no teste" quando o usuário informa um número par
Ele imprime a mensagem "Não passou no teste" quando o usuário informa um número ímpar.
*/

//EXERCÍCIO 2
/* 
a. Ele serve para comparar uma opção da variável com o que estiver no case, 
é uma forma de simplificar o código.
b. O preço da fruta é R$5,00
c. O valor da compra seria R$24,55, já que a banana não consta no código
d.O preço da fruta  Pêra  é  R$  5
*/

//EXERCÍCIO 3
/*
Será exibido mensagem is not defined, sim há um erro. No código do exercício a condição está
declarada fora do bloco/escopo do pai. Sendo assim ele não consegue acessar a variável
Quando chamamos a condição dentro do bloco, o código roda normalmente.
*/
//Exemplo corrigido do exercício
const numero1 = prompt("Digite o primeiro número.")
const numero2 = prompt("Digite o próximo número?")

if(numero1 > 0 && numero2 > 0) {
  let mensagem
  if(numero1 > numero2) {
    mensagem = "Número 1 é maior que o 2!"
  } else {
    mensagem = "Número 1 é menor ou igual ao 2!"
  }
console.log(mensagem)
}
//

//EXERCÍCIOS DE ESCRITA DE CÓDIGO
//4
const n1 = Number(prompt("Digite o primeiro número."))
const n2 = Number(prompt("Digite o próximo número?"))


if (n1 > n2){
  console.log(n1,  n2)
}
else if(n1===n2){
  console.log("Digite numeros diferentes")
  
}else{
  console.log(n2, n1)
}
let n3 = Number(prompt("Digite outro numero"))
console.log(n3)

//

//5
/*
a.

*/
//b
const animal = prompt("Informe se o animal possui: pêlos, penas ou se o animal possui ossos");
switch(animal){
case "Com pêlos":
console.log("mamífero")
break;
case "Sem pêlos":
console.log("Mamífero humano")
break;
case "Penas":
console.log("Ave")
break;
case "Sem penas":
console.log("peixe")
break;
case "Com ossos":
console.log("Vertebrados")
break;
case "Sem ossos":
console.log("Invertebrados")
break;
