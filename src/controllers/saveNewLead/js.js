let inicio = {
    leads: []
}

if(!localStorage.inicio){
    localStorage.inicio = JSON.stringify(inicio)
}

function SalvarLead(lead){
    let inicio = JSON.parse(localStorage.inicio)
    inicio.leads.push(lead)
    localStorage.inicio = JSON.stringify(inicio)
}


let inicio = JSON.parse(localStorage.inicio)
inicio.leads.forEach((lead) =>{ 
    //criar TR
    //Criar TD 
    //SE lead.estado == posição, TD.innerHTML = Lead.nome
})