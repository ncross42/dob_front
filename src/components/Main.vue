<template>
  <!-- <q-option-group
    color="secondary"
    type="checkbox"
    v-model="group"
    :options="[
      { label: 'Option 1', value: 'op1' },
      { label: 'Option 2', value: 'op2' },
      { label: 'Option 3', value: 'op3' }
    ]"
  /> -->

  <div>

    <q-card>
      <q-card-title>Card Title</q-card-title>
      <q-card-main>
        <q-carousel arrows handle-arrow-keys dots fullscreen infinite autoplay class="text-black">
          <div slot="slide" class="bg-primary">
            Slide 1
          </div>
          <div slot="slide" class="bg-secondary">
            Slide 2
          </div>
          <div slot="slide" class="bg-tertiary">
            Slide 3
          </div>
          <div slot="slide" v-for="item in 4" :key="item">
            Slide {{item}}
          </div>
        </q-carousel>
      </q-card-main>
    </q-card>

    <q-card>
      <q-card-title>Card Title</q-card-title>
      <q-card-main class="slick-container">
        <slick ref="slick" :options="slickOptions">
          <div><h3>1</h3></div>
          <div style="height:180px;"><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div style="height:240px;"><h3>4</h3></div>
        </slick>
      </q-card-main>
    </q-card>

  </div>
</template>

<script>
import { QCard, QCardTitle, QCardMain, QCarousel } from 'quasar'
import Slick from 'vue-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default {
  name: 'main',
  components: {
    QCard, QCardTitle, QCardMain, QCarousel,
    Slick
  },
  data () {
    return {
      // `v-model` binded to `group`,
      // which must be an array for checkboxes and toggles
      group: ['opt1'],
      slickOptions: {
        dots: true,
        arrows: false,
        infinite: true, // default
        // autoplay: true,
        // autoplaySpeed: 1000,
        adaptiveHeight: true,
        centerMode: true,
        centerPadding: '20%',
        slidesToShow: 1,
        // responsive: [
        //   {
        //     breakpoint: 600,
        //     settings: {
        //       adaptiveHeight: true,
        //       centerPadding: '60px',
        //       slidesToShow: 1
        //     }
        //   }, {
        //     breakpoint: 300,
        //     settings: {
        //       adaptiveHeight: true,
        //       centerPadding: '40px',
        //       slidesToShow: 1
        //     }
        //   }
        // ]
      },
    }
  },
  // All slick methods can be used too, example here
  methods: {
    // next() {
    //   this.$refs.slick.next();
    // },
    // prev() {
    //   this.$refs.slick.prev();
    // },
    // reInit() {
    //   // Helpful if you have to deal with v-for to update dynamic lists
    //   this.$nextTick(() => {
    //     this.$refs.slick.reSlick();
    //   });
    // },
  },
  mounted() {
    this.$nextTick(() => {
      // 모든 화면이 렌더링된 후 실행합니다.
    });

    $('#slickdemo').slick({
    });
  }
}
</script>

<style lang="stylus">
.q-card-main.slick-container
  background-color lightblue
  padding 0px 0px 1px 0px
  // @media screen and (min-width: 600px)
  //   padding 0px 5px 1px 5px
// .slick-initialized
//   @media screen and (min-width: 600px)
//     margin 0px 20px
.slick-slider
  display:block;
.slick-slide
  border: 1px solid silver;
  display:table-cell;
  vertical-align:middle;
  z-index: 1
.slick-current
  background-color lightgray
  z-index: 100
  transform: scale(1.1);
</style>