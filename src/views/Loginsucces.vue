<template>
    <router-link to="/leads">
      <SucessLogin :text='texto' />
    </router-link>
</template>

<script>
import SucessLogin from '@/components/SucessLogin.vue'


export default {
  components: {
    SucessLogin,
  },data(){
    return{
      texto:'Login feito com sucesso'
    }
  }
 }
</script>
