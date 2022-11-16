<template>
  <div class="home">
    <!-- <HelloWorld/> -->
    <panoRama/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import panoRama from '@/components/panoRama.vue'

export default {
  name: 'HomeView',
  components: {
    // HelloWorld,
    panoRama
    
  }
}
</script>
