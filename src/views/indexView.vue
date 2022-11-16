<template>
  <div class="home">
    <panoRama/>
  </div>
</template>

<script>
// @ is an alias to /src
import panoRama from '@/components/panoRama.vue'

export default {
  name: 'indexView',
  components: {
    // HelloWorld,
    panoRama    
  }
}
</script>
<style scoped>

</style>