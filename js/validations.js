//Validação preços: somente números
var camposFiltroPreco = document.querySelectorAll(".input-price");
camposFiltroPreco.forEach((item)=>{
    item.addEventListener('blur', ()=>{
        if (item.value.length > 0){
            if(isNaN(item.value)){
                item.parentElement.classList.add("input-container--invalido")
                alert("Este campo deve conter apenas números");
             }else{
                item.parentElement.classList.remove("input-container--invalido")
             }
        }else{
            item.parentElement.classList.remove("input-container--invalido")
        }
    })
})

     /* Custom filtering function which will search data in column four between two values */
     $.fn.dataTable.ext.search.push(
        function( settings, data, dataIndex ) {
            var min = parseInt( $('#min').val(), 10 );
            var max = parseInt( $('#max').val(), 10 );
            var age = parseFloat( data[3] ) || 0; // use data for the age column
    
            if ( ( isNaN( min ) && isNaN( max ) ) ||
                ( isNaN( min ) && age <= max ) ||
                ( min <= age   && isNaN( max ) ) ||
                ( min <= age   && age <= max ) )
            {
                return true;
            }
            return false;
        }
    );


var campoFiltroCurso = document.querySelector("#filtrar-curso");
campoFiltroCurso.addEventListener('input',(evento)=>{
    var curso = campoFiltroCurso.value
    var regEx = /^[A-Za-z áàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'\s]*$/i;
        if(curso.match(regEx)){
            campoFiltroCurso.parentElement.classList.remove("input-container--invalido")
            campoFiltroCurso.parentElement.querySelector(".input-mensagem--erro").innerText = ""
        }else{
            campoFiltroCurso.parentElement.classList.add("input-container--invalido")
            campoFiltroCurso.parentElement.querySelector(".input-mensagem--erro").innerText = "Este campo deve conter apenas letras"
            alert("Este campo deve conter apenas letras.");
        }
})

var campoFiltroCidade = document.querySelector("#filtrar-cidade");
campoFiltroCidade.addEventListener('input',(evento)=>{
    var cidade = campoFiltroCidade.value
    var regEx = /^[A-Za-z áàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'\s]*$/i;
        if(cidade.match(regEx)){
            campoFiltroCidade.parentElement.classList.remove("input-container--invalido")
            campoFiltroCidade.parentElement.querySelector(".input-mensagem--erro").innerText = ""
        }else{
            campoFiltroCidade.parentElement.classList.add("input-container--invalido")
            campoFiltroCidade.parentElement.querySelector(".input-mensagem--erro").innerText = "Este campo deve conter apenas letras"
            alert("Este campo deve conter apenas letras.");
        }
})