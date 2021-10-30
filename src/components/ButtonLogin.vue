<template>
    <div class = "Button">
        <button type="submit" v-if  = "tipoUsuario == true" >Login</button>
    </div>
        
</template>

<script>

export default {
    data(){
    return {
        tipoUsuario: true
}
},
    

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


<template>
    <div class = "tabela">

    <table>
    <tr class = "topo">
        <td>Cliente em Portencial</td>
        <td>Dados Confirmados</td>
        <td>Reunião Agendada</td>
    </tr>

     <tr class = "tabela-vazia"> 
        <td v-for="lead in leads" :key="lead.nome">
          <p >{{lead.nome}}</p>
        </td>
      </tr>

    <tr class = "tabela-vazia">
        <td></td>
        <td></td>
        <td></td>
    </tr>

    <tr class = "tabela-vazia">
        <td></td>
        <td></td>
        <td></td>
    </tr>
   </table>

   <button type="submit"> testando </button>

    </div>
</template>

<style>
.tabela{
    padding-top: 4px;   
    margin:0;
    padding:0;
}

td{
    border: 2px solid black;
}
.topo td{
    width: 140px;
    padding: 16px;
    margin:0;
    background-color: rgb(110, 110, 110) ;
    color: white;
    font-size: 10px;
}
.tabela-vazia td{
    height: 40px;
    background-color: rgb(228, 228, 228) ;
    font-size: 10px;
}
.white td{
    background: white;
}

</style>
