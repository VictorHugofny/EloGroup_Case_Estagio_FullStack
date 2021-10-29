<template>
  <div class="home">
    <div class = "registro"> 
    <Header/>
    <p>Usuário * </p>
    <input type="text" v-model="nome" id="">
    <p>Password * </p>
    <input type="text" v-model="senha" id="">
    <p>Confirmação Password * </p>
    <input type="text" v-model="confirmSenha">
    <Button @click = "registrar"/>

  </div></div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Button from '@/components/Button.vue'

export default {
  name: 'Login',
  components: {
    Header,
    Button
  },

   data(){
    return {
      erroNome: false,
      nome : '',
      senha : '',
      confirmSenha : ''
    }
},
  methods:{
    registrar: function(){
      if (this.nome != "" && this.nome != " " ){
        if(this.senha != "" && this.nome != " " && this.senha == this.confirmSenha){
          console.log("criado")
        }else{
        alert("Erro Usuario invalido")
      }
      }
      
    }
  }
}
</script>

<style>
.registro{
  margin-left: 40%;
  align-content: center;
  justify-content: center;
  text-align: center;
  padding-top: 20px;
  border: 1px solid black;
  width: 250px;
  height: 370px;
}
</style>