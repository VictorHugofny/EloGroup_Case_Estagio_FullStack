<template>
    <router-link to="/leads">
      <LeadCreatebtn/>
    </router-link>
</template>

<script>
import LeadCreatebtn from '@/components/LeadCreatebtn.vue'

export default {
  components: {
    LeadCreatebtn
  }
}
</script>