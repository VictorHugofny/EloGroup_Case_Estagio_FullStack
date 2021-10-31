import router from '@/router/'

export default function(){

        let checkboxArray = Array.from(document.querySelectorAll('.markall'))
        console.log(checkboxArray)

        let pelomenosUm = false
        checkboxArray.forEach((elemento)=>{
            pelomenosUm = pelomenosUm || elemento.checked 
        })
        console.log(pelomenosUm)
        let canLogin = this.nome && this.telefone && this.email && pelomenosUm
        
        
        if (canLogin){       
            
            

            
          let lead = {
              nome: this.nome,
              telefone: this.telefone,
              email: this.email,
              estado: ['1','',''],
              estadoNumero: 0,
              oportunidades: []
          }
          window.usuarioLogado.leads.push(lead)
          let bancoDeDados = JSON.parse(localStorage.bancoDeDados);
          let usuario = bancoDeDados.usuarios.find(user => user.nome == window.usuarioLogado.nome);
          usuario.leads = window.usuarioLogado.leads
          localStorage.bancoDeDados = JSON.stringify(bancoDeDados)
          router.push("LeadCreate");
        }

        else{
            alert("erro")
        }
    }



