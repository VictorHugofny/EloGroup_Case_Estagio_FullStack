import router from '@/router/'

export default function(){
        if (this.nome == ""){
            alert ("erro dps de nome")
        }else if (this.telefone == "" ){
            alert ("erro dps de telefone")
        }else if (this.email == "" ){
            alert ("erro dps de telefone")
        }
        else{
          localStorage.position = 0
          
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
        }}
