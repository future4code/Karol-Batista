function criarTarefa(){
    const input = document.querySelector("input")
    const novaTarefa = input.value
    const listaDeMetas = document.querySelector("ul")
    /*const input = document.querySelector("input")
    const novaTarefa = input.value
    const diaDaSemana = select.value
    const listaDeMetas = document.getSelectorName("ul")*/
    
    const week = document.getElementById("semana").value
   
    
    input.value =""


<<<<<<< HEAD
    if(semana ="segunda"){
        const primeiroDia = document.getElementById("segunda")
        listaDeMetas.innerHTML += "<li>" + novaTarefa + "</li>"
    
    }else if( semana ="terca"){
        listaDeMetas.innerHTML += "<li>" + novaTarefa +"</li>"
        /*const listaDeCompras = document.getElementById("segunda")*/
    }
    if(semana =" quarta"){
        listaDeMetas.innerHTML += "<li>" + novaTarefa+ "</li>"
    
    }else if( semana= "quinta"){
        listaDeMetas.innerHTML +="<li>" + novaTarefa+"</li>"
    }
    if(semana ="sexta"){
        listaDeMetas.innerHTML += "<li>" + novaTarefa + "</li>"
    
    }else if( semana ="sabado"){
    
        listaDeMetas.innerHTML += "<li>" + novaTarefa + "</li>"
    }
    else{
        semana ="domingo"
        
        listaDeMetas.innerHTML += "<li>" + novaTarefa + "</li>"
    
    
    }
    input.value = " "
=======
    if(novaTarefa ="segunda"){
        const primeiroDia = document.getElementById("segunda")
        listaDeMetas.innerHTML += "<li>" + novaTarefa + "</li>"
    }else if( novaTarefa ="terca"){
        listaDeMetas.innerHTML += "<li>" + novaTarefa +"</li>"
        /*const listaDeCompras = document.getElementById("segunda")*/
    }
    if(novaTarefa =" terca"){
        listaDeMetas.innerHTML += "<li>" + novaTarefa+ "</li>"
    }else if( novaTarefa="quarta"){
        listaDeMetas.innerHTML +="<li>" + novaTarefa+"</li>"
    }
    if(novaTarefa ="quinta"){
        
        listaDeMetas.innerHTML += "<li>" + novaTarefa + "</li>"
    }else if( novaTarefa ="sexta"){
    
        listaDeMetas.innerHTML += "<li>" + novaTarefa + "</li>"
    }
    if(novaTarefa ="sabado"){
        
        listaDeMetas.innerHTML += "<li>" + novaTarefa + "</li>"
    }else if( novaTarefa ="domingo"){
        listaDeMetas.innerHTML +="<li>" + novaTarefa + "</li>"
    
    
    }




    input.value =""
>>>>>>> c37d156c857b8893597a466d08fc84331fb26398
}
