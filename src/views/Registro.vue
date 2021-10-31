<template>
    <div class = "login"> 
    <Header/>
    <FailedLogin :text='BoxText' v-show="fail"/>

    <div class="floatTextInput">
        <span>Usuário * </span>
        <input v-model = "id" />
        <span>Senha * </span>
        <input type="password" v-model = "senha" />
        <span>Confirmação Password * </span>
        <input type="password" v-model = "senhaConfirmada" />
    </div>

    <Button @click = "BtnRegister" :texto = 'textoRegistro'/>

    <router-link to="/login">
      <Button :texto = 'textologin'/>
    </router-link>
    
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
      textoRegistro: 'Registrar',
      textologin: 'Login',
      BoxText: 'Usuario ja existe ou Senha não esta formatada corretamente',
      fail : false,
      Sucess: false,
      id:'',
      senha: '',
      senhaConfirmada:'',
    }
},

methods:{
    BtnRegister,
},
mounted() {
    this.id = '',
    this.senha = ''
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