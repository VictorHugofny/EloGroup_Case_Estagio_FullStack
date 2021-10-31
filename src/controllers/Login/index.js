import router from '@/router/'

export default function (){
  if (this.id != "" || this.id != " "){
    let bancoDeDados
    
    if(!localStorage.bancoDeDados){
      localStorage.bancoDeDados = JSON.stringify({
        usuarios : []
      })           
    }
    bancoDeDados = JSON.parse(localStorage.bancoDeDados);
    let usuario = bancoDeDados.usuarios.find(user => user.nome == this.id);
    
    if(usuario){
      if(usuario.senha == this.senha){
        window.usuarioLogado = usuario
        router.push("Loginsucces");
      }
      else{
        this.fail = true
      }
    }
    else{
      this.fail = true
    }
  }
}