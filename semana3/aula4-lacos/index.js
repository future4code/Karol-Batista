// Exercícios de interpretação de código
/*
EXERCÍCIO 1
O código está adicionando o valor na variável soma, depois de conferir se o i é menor que numero estabelecido, que no caso é 15 .
O resultado do código 105

*/

//EXERCÍCIO 2
/* 
a. Adiciona um item no final da lista
b. 10,15,25,30
c. 3 - [12, 15, 18, 21, 27, 30] 4 - [12]

*/

//Exercícios de escrita de código
//a
const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let maior = arrayOriginal[0]
let menor = arrayOriginal[0]

for(let i = 0; i < 7 ; i++) {
    const item = array[i]

    if(item > maior) {
        maior = item
    }else if(item < maior){

    }
}

console.log(maior)
console.log(menor)

//b
const arrayOriginal =[80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
const novaArray = []
const divisao = 10
for(const numero of arrayOriginal){
    if(numero%divisao === 0) {
      novaArray.push(numero)
    }
  }
  console.log(novaArray)
//c

