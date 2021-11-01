import router from '@/router/'
import BD from '@/controllers/Localstorage/'

export default function (){
  if (this.id){
    
    let bancoDeDados = BD.pegarBD()
    
    let usuario = bancoDeDados.usuarios.find(user => user.nome == this.id);
    
    if(usuario){
      if(usuario.senha == this.senha){
        window.usuarioLogado = usuario
        router.push("Loginsucces");
      }
      else{
        this.texto = "Senha incorreta"
        this.fail = true
      }
    }
    else{
      this.texto = "Usuario não existe"
      this.fail = true
    }
  } else{
    this.texto = "Preencha os campos obrigatórios"
    this.fail = true
  }
}