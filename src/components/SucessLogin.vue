<template>
    <h1>{{texto}}</h1>
    <button>Clique aqui para continuar</button>
</template>

<script>
export default {
    props:{
        texto: {
            type: String,
            default: () => "Botão"
        }
    }   
}
</script>

<style scoped>
button{
    margin-top: 20px;
    background: rgb(0, 132, 255);
    color: white;
    padding: 20px;
    font-size:20px ;
    margin-bottom: 20px;
    border: 0px;
}
</style>