class Post{
    constructor(nome, autor, biografia){
        this.nome = nome 
        this.autor = autor
        this.biografia= biografia
    }
}

/*const novoPost = new post()
post.nome =""
post.autor =""
post.biografia =""*/

/*let novoCachorro = new Cachorro("Mel, 7,"viraLata")
novoCachorro.latir()*/


function criarBlog(){
    let novoNome = document.getElementById("nome").value
    let novoAutor = document.getElementById("autor").value
    let novaBiografia =document.getElementById("biografia").value    
    
    const postagem = new Post(novoNome, novoAutor, novaBiografia)
    console.log(postagem)
    
    
    
    
    
    /*if(novaTarefa ="segunda"){
        const primeiroDia = document.getElementById("segunda")
        listaDeMetas.innerHTML += "<li>" + novaTarefa + "</li>"
    }else if( novaTarefa ="terca"){
        listaDeMetas.innerHTML += "<li>" + novaTarefa +"</li>"
        /*const listaDeCompras = document.getElementById("segunda")*/
    


    // input.value= " "
}