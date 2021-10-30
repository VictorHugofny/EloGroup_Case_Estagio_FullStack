<template>
    <router-link to="/leads">
      <SucessLogin />
    </router-link>
</template>

<script>
import SucessLogin from '@/components/SucessLogin.vue'
import router from '@/router/'


export default {
  components: {
    SucessLogin,
  },
  methods:{
      teste() {
          router.push("PainelLeads");
          console.log("teste")
      }
  }}
</script>
