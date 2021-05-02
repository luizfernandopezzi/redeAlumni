import { criaLinhaTabela, criarModal } from "./criarLinhasCursos.js"


let btnExibirCursos = document.querySelector(".btn-exibir-cursos")

btnExibirCursos.addEventListener("click", ()=>{
    console.log("Buscando todos os cursos")

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://testapi.io/api/redealumni/scholarships");
    xhr.send();
    
    xhr.addEventListener("load", ()=>{
        var resposta = xhr.responseText;
        var cursos = JSON.parse(resposta);
        for(var i=0; i<cursos.length; i++){

            var item = cursos[i]
            console.log(item)
            
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
    })    
})