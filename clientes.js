
let vetor = [];

const cadastrar = () => {

    // Obter elementos do input 
    let nome = document.getElementById("nome");
    let idade = document.getElementById("idade");
    let cidade = document.getElementById("cidade");
    let tabela = document.getElementById("tabela");

    // Criar objeto 
    let obj = {
        "nome" : nome.value,
        "idade" : idade.value,
        "cidade" : cidade.value

    }

    vetor.push(obj);

 const campo = () => {

   if(nome.value == "" || idade.value == "" || cidade.value == ""){
          alert("Favor preencher os campos!")
   }else{

           // Limpar a tabela
           tabela.innerHTML = "";

            // Adicionar dados do vetor na tabela 
            for(let i = 0; i < vetor.length; i++){

            // Criar linha na tabela 
             let linha = tabela.insertRow(-1)

             // Colunas 
             let colunaIndice = linha.insertCell(0);
             let colunaNome   = linha.insertCell(1);
             let colunaIdade  = linha.insertCell(2);
             let colunaCidade = linha.insertCell(3);

             // Valor das colunas 
              colunaIndice.innerHTML = i+1;
              colunaNome.innerHTML   = vetor[i].nome;
              colunaIdade.innerHTML  = vetor[i].idade;
              colunaCidade.innerHTML = vetor[i].cidade;

            }
        }

    }

    campo();


     // Limpar os campos
     nome.value   = "";
     idade.value  = "";
     cidade.value = "";

    //  // Cursor no campo
    //  nome.focus();

}
