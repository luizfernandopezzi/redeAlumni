var campoFiltroCidade = document.querySelector("#filtrar-cidade");
var campoFiltroCurso = document.querySelector("#filtrar-curso");

campoFiltroCidade.addEventListener("input", function(){                 //Evento INPUT = evento de digitação
    var tabelaLinhas = document.querySelectorAll(".tabela-linha");
    if (this.value.length > 0){                                         //this.value refere-se ao dono do evento, campoFiltroCidade
        for (var i = 0; i < tabelaLinhas.length; i++){
            var tabelaLinha = tabelaLinhas[i];
            var tdCidade = tabelaLinha.querySelector(".tabela-cidade");
            var cidade = tdCidade.textContent;
            var expressao = new RegExp(this.value, "i");                //var ExpressaoRegular = new RegExp(elemento-buscado, caracteristica) 
                                                                        //onde caracteristica se "i" = Case Insensitive. A variável expressao
                                                                        //assume o valor da nova Regular Expression, cujo valor buscado (this.value)
                                                                        //é o que está digitado em campoFiltro.
            if (!expressao.test(cidade)) {                              //TEST se a var expressao é igual ao parametro (cidade), se sim, retorna TRUE, se não, FALSE.
                tabelaLinha.classList.add("invisivel");                 //Neste caso, testa se a expressao é igual ao cidade, se não for (!)
            } else {                                                    //entra no if e adiciona classe invisível em tabelaLinha = tabelaLinhas[i]
                tabelaLinha.classList.remove("invisivel");
            }
        }
    } else {
        for (var i = 0; i < tabelaLinhas.length; i++) {
            var tabelaLinha = tabelaLinhas[i];
            tabelaLinha.classList.remove("invisivel");
        }
    }
});

campoFiltroCurso.addEventListener("input", function(){
    var tabelaLinhas = document.querySelectorAll(".tabela-linha");
    if (this.value.length > 0){
        for (var i = 0; i < tabelaLinhas.length; i++){
            var tabelaLinha = tabelaLinhas[i];
            var tdCurso = tabelaLinha.querySelector(".tabela-curso");
            var curso = tdCurso.textContent;
            var expressao = new RegExp(this.value, "i");
            if (!expressao.test(curso)) {
                tabelaLinha.classList.add("invisivel");
            } else {
                tabelaLinha.classList.remove("invisivel");
            }
        }
    } else {
        for (var i = 0; i < tabelaLinhas.length; i++) {
            var tabelaLinha = tabelaLinhas[i];
            tabelaLinha.classList.remove("invisivel");
        }
    }
});

//Filtro Inicial de Preço. Substituído pelos filtros de preço máx e mín do jQuery.
//var campoFiltroPreco = document.querySelector("#filtrar-preco");
// campoFiltroPreco.addEventListener("input", function(){
//     var tabelaLinhas = document.querySelectorAll(".tabela-linha");
//     if (this.value.length > 0){
//         for (var i = 0; i < tabelaLinhas.length; i++){
//             var tabelaLinha = tabelaLinhas[i];
//             var tdPreco = tabelaLinha.querySelector(".tabela-preco");
            
//             var preco = tdPreco.textContent;
//             var expressao = new RegExp(this.value, "i");
//             if (!expressao.test(preco)) {
//                 tabelaLinha.classList.add("invisivel");
//             } else {
//                 tabelaLinha.classList.remove("invisivel");
//             }
//         }
//     } else {
//         for (var i = 0; i < tabelaLinhas.length; i++) {
//             var tabelaLinha = tabelaLinhas[i];
//             tabelaLinha.classList.remove("invisivel");
//         }
//     }
// });

