function loadFilter(){
    
    let xhttp = new XMLHttpRequest()

    xhttp.onreadystatechange = function(){

        if(this.readyState == 4 && this.status == 200){

            var resp = JSON.parse(this.responseText);

            let elPai = document.getElementById('filtros');

            function todos(){
                let buttonPaiTodos = document.createElement('button');
                let spanName = document.createElement('span');
                let spanQuantity = document.createElement('span');

                let spanNameValor = document.createTextNode(resp[0].name);
                let spanQuantityValor = document.createTextNode(resp[0].quantity);
                
                spanName.appendChild(spanNameValor);
                spanQuantity.appendChild(spanQuantityValor);
                
                    for(i=1; i<=resp.length-1;i++){
                    buttonPaiTodos.setAttribute('onclick','loadData('+i+')');
                    }

                buttonPaiTodos.appendChild(spanName);
                buttonPaiTodos.appendChild(spanQuantity);

                elPai.appendChild(buttonPaiTodos)
            }

            todos();

            for(let i=1; i <= resp.length ; i++){

                let buttonPai = document.createElement('button');
                let spanName = document.createElement('span');
                let spanQuantity = document.createElement('span');

                let spanNameValor = document.createTextNode(resp[i].name);
                let spanQuantityValor = document.createTextNode(resp[i].quantity);

                spanName.setAttribute('id','spanBt'+i);
                
                buttonPai.setAttribute('onclick','loadData('+i+')')
                
                spanName.appendChild(spanNameValor);
                spanQuantity.appendChild(spanQuantityValor);

                
                buttonPai.appendChild(spanName);
                buttonPai.appendChild(spanQuantity);

                elPai.appendChild(buttonPai)

                console.log(resp[i].name)
            }

        }

    }
    xhttp.open('GET','https://api-d1-test.herokuapp.com/api/filter',true);

    xhttp.send();
}

loadFilter();