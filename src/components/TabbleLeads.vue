<template>
<div class = "tabela">
  <table>
    <tr class = "topo">
        <td>Cliente em Portencial</td>
        <td>Dados Confirmados</td>
        <td>Reunião Agendada</td>
    </tr>

    <tr v-for="lead in leads" :key="lead.nome" class = "tabela-vazia"> 
      <td @click = "mover" v-for='mostrar in lead.estado' :key='mostrar'>
        <p> {{mostrar != ''? lead.nome: ''}} </p>
      </td>
    </tr>
  </table>
</div>
</template>

<script>
import mover from '@/controllers/MoveLeads'

export default {
  methods:{
      mover 
  },
  data(){
    return{
      leads : window.usuarioLogado.leads
    }
  }
}
 
</script>

<style scoped>
.tabela{
    padding-top: 4px;   
    margin:0;
    padding:0;
}
*{
    margin:0 ;
    padding:0 ;
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
table{
    border-collapse: collapse;
}
</style>
