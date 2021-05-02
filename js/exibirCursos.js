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
        console.log(cursos)
        cursos.forEach((item)=>{
            if(!item.enabled){
                console.log(item.course.name," from ",item.university.name," is not enabled")
                return
            }else{
                let campusName = item.campus.name
                let cidade = item.campus.city
                let curso = item.course.name
                let kind = item.course.kind
                let level = item.course.level
                let shift = item.course.shift
                let discountPercentage = item.discount_percentage
                let enabled = item.enabled
                let enrollmentSemester = item.enrollment_semester
                let preco = item.full_price
                let priceWidthDiscount = item.price_width_discount
                let startDate = item.start_date
                let university = item.university.name
                let score = item.university.score         
                let logo = item.university.logo_url
                criaLinhaTabela(logo,curso,cidade,preco)
            }
        });
    })
})