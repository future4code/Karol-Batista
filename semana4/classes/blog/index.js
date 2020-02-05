class Post{
    constructor(nome, autor, biografia){
        this.nome = nome 
        this.autor = autor
        this.biografia= biografia
    }
}

let array = [] // monta a array 

function criarBlog(){
    let novoNome = document.getElementById("nome").value
    let novoAutor = document.getElementById("autor").value
    let novaBiografia =document.getElementById("biografia").value    
    
    const postagem = new Post(novoNome, novoAutor, novaBiografia) //instancia
    array.push(postagem)//add post no array
    console.log(array) // imprime o array
 
    //limpar os campos do formulario
    document.getElementById("nome").value = ""
    document.getElementById("autor").value = ""
    document.getElementById("biografia").value = ""
}