import router from '@/router/'
import BD from '@/controllers/Localstorage/'

export default function(){
    let checkboxArray = Array.from(document.querySelectorAll('.markall'))

    let pelomenosUm = false
    checkboxArray.forEach((elemento)=>{
        pelomenosUm = pelomenosUm || elemento.checked 
    })

    let podeCriar = this.nome && this.telefone && this.email && pelomenosUm
    
    if(podeCriar){       
        let lead = {
            nome: this.nome,
            telefone: this.telefone,
            email: this.email,
            estado: ['Cliente em potencial','',''],
            estadoNumero: 0,
            oportunidades: []
        }
        
        checkboxArray.forEach((elemento)=>{
            if(elemento.checked){
                let oportunidade = elemento.parentNode.parentNode.children[1].children[0].innerHTML
                lead.oportunidades.push(oportunidade)
            }
        })

        window.usuarioLogado.leads.push(lead)
        let bancoDeDados = BD.pegarBD()

        let usuario = bancoDeDados.usuarios.find(user => user.nome == window.usuarioLogado.nome);

        usuario.leads = window.usuarioLogado.leads
        BD.salvarBD(bancoDeDados)
        router.push("LeadCreate");
    }
    else{
        this.fail = true
    }
}



