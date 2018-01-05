<template>
  <!-- Right Side Panel -->
  <div id="menu_panel">

    <div id="mm_header">
      <q-btn id="btn_close" flat @click="$parent.toggleRight()" class="pull-right">
        <q-icon name="close" />
      </q-btn>
    </div>

    <!-- Home Menu -->
    <q-card v-for="one in arrMenu" :key="one.type">
      <nested-menuq :menu="one" />
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
import NestedMenuq from './NestedMenuq';
import {
  QBtn, QIcon, QCard, QCollapsible, QList, QListHeader, QSideLink, QItem, QItemSide, QItemMain, QSearch,
} from "quasar";

export default {
  name: "menu_panel",
  components: {
    NestedMenuq,
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
            // { lv: 1, title: '자유게시판', url: 'freeboard', },
            // { lv: 1, title: '문의사항', url: 'qna', },
          ]
        },
        // { type: 'hierarchy', icon: 'filter_list', title: '대한민국 (계층분류)', url: '/district',
        //   children: [
        //     { lv: 1, title: '서울특별시', url: 'seoul',
        //       children: [
        //         { lv: 2, title: '송파구', url: 'songpa', },
        //         { lv: 2, title: '강남구', url: 'gangnam', }, 
        //         { lv: 2, title: '서초구', url: 'seocho', },
        //       ]
        //     },
        //     { lv: 1, title: '부산광역시', url: 'busan',
        //       children: [
        //         { lv: 2, title: '중구', url: 'jung', },
        //         { lv: 2, title: '북구', url: 'book', }, 
        //         { lv: 2, title: '남구', url: 'nam', },
        //       ]
        //     },
        //   ]
        // }, 
        // { type: 'subject', icon: 'filter_list', title: '주제분류', url: '/subject',
        //   children: [
        //     { lv: 1, title: '교육', url: 'education', }, 
        //     { lv: 1, title: '노동', url: 'labor',
        //       children: [
        //         { lv: 2, title: '청소년', url: 'young', }, 
        //         { lv: 2, title: '청년', url: 'youth', },
        //         { lv: 2, title: '임시직', url: 'temporary', },
        //       ] 
        //     }, 
        //     { lv: 1, title: '주거', url: 'realestate', }
        //   ]
        // }, 
        // { type: 'group', icon: 'group', title: '단체분류', url: '/group',
        //   children: [
        //     { lv: 1, title: '그린피스', url: 'greenpeace', }, 
        //     { lv: 1, title: '원전당', url: 'nuclear', }, 
        //     { lv: 1, title: '재생당', url: 'renewable', }
        //   ]
        // }
      ]
    };
  },
  computed: {},
  methods: {},
  mounted() {},
  beforeDestroy() {}
};
</script>

<style lang="stylus">
@import '~variables'

#menu_panel
  .q-item
    padding 4px 8px
    i.q-icon
      font-size 2rem
  #mm_header
    width: 100%; 
    height: 2.2rem; 
    background-color: $warning // $primary $secondary
</style>
