let bancoDeDados = JSON.parse(localStorage.bancoDeDados);

let userObj = {
    nome: this.id,
    senha: this.senha
} 

let usuario = bancoDeDados.usuarios.find(user => user.name == input.value);

// logica para login
if(usuario){
    /* 
    Salvar uma variavel no vue desse usuario
    Vue.usuarioLogado = usuario
    */
} else {
    // usuario não existe
}

//logica para registro
if(usuario){
    // não é possivel regitrar usuario ja existe
} else {
    bancoDeDados.usuarios.push(userObj)
}



  let contacts = localStorage.getItem('contacts');

  if(contacts){ //se ja tiver um contato salvo
     contacts = JSON.parse(contacts);
     contacts.push(contact)
  }
  else{
    contacts = [contact];
  }

  localStorage.setItem('contacts',JSON.stringify(contacts))