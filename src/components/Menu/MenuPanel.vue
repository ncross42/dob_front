<template>
  <!-- Right Side Panel -->
  <div id="menu_panel">

    <div id="mm_header">
      <q-btn id="btn_close" flat @click="$parent.toggleRight()" class="pull-right">
        <q-icon name="close" />
      </q-btn>
    </div>

    <!-- Home Menu -->
    <q-card v-for="item in arrMenu" :key="item.type">
      <div class="nested2">
        <ul>
          <nested-menu v-if="item.children" :menu="item" />
        </ul>
      </div>
    </q-card>

    <q-card>
      <q-list no-border link inset-separator>
        <q-list-header>Essential Links</q-list-header>
        <q-side-link item to="/chat">
          <q-item-side icon="chat" />
          <q-item-main label="Gitter Channel" sublabel="Quasar Lobby" />
        </q-side-link>
      </q-list> 
    </q-card>

  </div>
</template>

<script>
import NestedMenu from './NestedMenu';
import {
  QBtn, QIcon, QCard, QCollapsible, QList, QListHeader, QSideLink, QItem, QItemSide, QItemMain, QSearch,
} from "quasar";

export default {
  name: "menu_panel",
  components: {
    NestedMenu,
    QBtn, QIcon, QCard, QCollapsible, QList, QListHeader, QSideLink, QItem, QItemSide, QItemMain, QSearch, 
  },
  data() {
    return {
      variable: "alright",
      arrMenu: [
        { type: 'home', icon: 'home', title: 'Home', url: '/',
          children: [
            { lv: 1, title: '소개', url: 'about', }, 
            { lv: 1, title: '공지', url: 'notice', }, 
            { lv: 1, title: '자유게시판', url: 'freeboard', },
            { lv: 1, title: '문의사항', url: 'qna', },
          ]
        },
        { type: 'hierarchy', icon: 'filter_list', title: '대한민국 (계층분류)', url: '/district',
          children: [
            { lv: 1, title: '서울특별시', url: 'seoul',
              children: [
                { lv: 2, title: '송파구', url: 'songpa', },
                { lv: 2, title: '강남구', url: 'gangnam', }, 
                { lv: 2, title: '서초구', url: 'seocho', },
              ]
            },
            { lv: 1, title: '부산광역시', url: 'busan',
              children: [
                { lv: 2, title: '중구', url: 'jung', },
                { lv: 2, title: '북구', url: 'book', }, 
                { lv: 2, title: '남구', url: 'nam', },
              ]
            },
          ]
        }, 
        { type: 'subject', icon: 'filter_list', title: '주제분류', url: '/subject',
          children: [
            { lv: 1, title: '교육', url: 'education', }, 
            { lv: 1, title: '노동', url: 'labor',
              children: [
                { lv: 2, title: '청소년', url: 'young', }, 
                { lv: 2, title: '청년', url: 'youth', },
                { lv: 2, title: '임시직', url: 'temporary', },
              ] 
            }, 
            { lv: 1, title: '주거', url: 'realestate', }
          ]
        }, 
        { type: 'group', icon: 'group', title: '단체분류', url: '/group',
          children: [
            { lv: 1, title: '그린피스', url: 'greenpeace', }, 
            { lv: 1, title: '원전당', url: 'nuclear', }, 
            { lv: 1, title: '재생당', url: 'renewable', }
          ]
        }
      ]
    };
  },
  computed: {},
  methods: {
    clickFolder2(event) {
      if (event) event.preventDefault()
      let el = event.target
      let label = el.tagName === 'I' ? el.parentElement : el;
      let chk = label.firstChild
      chk.checked = !(chk.checked)
      let a = label.parentElement
      a.setAttribute('pointer-events', 'none');
      let ul = a.nextElementSibling
      if (chk.checked) ul.classList.add('opened')
      else ul.classList.remove('opened')
    }
  },
  mounted() {},
  beforeDestroy() {}
};
</script>

<style lang="stylus">
@import '~variables'

#mm_header
  width: 100%; 
  height: 2.2rem; 
  background-color: #FFD25C; // $secondary

#menu_panel
  // div, span, p, pre, a, img, ul, li, label, legend {
  //   margin: 0;
  //   padding: 0;
  //   border: 0;
  //   font-size: 100%;
  //   font: inherit;
  //   vertical-align: baseline
  //   display: block
  // }
  ol, ul { list-style: none; margin: 0px; padding: 0px; }
  a { text-decoration: none; vertical-align: baseline; }
  // rotate icon
  i 
    font-size 2rem
    // float: right;
    -webkit-transition: -webkit-transform .25s ease;
    transition: transform .25s ease;
  label > input[type=checkbox]:checked + i
    -webkit-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    transform: rotate(90deg);

  // .nested1
  //   .mm_div
  //     justify-content space-between
  //     a, label
  //       display: inline-block;
  //       cursor: pointer;
  //       padding: .85rem;
  //       color: #000;
  //       background-color: #FFF1B8; // $primary;
  //       // box-shadow: inset 0 -1px #1d1d1d;
  //       -webkit-transition: all .25s ease-in;
  //       transition: all .25s ease-in;
  //       &:focus, &:hover
  //         color: rgba(255, 255, 255, 0.5);
  //         background: $faded
  //     .mm_title
  //       width 235px;
  //       overflow hidden
  //       word-wrap normal
  //       white-space nowrap
  //       text-overflow ellipsis
  //     .mm_folder
  //       padding: 0.5rem;
  //       margin-left auto
  //   // ul folder
  //   li ul
  //     height: 100%;
  //     // max-height: 0;
  //     display none
  //     overflow: hidden;
  //     -webkit-transition: max-height .2s ease-in-out;
  //     transition: max-height .2s ease-in-out;
  //   ul.opened
  //     // max-height 1000px
  //     display block
  //   ul.mm_indent
  //     margin-left 20px

  .nested2
    a, label
      display: inline-block;
      cursor: pointer;
      // padding: .85rem;
      color: #000;
      background-color: #FFF1B8; // primary
      // box-shadow: inset 0 -1px #1d1d1d;
      -webkit-transition: all .25s ease-in;
      transition: all .25s ease-in;
      // &:focus, &:hover
      //   color: rgba(255, 255, 255, 0.5);
      //   background: $faded
    .mm_a
      padding-left 5px
      width: 100%
    .mm_title
      padding 4px; // .5rem;
      margin 5px 0px
      overflow hidden
      word-wrap normal
      white-space nowrap
      text-overflow ellipsis
      vertical-align: middle; // baseline
      display: inline-block
      // z-index 1
    .mm_folder
      padding: 5px 8px; // 0.5rem;
      margin-left auto
      // z-index 100
      // color red
      background-color orange
    // ul folder
    li
      background-color: #FFF1B8; // $primary;
    li ul
      height: 100%;
      // max-height: 0;
      display none
      overflow: hidden;
      -webkit-transition: max-height .2s ease-in-out;
      transition: max-height .2s ease-in-out;
    ul.opened
      // max-height 1000px
      display block
    ul.mm_indent
      margin-left 20px

</style>