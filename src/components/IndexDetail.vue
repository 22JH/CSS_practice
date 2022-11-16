<template>
  <div>
    <div class="videoTop">
      <section class="iframebox">
        <iframe class="iframe" :src="movieData.url"></iframe>
      </section>
    </div>
    <div class="detailBox">
      <div class="poster d-flex justify-content-end">
        <img src="../assets/sampleBack.jpg" alt="poster" class="poster-img">
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'IndexDetail',
    data() {
      return {
        movieData : this.$store.state.IndexDetailData
      }
    }
}
</script>

<style scoped>
@import '@/css/IndexDetail.css';
</style>