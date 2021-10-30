<template>
    <div class = "Button">
        <button type="submit" v-if  = "tipoUsuario == true" >Registrar</button>
    </div>
        
</template>

<script>

export default {
    data(){
    return {
        tipoUsuario: true
} 
}}
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