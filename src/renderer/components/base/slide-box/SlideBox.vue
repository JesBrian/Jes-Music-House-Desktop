<template>
	<!--轮播图组件-->
	<div class="super-slider">
    <page-loading v-if="sliderData.length === 0" />
		<swiper v-else :options="swiperOption" class="super-slider-box">
			<swiper-slide v-for="(slide, index) in sliderData" class="super-slider-container glass-bg box-show" :key="index">
				<img :src="slide.sliderImg" class="super-slider-img"/>
			</swiper-slide>
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>

		<a class="p-n-btn prev-btn ban-select"></a>
		<a class="p-n-btn next-btn ban-select"></a>
	</div>
</template>

<script>
  import {swiper, swiperSlide} from 'vue-awesome-swiper'
  import PageLoading from '../loading/PageLoading.vue'

  import 'swiper/dist/css/swiper.css'

  export default {
    name: 'SlideBox',

    components: {
      PageLoading, swiper, swiperSlide
    },

    props: {
      sliderData: {
        type: Array,
        default: () => {
          return []
        }
      }
    },

    data () {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },

          navigation: {
            prevEl: '.prev-btn',
            nextEl: '.next-btn'
          },

          effect: 'coverflow',
          slidesPerView: 1.1,
          centeredSlides: true,
          coverflowEffect: {
            rotate: 30,
            stretch: 18,
            depth: 88,
            modifier: 2,
            slideShadows: true
          },

          autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: false
          },

          loop: true, // 循环

          lazy: {
            loadPrevNext: true,
            loadOnTransitionStart: true,
            preloaderClass: 'my-lazy-preloader'
          }
        }
      }
    }
  }
</script>

<style scoped>
  .super-slider {
    width:100%; height:100%; position:relative;
  }
  .super-slider-box {
    width:100%; height:100%; padding-bottom:22px; position:relative;
  }
  .super-slider-container {
    padding:3px; border-radius:3px;
  }
  .super-slider-container > .super-slider-img {
    width:100%; height:100%; border-radius:3px;
  }

	.swiper-pagination {
    bottom:0; padding-bottom:4px; position:absolute;
	}
	.swiper-pagination >>> .swiper-pagination-bullet {
		width:28px;
		height:3px;
		background:#888;
		opacity:1;
		border-radius:0;
	}
	.swiper-pagination >>> .swiper-pagination-bullet-active {
		background:#24C9FF;
	}

	.p-n-btn {
    width:36px; height:68px; top:50%; position:absolute; display:inline-block; transform:translate(0,-50%);
		background:url('../../../../../static/images/button/button.png') no-repeat;
		background-size:auto 103%;
	}
	.p-n-btn.prev-btn {
    left:-50px; background-position:0 0;
	}
	.p-n-btn.prev-btn:hover {
		background-position:-38px 0;
	}
	.p-n-btn.next-btn {
    right:-50px; background-position:-78px 0;
	}
	.p-n-btn.next-btn:hover {
		background-position:-116px 0;
	}
</style>
