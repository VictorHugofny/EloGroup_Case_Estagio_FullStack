import router from '@/router/'
import BD from '@/controllers/Localstorage/'

export default function (){    
  let checkRegex = this.senha.match(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/) == undefined;
  let checkEqual = (this.senha == this.senhaConfirmada)

  if (this.id){
    if(checkEqual && !checkRegex ){
      
      let bancoDeDados = BD.pegarBD()
      
      let usuario = bancoDeDados.usuarios.find(user => user.nome == this.id);
      
      //logica para registro
      if(usuario){
          this.fail = true
      } 
      else{
        let userObj = {
          nome: this.id,
          senha: this.senha,
          leads: [] 
        }
        bancoDeDados.usuarios.push(userObj)
        BD.salvarBD(bancoDeDados)
        window.usuarioLogado = userObj
        router.push("Registrysucces");
      }
    }
    else{
      this.textoFalha = "As senhas precisam ser iguais e ter no minino 8 caracteres, com letra maiúscula, digito e caracter especial"
      this.fail = true
    }
  }else{
    this.textoFalha = "Preencha os campos obrigatórios"
    this.fail = true
  }
}