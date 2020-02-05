class Post{
    constructor(nome, autor, biografia){
        this.nome = nome 
        this.autor = autor
        this.biografia= biografia
    }
}

const novoPost = new post()
post.nome =""
post.autor =""
post.biografia =""

/*let novoCachorro = new Cachorro("Mel, 7,"viraLata")
novoCachorro.latir()*/


function blog(nome, autor, biografia){
    let nome = getElementById("nome").value
    let autor = getElementById("autor").value
    let biografia =getElementById("biografia").value    
    const input = document.querySelector("input").value
    const novoBlog = input.value


    /*if(novaTarefa ="segunda"){
        const primeiroDia = document.getElementById("segunda")
        listaDeMetas.innerHTML += "<li>" + novaTarefa + "</li>"
    }else if( novaTarefa ="terca"){
        listaDeMetas.innerHTML += "<li>" + novaTarefa +"</li>"
        /*const listaDeCompras = document.getElementById("segunda")*/
    


    input.value= " "
}