<template>
    <router-link to="/leads">
      <LeadCreatebtn />
    </router-link>
</template>

<script>

import router from '@/router/'
import LeadCreatebtn from '@/components/LeadCreatebtn.vue'

export default {

  components: {
    LeadCreatebtn
  },
  methods:{
      newLead: function(){
          router.push("leads");
      }
  }
}
</script>