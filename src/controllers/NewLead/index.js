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
          localStorage.nome = this.nome;
          localStorage.telefone = this.telefone;
          localStorage.email = this.email;
          localStorage.position = 0
          router.push("LeadCreate");
        }}
