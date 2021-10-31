<template>

<div class = "Leads">
    <div class = "painelLeads">
        <div class = "topoPainel">
         <div><Header/></div>
         <div><p> Painel de Leads </p></div>
        </div>
        <div>

    <router-link to="/NewLead">
      <NewLeadBtn/>
    </router-link>
    
        <TabbleLeads/>
        </div>
    </div>
</div>
</template>


<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import NewLeadBtn from '@/components/NewLeadBtn.vue'
import TabbleLeads from '@/components/TabbleLeads.vue'

export default {
  name: 'Login',
  components: {
    Header,
    NewLeadBtn,
    TabbleLeads
  },
}
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  outline: none;
}
.Leads .Header{
    margin-left: -110px;
    display: flex;
}

 .NewLeadBtn{
    display: flex;
}

.Leads{
    display: flex;
    justify-content: center;
}
.topoPainel{
    display: flex;
    padding-bottom: 30px;
}

.topoPainel div{
    padding-right: 30px;
}


.painelLeads{
    width: 600px;
    padding-top: 10px;
    padding-bottom: 14px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>