let tabelaCorpo = document.querySelector(".tabela-corpo")

const btnModal = `
    <button type="button" class="btn btn-light" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
    </button>
`

export function criarModal (logo,curso,kind,level,universidade,score,campus,cidade,preco){
const modal = `
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Dealhes</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <table class="modal-body">
                        <tbody class="container-fluid">
                            <tr class="row">
                                <td class="col-md-3 ms-auto"><img src="${logo}"></td>
                                <td class="col-md-3 ms-auto">
                                    <ul>
                                        <li>${curso}-${kind}</li>
                                        <li>${level}</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr class="row">
                                <td class="col-md-3 ms-auto">${universidade}/${score}</td>
                                <td class="col-md-3 ms-auto">${campus}/${cidade}</td>
                            </tr>
                            <tr class="row">
                                <td class="col-md-3 ms-auto">${preco}</td>
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
    let fieldSetModais = document.querySelector(".modais")
    fieldSetModais.appendChild(modalDetalhe)
}

export function criaLinhaTabela (logo,curso,cidade,preco){   

    let tabelaLinhaContent = `
        <td class="tabela-logo align-middle"><img src="${logo}"></td>
        <td class="tabela-curso align-middle">${curso}</td>
        <td class="tabela-cidade align-middle">${cidade}</td>
        <td class="tabela-preco align-middle">${preco}</td>
        <td class="tabela-detalhes align-middle">${btnModal}</td>
    `
    let novaLinhaCurso = document.createElement("tr")
    novaLinhaCurso.classList.add("tabela-linha")
    novaLinhaCurso.innerHTML = tabelaLinhaContent
    tabelaCorpo.appendChild(novaLinhaCurso)
}