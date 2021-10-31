<template>
    <div class = "tabela">

    <table>
    <tr class = "tabela-vazia">
        <td class = "input markallControler"><input type="checkbox" name="tipo" id="vazio"  @click = "markall"></td>
        <td></td>
    </tr>
    <tr class = "tabela-vazia">
        <td class = "input markall"> <input v-model="oportunidade" type="checkbox" name="RPA" id="RPA"> </td>
        <td><h3> RPA </h3></td>
    </tr>
    <tr class = "tabela-vazia">
        <td class = "input markall"><input v-model="oportunidade" type="checkbox" name="RPA" id="Produto"></td>
        <td><h3> Produto Digital </h3></td>
    </tr>
    <tr class = "tabela-vazia">
        <td class = "input markall"><input v-model="oportunidade" type="checkbox" name="RPA" id="Analytics"></td>
        <td><h3> Analytics </h3></td>
    </tr>
    <tr class = "tabela-vazia">
        <td class = "input markall"><input v-model="oportunidade" type="checkbox" name="RPA" id="BPM"></td>
        <td><h3> BPM </h3></td>
    </tr>

   </table>

    </div>
</template>

<script>


export default {
    methods:{
        markall: function(){
            let markArray = document.querySelectorAll('.markall')
            let markall = document.querySelector('.markallControler')
    
            Array.from(markArray).forEach((checkbox)=>{
                checkbox.checked = markall.checked
                
            })
        }
    }
}
</script>




<style scoped>

h3{
 color: rgb(0, 0, 0);
}
*{
    margin:0;
    padding:0;
}

td{
    border: 2px solid black;
}

.tabela-vazia td {
    height: 20px;
    font-size: 10px;
    padding-left: 30px;
    padding-right: 30px;
    align-items: flex-start;
    position: center;
}

.tabela-vazia .input{
    height: 10px;
    width: 50px;
    padding: 0px;
    margin: 0px;
}
table{
    border-collapse: collapse;
}

</style>

