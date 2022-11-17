<template>
<div style="position: relatvies; overflow: hidden;">
  <div class="frame">
    <h1 class="inner-text">What do yo Want?</h1>
    <swiper class="swiper" :options="swiperOption">
        <swiper-slide v-for="movie, idx in moviePosters" :key='idx'><div class="poster-slide"></div></swiper-slide>     
        <!-- <swiper-slide>Slide 2</swiper-slide>     
        <swiper-slide>Slide 3</swiper-slide>     
        <swiper-slide>Slide 4</swiper-slide>     
        <swiper-slide>Slide 5</swiper-slide> -->
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  name: 'RecommandMovie.vue',
  data() {
    return {
      moviePosters : [
        { title: 'title', url: './assets/space.jpeg'},
        { title: 'title', url: './assets/space.jpeg'},
        { title: 'title', url: './assets/space.jpeg'},
        { title: 'title', url: './assets/space.jpeg'},
        { title: 'title', url: './assets/space.jpeg'},
        { title: 'title', url: './assets/space.jpeg'},
        { title: 'title', url: './assets/space.jpeg'},
        { title: 'title', url: './assets/space.jpeg'},
        { title: 'title', url: './assets/space.jpeg'},
        { title: 'title', url: './assets/space.jpeg'},
        { title: 'title', url: './assets/space.jpeg'},
      ]
    }
  },
  components:	{
       Swiper,
       SwiperSlide
	},
}
</script>
<style>
@import '../css/RecommandMovie.css';
</style>