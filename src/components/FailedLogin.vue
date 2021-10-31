<template>
    <button>{{text}}</button>
</template>

<script>
export default {
    props: {
        text: {
            type: String
        }
    }
}
</script>


<style scoped>
button{
    background: red;
    color: white;
    padding: 20px;
    font-size:20px ;
    margin-bottom: 20px;
    border: 0px;
}
</style>