class Despesa{
    constructor(valor, tipo, descricao){
        this.valor =valor
        this.tipo= tipo
        this.descricao = descricao
    }
}

let array = [] // monta a array 

function novaDespesa(){
    let valor = document.getElementById("valor").value
    let descricao = document.getElementById("descricao").value
    let tipo = document.getElementById("tipo").value    
    const controlarGastos = new Despesa(valor,tipo,descricao) //instancia
    array.push(controlarGastos)//add post no array
    console.log(array) // imprime o array
 
    //limpar os campos do formulario
    document.getElementById("valor").value = "" 
    document.getElementById("descricao").value = ""
    document.getElementById("tipo").value = ""
    //chamando a função para o botao
    // inserirGastos(novoCadastro,consumoMesAgua, consumoMesLuz, consumoMesCompras, outrasDespesas)
}

function inserirGastos(novoCadastro,consumoMesAgua, consumoMesLuz, consumoMesCompras, outrasDespesas){
    document.getElementById("conteudo").innerHTML += 
    "<article><h3>" + novoCadastro+"</h3>" +
    "<h3>" + consumoMesAgua+"</h3>" +
    "<h3>" + consumoMesLuz+"</h3>" +
    "<h3>"+consumoMesCompras + 
    "<h3>" + outrasDespesas+"</article></h3>"
}