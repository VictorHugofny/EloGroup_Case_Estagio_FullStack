<template>
<div>
  <div class = 'logo'>
    <Header/>
    <p>Novo Lead</p>
  </div>
  <ErrorBox v-show = "fail" :text='BoxText' />
  <div class = "InputLead">
    <div class="floatTextInput">
      <span>Nome *</span>
      <input v-model = "nome"/>
      <span>Telefone *</span>
      <input v-model = "telefone"/>
      <span>Email *</span>
      <input v-model = "email"/>
    </div>
    <div> 
      <Checkbox class="check"/>
      <SaveLead class = "buttonsave" @click="NewLeadBtn"/>
    </div>    
  </div>    
</div>     
</template>

<script>
import Header from '@/components/Header.vue'
import SaveLead from '@/components/SaveLead.vue'
import Checkbox from '@/components/Checkbox.vue'
import NewLeadBtn from '@/controllers/NewLead'
import ErrorBox from '@/components/FailedLogin.vue'

export default {
  name: 'Login',
  components: {
    Header,
    SaveLead,
    Checkbox,
    ErrorBox
  },
  methods:{
     NewLeadBtn
  },

   data(){
    return {
        fail: false,
        nome : '',
        telefone : '',
        email : '',
        BoxText: 'Não foi possivel criar lead, revise os campos são obrigatorios'
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