var span = document.querySelector('.conteudo span');

span.addEventListener('click',()=>{
    var conteudo = document.querySelector('.conteudo p');

    if (conteudo.classList.contains('show')){

        span.innerHTML = "Ver mais...";
        conteudo.classList.remove('show');

    }
    else{

        span.innerHTML = "Ver menos";
        conteudo.classList.add('show');

    }
});