<template>
    <div class = 'logo'>
    <Header/>
    <p>Novo Lead</p>
    </div>

    
<div class = "InputLead">
    <div class="floatTextInput">
        <span>Nome * </span>
        <input v-model = "nome" />
        <span>Telefone * </span>
        <input v-model = "telefone" />
        <span>Email * </span>
        <input v-model = "email" />
    </div>

         <div> 
            <Checkbox class="check"/>
            <SaveLead class = "buttonsave" @click="NewLeadBtn"/>
          </div>    
  </div>    
     
     
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import SaveLead from '@/components/SaveLead.vue'
import Checkbox from '@/components/Checkbox.vue'
import NewLeadBtn from '@/controllers/NewLead'


export default {
  name: 'Login',
  components: {
    Header,
    SaveLead,
    Checkbox
  },
  methods:{
     NewLeadBtn
  },

   data(){
    return {
        nome : '',
        telefone : '',
        email : ''
    }
}, mounted() {
    if (localStorage.nome) {
      this.nome = localStorage.nome;
    }
    if (localStorage.telefone) {
      this.telefone = localStorage.telefone;
    }
    if (localStorage.telefone) {
      this.email = localStorage.email;
    }
  }
}
</script>

<style scoped>

.floatTextInput {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
input{
    border: 1px solid black;
    padding: 5px;
    padding-right: 15px;
}
.logo{
    display: flex;
    
}
.logo p{
    margin-left: 30px;
}
.InputLead{
    display: flex;
}


.check{
    margin-left: 80px;
}
.buttonsave{
    margin-left: 80px;
}
input{
    width: 160px
}
</style>