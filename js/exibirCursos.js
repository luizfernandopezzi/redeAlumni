import { criaLinhaTabela, criarModal } from "./criarLinhasCursos.js"


let btnExibirCursos = document.querySelector("#btnExibirCursos")

btnExibirCursos.addEventListener("click", ()=>{
    console.log("Buscando todos os cursos")

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "../data.json");
    //xhr.open("GET", "https://testapi.io/api/Jonas-buriti/scholarships") //API está incorreto, faltando fechamentos dos objetos. Criei um data.json a partir dos dados disponibilizados e corrigi os erros para rodar o caso. Assim que os dados do API estiverem corretos, para correto funcionamento do código, retirar as // do início da linha 12 e colocar // no início da linha 11.
    xhr.send();
    
    xhr.addEventListener("load", ()=>{
        var resposta = xhr.responseText;
        var cursos = JSON.parse(resposta);
        for(var i=0; i<cursos.length; i++){

            var item = cursos[i]            
            if(!item.enabled){
                console.log(item.course.name," from ",item.university.name," is not enabled")
            }else{
                var campusName = item.campus.name
                var cidade = item.campus.city
                var curso = item.course.name
                var kind = item.course.kind
                var level = item.course.level
                var shift = item.course.shift
                var discountPercentage = item.discount_percentage
                var enabled = item.enabled
                var enrollmentSemester = item.enrollment_semester
                var preco = item.full_price
                var priceWidthDiscount = item.price_width_discount
                var startDate = item.start_date
                var university = item.university.name
                var score = item.university.score         
                var logo = item.university.logo_url

                criarModal(logo,curso,kind,level,university,score,campusName,cidade,preco,i)      
                criaLinhaTabela(logo,curso,cidade,preco,i)           
            }
        } 
         
        $(document).ready(function() {
            var table = $('#tabelaCursos').DataTable({
                order: [],
                columnDefs: [ {
                    'targets': [0],
                    'orderable': false, /* true or false */
                }],
                language: {
                    "url": "../ptBrDataTable.json"} ,
                responsive: true    
            });
             
            // Event listener to the two range filtering inputs to redraw on input
            $('#min, #max').keyup( function() {
                table.draw();
            } );
        } );
    })
    
    btnExibirCursos.classList.add("invisivel")    
})