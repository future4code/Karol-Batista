//Exercícios de interpretação de código
//EXERCÍCIO 1
/*
a. Ela vai retornar 2 vezes de acordo com a condição, a função ainda inclui na lista o item j
Mas não haverá resultado ,pois o item adicionado ao final da lista é menor que a condição  pré-estabelecida
b. Retornará 5 vezes/ itens da condição mais o item adicionado a lista, como o valor é menor, será apresentado no começo.
c. Retornará 8 vezes/ itens da condição mais 4 itens adicionados a lista, como o valor é menor, serão apresentados no começo.
*/

//EXERCICIO 2
/* 
a.
b.
*/

//EXERCÍCIO 3
/* 
O código está fazendo operações matemáticas, uma esta multiplicando o item "A"   e o outro está somando o item "B",
poderiamos chamar de aprendendoMatematica.
*/

//Exercícios de escrita de código
//EXERCÍCIO 4
//a.
/*let comparandoIdade = function(idadeHumana){
    console.log("Equivale a: "+ idadeHumana * 7 +  " anos de cachorro")
  
  }
  comparandoIdade()*/


//b
/*function minhaLista(nome, idade, endereco, escolaridade){
    if(escolaridade===true){
      escolaridade = "sou estudante"
    }else{
      escolaridade = "não sou estudante"
    }
    return "Eu sou a "+nome+ " tenho "+idade+ " anos "+ " moro na rua "+endereco+ " eu " +escolaridade
  
  
  }
  console.log(minhaLista("Karol", 28, "Rua São Paulo, XV", true)) */



//EXERCÍCIO 5
//a.
    function transfomaAnoEmSeculo(ano){
    
    if(ano >=1000 && ano < 1101){
        seculo = "XI" 
    }else if(ano >=1101 && ano < 1200){
        seculo = "XII" 
    }
    else if(ano >=1201 && ano < 1300){
        seculo = "XIII" 
    }
    else if(ano >=1301 && ano < 1400){
        seculo = "XIV" 
    }
    else if(ano >=1401 && ano < 1500){
        seculo = "XV"
    }
    else if(ano >=1501 && ano < 1600){
        seculo = "XVI" 
    }
    else if(ano >=1601 && ano < 1700){
        seculo = "XVII" 
    }
    else if(ano >=1701 && ano < 1800){
        seculo = "XVIII" 
    }
    else if(ano >=1801 && ano < 1900){
        seculo = "XIX" 
    }
    else if(ano >=1901 && ano < 2000){
        seculo = "XX" 
    }
    else if(ano >=2001 && ano < 2100){
        seculo = "XI" 
    }
    
    return " O ano "+ ano +" pertence ao século "+ seculo 
}
console.log(transfomaAnoEmSeculo()) 

//EXERCÍCIO 6


//a 
    function quantidadesDeNumeros(lista){
    for(const elemento of lista){
        console.log(elemento)
    }
    return lista.length
}

const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
const tamanho = quantidadesDeNumeros(array)
console.log(tamanho)


//b
    function parOuImpar(numero){
        if(numero%2===0){
            return "É par"
        }else{
            return "É impar"
        }
    }
    console.log(parOuImpar(15))




//c
const numero = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
function contaElementos(lista){
    if(lista %2===0){
      return lista

    }
}

contaElementos()

//d