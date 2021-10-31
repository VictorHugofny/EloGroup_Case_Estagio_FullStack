import router from '@/router/'


export default function (){ 
        let checkRegex = this.senha.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/) == undefined;
        let checkEqual = (this.senha == this.senhaConfirmada)
        console.log("checkando a senha", checkRegex)
 
 
       if (this.id != "" || this.id != " "){
         if(checkEqual && !checkRegex ){
           console.log("criado")
                 localStorage.id = this.id;
                 localStorage.senha = this.senha;
                 this.fail = false
                 router.push("Registrysucces");
 
         }else{
         this.fail = true
       }
       }
     }