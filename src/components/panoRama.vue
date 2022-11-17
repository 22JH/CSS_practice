<template>
<div class="panorama-frame">
  <navBar/>
  <div class="container">
    <div class="View">
      <div id="frame">
        <div v-for="poster, idx of posters" :key="idx"
          id="card"
          :class="[`${idx}`]" @click="showDetail(idx)"></div>
      </div>
          <h1 class="상영중">Now In Theaters</h1>
    </div>
  </div>
  
  <!-- <div class="line"> -->

  <!-- </div> -->
</div>
</template>

<script>
import navBar from '@/components/navBar'

export default {
  name: 'panoRama',
  components: {
    navBar
  },
  data() {
    return {
      posters: {
        movie1: { title : 'title1', url : 'https://www.youtube.com/embed/GvKQKnIVy1I?autoplay=1&mute=1', content: 'contetn'},
        movie2: { title : 'title2', url : 'https://www.youtube.com/embed/GvKQKnIVy1I?autoplay=1&mute=1', content: 'contetn'},
        movie3: { title : 'title3', url : 'https://www.youtube.com/embed/GvKQKnIVy1I?autoplay=1&mute=1', content: 'contetn'},
        movie4: { title : 'title4', url : 'https://www.youtube.com/embed/GvKQKnIVy1I?autoplay=1&mute=1', content: 'contetn'},
        movie5: { title : 'title5', url : 'https://www.youtube.com/embed/GvKQKnIVy1I?autoplay=1&mute=1', content: 'contetn'},
        movie6: { title : 'title6', url : 'https://www.youtube.com/embed/GvKQKnIVy1I?autoplay=1&mute=1', content: 'contetn'},
        movie7: { title : 'title7', url : 'https://www.youtube.com/embed/GvKQKnIVy1I?autoplay=1&mute=1', content: 'contetn'},
        movie8: { title : 'title8', url : 'https://www.youtube.com/embed/GvKQKnIVy1I?autoplay=1&mute=1', content: 'contetn'},
      },
      detailOn: false,
    }
  },
  methods: {
    showDetail: function(e) {
      console.log(this.posters[e])
      this.$store.commit('SHOW_DETAIL', this.posters[e])
    }
  }
}
</script>

<style scoped>
@import '../css/panoRama.css';
/* @import '../css/line.css'; */

</style>