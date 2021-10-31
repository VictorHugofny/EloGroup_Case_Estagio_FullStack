<template>
    <div class = "Button">
        <button  type="submit" v-if  = "tipoUsuario == true" >{{ texto }}</button>
    </div>
        
</template>

<script>

export default {
    data(){
    return {
        tipoUsuario: true
    } 
  },
    props:{
    texto: {
      type: String,
      default: () => "Botão"
    }
    }
}
</script>

<style scoped>
.Button button{
    padding: 10px;
    margin-top: 20px;
    width: 180px;
    background: white;
    border: 1px solid black;
}
</style>