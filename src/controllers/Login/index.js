import router from '@/router/'

export default function (){
  if (this.id){
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
        this.BoxText = "Senha incorreta"
        this.fail = true
      }
    }
    else{
      this.BoxText = "Usuario não existe"
      this.fail = true
    }
  } else{
    this.BoxText = "Preencha os campos obrigatórios"
    this.fail = true
  }
}