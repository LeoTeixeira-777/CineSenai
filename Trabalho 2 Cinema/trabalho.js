function trabalho(){

    alert("Bem-vindo ao cinesenai");
    

    
    let escolha = 0
    let listaCadastro = [
        ['admin','adminsenha'],
        ['cadastro','cadastrosenha'],
        ['eu','senha']
    ]
     let listaFilme = ['Panico 5', 'Gente Grande', 'Toy Story']

    while(escolha != 4) {
     escolha = parseInt(prompt("1-Cadastra-se\n2-Login\n3-Ver Filmes\n4-Sair"));
    
    
    switch (escolha) {
        case 1 : 
            let cadastro = prompt("Qual seu email?");
            let cadastrosenha = prompt("Crie uma senha");

            for (let i = 0; i < listaCadastro.length; i++ ) {
            if (cadastro == listaCadastro[i][0]) {
                alert("Você já está cadastrado");
            }
            }
            listaCadastro.push([cadastro, cadastrosenha])
                alert("Bem-vindo ao cinesenai");
            
            break;
        case 2 : 
            let login = prompt("Qual seu email?");
            let senha = prompt("Crie uma senha");    
            let logado = false; 
          for (let i = 0; i< listaCadastro.length; i++) {
            if (login == listaCadastro[i][0] && senha == listaCadastro[i][1]) {
                alert("Você entrou, para bens");
                logado = true;
                filmeL();
                break;
            }
          }
          if (!logado) {
            alert ("Login ou senha errado");
          }
          break;
        case 3 :
            let filmeL = ""
            for ( let i =0; i< listaFilme.length; i++){
                filmeL = filmeL + listaFilme[i]+ "\n"
            }
            alert(filmeL)
        }       
    }
}   
    

    
      
    



















































































