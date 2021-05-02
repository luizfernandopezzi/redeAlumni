let tabelaCorpo = document.querySelector(".tabela-corpo")

export function criarModal (logo,curso,kind,level,university,score,campus,cidade,preco,identificador){

    var modal = `
        <div class="modal fade" id="modal${identificador}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Dealhes</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <table class="modal-body">
                            <tbody class="container-fluid">
                                <tr class="row text-center">
                                    <td class="col-4 ms-auto"><img class="imgModal" alt="Logotipo da Universidade" src="${logo}"></td>
                                    <td class="col ms-auto text-center">
                                        <ul class="text-center">
                                            <li>${curso} - ${kind}</li>
                                            <li>${level}</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr class="row text-center">
                                    <td class="col-4 ms-auto">Universidade/Nota ${university}/${score}</td>
                                    <td class="col ms-auto text-center">
                                        <ul class="text-center">                                   
                                            <li class="col ms-auto">Campus/Cidade</li>
                                            <li class="col ms-auto">${campus}/${cidade}</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr class="row text-center">
                                    <td class="col ms-auto">Preço: ${preco}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
        </div>
    `
    let modalDetalhe = document.createElement("div")
    modalDetalhe.innerHTML = modal

    let fieldSetModais = document.querySelector(".modais")
    fieldSetModais.appendChild(modalDetalhe)
}

export function criaLinhaTabela (logo,curso,cidade,preco,identificador){   

    let tabelaLinhaContent = `
        <td class="tabela-logo align-middle text-center"><img src="${logo}"></td>
        <td class="tabela-curso align-middle text-center">${curso}</td>
        <td class="tabela-cidade align-middle text-center">${cidade}</td>
        <td class="tabela-preco align-middle text-center">${preco}</td>
        <td class="tabela-detalhes align-middle text-center">
            <button type="button" class="btn btn-light" data-bs-toggle="modal" data-bs-target="#modal${identificador}">
            Detalhes
            </button>
        </td>
    `
    let novaLinhaCurso = document.createElement("tr")
    novaLinhaCurso.classList.add("tabela-linha")    
    novaLinhaCurso.innerHTML = tabelaLinhaContent
    tabelaCorpo.appendChild(novaLinhaCurso)   
}