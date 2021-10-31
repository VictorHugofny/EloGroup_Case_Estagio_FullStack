<template>
    <div class = "login"> 
    <FailedLogin v-show="fail == true"/>
    
    <Header/>

    <div class="floatTextInput">
        <span>Usuário * </span>
        <input v-model = "id" />
        <span>Senha * </span>
        <input type="password" v-model = "senha" />
        <span>Confirmação Password * </span>
        <input type="password" v-model = "senhaConfirmada" />
    </div>

    <Button @click = "BtnRegister"/>
    
  </div>
</template>

<script>
// @ is an alias to /src
import BtnRegister from '@/controllers/Register'
import Header from '@/components/Header.vue'
import Button from '@/components/Button.vue'
import FailedLogin from '@/components/FailedLogin.vue'

export default {
  name: 'Login',
  components: {
    Header,
    Button,
    FailedLogin,
  },

   data(){
    return {
      fail : false,
      Sucess: false,
      checkRegex: false,
      autocomplete: "on",
      id:'',
      senha: '',
      senhaConfirmada:'',
      inputUserText: "Usuário *",
      inputUserId: "loginUserInput",

      inputPassword: "Password *",
      inputPasswordId: "loginPassword",
      inputPasswordIdType: "password",

      inputConfirmPassword: "Confirmação Password *",
      inputConfirmPasswordId: "loginConfirmPassword",
      inputConfirmPasswordType: "password",

      confirmButtonText: "Registrar",

      loginButtonText: "Login"
    }
},

methods:{
    BtnRegister
},
mounted() {
    if (localStorage.id) {
      this.id = localStorage.id;
    }
    if (localStorage.senha) {
      this.senha = localStorage.senha;
    }
  },
  
}
</script>

<style scoped>

.login {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.loginInputContainer {
  margin-top: 30px;
  margin-bottom: 30px;
}
.floatTextInput {
  margin-bottom: 20px;
}
.secondButtonTitle {
  margin-top: 30px;
}
.floatTextInput {
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.error input{
  border-color: var(--errorColor);
  color: var(--errorColor);
}
.error span{
  color: var(--errorColor);
}
input {
  border: solid 1px black;
  margin-top: 5px;
  padding: 3px 10px;
  margin-bottom: 16px;
  box-sizing: border-box;
  width: 100%;
}
span { 
  font-size: 13px;
  margin-left: 10px;
}
</style>