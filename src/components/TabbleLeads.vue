<template>
    <div class = "tabela">

    <table>
    <tr class = "topo">
        <td>Cliente em Portencial</td>
        <td>Dados Confirmados</td>
        <td>Reunião Agendada</td>
    </tr>

     <tr v-for="lead in leads" :key="lead.nome" class = "tabela-vazia"> 
        <td v-if = "lead.estado == 1" @click = "mover">
          <p v-show = "position == 0">{{lead.nome}}</p>
        </td>
        <td v-if = "lead.estado == 1">
          <p v-show = "position == 1" @click = "mover">{{lead.nome}}</p>
        </td>
        <td v-if = "lead.estado == 1">
          <p v-show = "position == 2">{{lead.nome}}</p>
        </td>

        <td v-if = "lead.estado == 2" >
          <p></p>
        </td>
        <td v-if = "lead.estado == 2" >
          <p></p>
        </td>
        <td v-if = "lead.estado == 2" >
          <p></p>
        </td>

        <td v-if = "lead.estado == 3">
          <p></p>
        </td>
        <td v-if = "lead.estado == 3">
          <p></p>
        </td>
        <td v-if = "lead.estado == 3">
          <p></p>
        </td>
      </tr>
   </table>
</div>
</template>


<script>



export default {
    mounted() {
         this.position = localStorage.position;
    },
    methods:{
        mover: function(){
            if (this.position < 2){
                localStorage.position++
            }
      

            if (localStorage.position == 0){
                localStorage.position = 0
                this.position = 0
   
            }else if (localStorage.position == 1){
                localStorage.position = 1
                this.position = 1
  
            }
            else if (localStorage.position == 2){
                localStorage.position = 2
                this.position = 2
            } }
    },
    data(){
        
    return{
        position : localStorage.position,
        leads: [ //base de dados
        {
            nome : localStorage.nome,
            estado : 1
        },
        {
            nome : 'teste',
            estado : 2
        },
        {
            nome : 'hugo',
            estado : 3
        }   
    ],
        lead: [ ], //vai ser adiciona aqui pelo for
}       
    },
 
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
.white td{
    background: white;
}

</style>
