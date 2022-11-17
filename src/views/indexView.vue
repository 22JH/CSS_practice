<template>
  <div class="home">
    <panoRama/>
    <div v-if="detailOn">
      <div id="section1"></div>
        <IndexDetail/>
    </div>
    <div id="section2">
      <RecommandMovie/>
    </div>
    <div id="section3">
      
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import panoRama from '@/components/panoRama.vue'
import IndexDetail from '@/components/IndexDetail.vue'
import RecommandMovie from '@/components/RecommandMovie.vue'

export default {
  name: 'indexView',
  components: {
    // HelloWorld,
    panoRama,
    IndexDetail,
    RecommandMovie,
  },
  data(){
    return{
      detailOn: false
    }
  },
  computed: {
    check_detailOn() {
      return this.$store.getters.detailOn
    }
  },
  watch: {
    check_detailOn(v) {
      // console.log("watch", v)
      this.detailOn = v
    }
  },
  updated() {
    const section = document.querySelector('#section1')
    // console.log(section)
    window.scrollBy({top: section.getBoundingClientRect().top + 40, behavior: 'smooth'});
    // console.log('update')
  }
}
</script>
<style scoped>

</style>