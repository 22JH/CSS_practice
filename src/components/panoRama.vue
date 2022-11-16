<template>
<div>
  <navBar/>
  <div class="container">
    <div class="View">
      <div id="frame">
        <div v-for="poster, idx in posters" :key="idx"
          id="card"
          :class="[`${idx}`]" @click="movieDetail(idx)"></div>
      </div>
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
        movie1: { title : 'title1', url : 'url1'},
        movie2: { title : 'title2', url : 'url2'},
        movie3: { title : 'title3', url : 'url3'},
        movie4: { title : 'title4', url : 'url4'},
        movie5: { title : 'title5', url : 'url5'},
        movie6: { title : 'title6', url : 'url6'},
        movie7: { title : 'title7', url : 'url7'},
        movie8: { title : 'title8', url : 'url8'},
      },
      detailOn: false,
    }
  },
  methods: {
    movieDetail: function(e) {
      console.log(e)
      this.detailOn = true
    }
  }
}
</script>

<style scoped>
@import '../css/panoRama.css';
/* @import '../css/line.css'; */

</style>