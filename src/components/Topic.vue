<template>

  <div>

    <q-card>
      <q-card-title>
        <img src="~assets/icons/ic-topic-05.svg" class="icon"/>
        인기 발의
      </q-card-title>
      <q-card-main>
        <q-carousel arrows handle-arrow-keys dots fullscreen infinite autoplay class="text-black">
          <div slot="slide" class="bg-primary"> Slide 1 </div>
          <div slot="slide" class="bg-secondary"> Slide 2 </div>
          <div slot="slide" class="bg-tertiary"> Slide 3 </div>
          <div slot="slide" v-for="item in 4" :key="item">
            Slide {{item}}
          </div>
        </q-carousel>
      </q-card-main>
    </q-card>

    <div id="main_bbs">
      <div class="bbs_container">
        <div class="bbs_title">
          <img src="~assets/icons/ic-topic-02.svg" />
          <b>최근 게시글</b>
        </div>
        <div class="bbs_list">
          <template v-for="item in arrBoardNew" >
            <board-line :title="item.title" :date="item.date" />
          </template>
        </div>
      </div>
      <div class="bbs_container">
        <div class="bbs_title">
          <img src="~assets/icons/ic-topic-03.svg" />
          <b>주간 인기 게시글</b>
        </div>
        <div class="bbs_list">
          <template v-for="item in arrBoardNew" >
            <board-line :title="item.title" :date="item.date" />
          </template>
        </div>
      </div>
    </div>

    <q-card>
      <q-card-title>
        <img src="~assets/icons/ic-topic-04.svg"/>
        최근 발의
      </q-card-title>
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
import BoardLine from './BoardLine';

import { QCard, QCardTitle, QCardMain, QCarousel } from 'quasar'
import Slick from 'vue-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default {
  name: 'main',
  components: {
    QCard, QCardTitle, QCardMain, QCarousel,
    Slick,
    BoardLine
  },
  data () {
    return {
      // `v-model` binded to `group`,
      // which must be an array for checkboxes and toggles
      arrBoardNew: [
        { title: '개방형 직위 7개 공모', date: '17.11.22' },
        { title: '개방형 직위 7개 공모합니다 border', date: '17.11.22' },
        { title: '개방형 직위 7개 border spaces 개방형 직위 7개 border spaces', date: '17.11.22' },
        { title: '개방형 직위 7개 공모', date: '17.11.22' },
        { title: '개방형 직위 7개 공모합니다 border', date: '17.11.22' },
        { title: '개방형 직위 7개 border spaces 개방형 직위 7개 border spaces', date: '17.11.22' },
      ],
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
.icon
  display: inline-block;
  width: 25px;
  height: 25px;
#main_bbs
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  margin: 8px;
  .bbs_container
    // margin: 8px;
    padding: 4px;
    @media screen and (max-width: 420px)
      width: 100%;
    @media screen and (min-width: 421px)
      width: 420px;
    border: 1px solid silver;
    border-radius: 2px;
    box-shadow: 0 1px 5px rgba(0,0,0,0.2), 0 2px 2px rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12);
    .bbs_title
      padding: 4px;
    .bbs_list
      font-size: 0.9rem;
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