import router from '@/router/'

           

export default function (){
  
  let checkRegex = this.senha.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/) == undefined;
  let checkEqual = (this.senha == this.senhaConfirmada)

  if (this.id != "" || this.id != " "){
    if(checkEqual && !checkRegex ){
    console.log("criado")
    localStorage.id = this.id;
    localStorage.senha = this.senha;
    
    let bancoDeDados
    
    if(!localStorage.bancoDeDados){
      localStorage.bancoDeDados = JSON.stringify({
        usuarios : []
      })           
    }
    bancoDeDados = JSON.parse(localStorage.bancoDeDados);
    let usuario = bancoDeDados.usuarios.find(user => user.nome == this.id);
    
    //logica para registro
    console.log(usuario)
    if(usuario){
        alert("usuario ja existe")
        this.fail = true
    } else {
      let userObj = {
        nome: this.id,
        senha: this.senha,
        leads: [] 
      }
      bancoDeDados.usuarios.push(userObj)
      localStorage.bancoDeDados = JSON.stringify(bancoDeDados)
      window.usuarioLogado = userObj
      router.push("Registrysucces");
    }
  }
  else{
    this.fail = true
  }
}
}