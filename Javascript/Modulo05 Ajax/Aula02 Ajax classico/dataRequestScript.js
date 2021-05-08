//Aplicação para fazer request api

//Função que faz a request á api
function loadData(idFilter){


    function cleanTable(qnt){

        var qnt = document.querySelectorAll('#table tr').length;
        for(i=0; i <= qnt; i++){
        let element =  document.getElementById('trInd'+i);

            if (typeof(element) != 'undefined' && element != null){

                element.style.visibility='hidden';
                element.style.display='none';

            }
        }
    }

    cleanTable('0')

    //Variavel da request
    let xhttp = new XMLHttpRequest()

    //Função de status / insertElements
    xhttp.onreadystatechange = function() {

        //Verificação de status
        if(this.readyState == 4 && this.status == 200){

            //Variavel que formata o request em JSON
            let resp =  JSON.parse(this.responseText);

            //Elemento Pai para criação dos itens na tabela
            let elPai = document.getElementById('table');

                //Laço para impressão de todos os itens do objeto
                for(let i=0; i <= resp.length ; i++){

                    //Variaveis para criar os elementos da tabela de request
                    let trInd = document.createElement('tr');
                    let thName = document.createElement('th');
                    let tdRecipients = document.createElement('td');
                    let tdSuccess = document.createElement('td');
                    let tdStatus = document.createElement('td');
    
                    //Variaveis para inserir os dados nos elementos de tabela criados
                    let nameValor = document.createTextNode(resp[i].name);
                    let recipientsValor = document.createTextNode(resp[i].recipients);
                    let successValor = document.createTextNode(resp[i].success);

                    //Verificação do status da request
                    var statusValorVerific = resp[i].status;
                    if(statusValorVerific == 0){
                        var statusValorText = 'Todos!'
                    } else if(statusValorVerific == 1){
                        var statusValorText = 'Enviando!'
                    } else if(statusValorVerific == 2){
                        var statusValorText = 'Ativada!'
                    } else if(statusValorVerific == 3){
                        var statusValorText = 'Configurando!'
                    } else if(statusValorVerific == 4){
                        var statusValorText = 'Ocioso!'
                    } else if(statusValorVerific == 5){
                        var statusValorText = 'Concluido!'
                    }


                    trInd.setAttribute('id','trInd'+i);

                    //Inserção dos dados de status no elemento
                    var statusValor = document.createTextNode(statusValorText); 
    
                    //Link entre os elementos TD e TH com seus dados internos
                    thName.appendChild(nameValor);
                    tdRecipients.appendChild(recipientsValor);
                    tdSuccess.appendChild(successValor);
                    tdStatus.appendChild(statusValor);
                    
                    //Link dos Elementos TD e TH com o elemnto TR de cada objeto
                    trInd.appendChild(thName);
                    trInd.appendChild(tdRecipients);
                    trInd.appendChild(tdSuccess);
                    trInd.appendChild(tdStatus);
                    
                    //Link do TR com o ElementoPai(Tabela)
                    elPai.appendChild(trInd);
                    
                    //Impresão no console da verificação do Indice do laço
                    console.log(resp[i].status)
                }

            }

    }
    //Variavel para capturar o id do filtro usado na url
    urlRequest = 'https://api-d1-test.herokuapp.com/api/journey/'+idFilter

    //Onde a request é aberta
    xhttp.open('GET',urlRequest,true)

    //Onde a request é  enviada
    xhttp.send()
 
}