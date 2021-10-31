<template>
<div class = "tabela">
    <table>
        <tr class = "tabela-vazia">
            <td class = "input">
                <input class = "markallControler" type="checkbox" id="vazio"  @click = "markall">
            </td>
            <td></td>
        </tr>
        <tr class = "tabela-vazia">
            <td class = "input"> 
                <input class= "markall" type="checkbox" id="RPA"> 
            </td>
            <td><h3> RPA </h3></td>
        </tr>
        <tr class = "tabela-vazia">
            <td class = "input">
                <input class= "markall" type="checkbox"  id="Produto">
            </td>
            <td><h3> Produto Digital </h3></td>
        </tr>
        <tr class = "tabela-vazia">
            <td class = "input">
                <input class= "markall" type="checkbox" id="Analytics">
            </td>
            <td><h3> Analytics </h3></td>
        </tr>
        <tr class = "tabela-vazia">
            <td class = "input">
                <input class= "markall" type="checkbox" id="BPM">
            </td>
            <td><h3> BPM </h3></td>
        </tr>
    </table>
</div>
</template>

<script>
import markall from '@/controllers/MarkallCheckbox'

export default {
    methods:{
        markall
    },
    data(){
        return{
            oportunidade: ''
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

