<template>
  <div class="floatTextInput">
    <span> {{ floatingText }} </span>
    <input 
      :id="id"
      :type="type"
      :senha = "senha"
      :autocomplete="autocomplete"
      :senhaConfirmada = "senhaConfirmada"
      v-model = "id" />
  </div>
</template>

<script>
export default {
  name: "floatTextInput",
  props: {
    floatingText: {
      type: String,
      default: "input"
    },
    type: {
      type: String
    },
    
    autocomplete: {
      type: String,
      default: "off"
    }
  },
  data(){
    return{
      id : '',
      senha:'',
      senhaConfirmada : ""
    }
  },
  
}
</script>

<style scoped>
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
  box-sizing: border-box;
  width: 100%;
}
span { 
  font-size: 13px;
  margin-left: 10px;
}
</style>
