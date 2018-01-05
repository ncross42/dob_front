<template>
  <!-- Left Side Panel -->
  <div id="personal" class="row">
    <q-btn flat @click="$parent.toggleLeft()"> <q-icon name="arrow_back" /> </q-btn>
    <q-card-actions id="account" class="shadow-1">
      <q-btn outline>
        <q-icon size="4rem" name="account_circle" />
      </q-btn>
      <q-side-link to="/Login">
        <div class="column">
          <span class="text-primary plz-login" >로그인이 필요합니다.</span>
          <q-btn flat class="text-secondary text-bold">
            <span>로그인 하러가기</span>
            <q-icon name="forward"/>
          </q-btn>
        </div>
      </q-side-link>
    </q-card-actions>
          
    <q-card id="notice">
      <div class="card_title">
        <img src="~assets/icons/ic-topic-09.svg" />
        <b>공지사항</b>
      </div>
      <div class="card_main">
        <template v-for="(item,i) in arrNotice" >
          <board-line :title="item.title" :date="item.date" />
        </template>
      </div>
    </q-card>

    <q-card id="top_hier" class="top_list">
      <div class="card_title">
        <img src="~assets/icons/ic-topic-07.svg" />
        <b>인기계층</b>
      </div>
      <div class="card_main">
        <div class="row list_header">
          <div class="col_name">계층</div>
          <div class="col_badge new_bbs">토론</div>
          <div class="col_badge new_offer">발의</div>
        </div>
        <router-link to="home">
          <div class="row q-item-link list_tr">
            <div class="col_name bread_hier">
              <i>대한민국</i> <i>서울시</i> <i>서초구</i> <i>반포1동</i>
            </div>
            <div class="col_badge new_bbs"><span class="new_bbs">14</span></div>
            <div class="col_badge new_offer"><span class="new_offer">7</span></div>
          </div>
        </router-link>
        <router-link to="home">
          <div class="row q-item-link list_tr">
            <div class="col_name bread_hier">
              <i>서울시</i> <i>서초구</i> <i>반포1동</i>
            </div>
            <div class="col_badge new_bbs"><span class="new_bbs">14</span></div>
            <div class="col_badge new_offer"><span class="new_offer">7</span></div>
          </div>
        </router-link>
        <router-link to="home">
          <div class="row q-item-link list_tr">
            <div class="col_name bread_hier">
              <i>대한민국</i> <i>서울시</i> <i>서초구</i> <i>반포1동</i>
            </div>
            <div class="col_badge new_bbs"><span class="new_bbs">14</span></div>
            <div class="col_badge new_offer"><span class="new_offer">7</span></div>
          </div>
        </router-link>
      </div>
    </q-card>

    <q-card id="top_group" class="top_list">
      <div class="card_title">
        <img src="~assets/icons/ic-topic-08.svg" />
        <b>인기단체</b>
      </div>
      <div class="card_main">
        <div class="row list_header">
          <div class="col_name">단체</div>
          <div class="col_badge new_bbs">토론</div>
          <div class="col_badge new_offer">발의</div>
        </div>
        <router-link to="home">
          <div class="row q-item-link list_tr">
            <div class="col_name"> 그린피스 </div>
            <div class="col_badge new_bbs"><span class="new_bbs">14</span></div>
            <div class="col_badge new_offer"><span class="new_offer">7</span></div>
          </div>
        </router-link>
        <router-link to="home">
          <div class="row q-item-link list_tr">
            <div class="col_name">원전당</div>
            <div class="col_badge new_bbs"><span class="new_bbs">14</span></div>
            <div class="col_badge new_offer"><span class="new_offer">7</span></div>
          </div>
        </router-link>
        <router-link to="home">
          <div class="row q-item-link list_tr">
            <div class="col_name">재생당</div>
            <div class="col_badge new_bbs"><span class="new_bbs">14</span></div>
            <div class="col_badge new_offer"><span class="new_offer">7</span></div>
          </div>
        </router-link>
        <router-link to="home">
          <div class="row q-item-link list_tr">
            <div class="col_name"> 전국청년정책네트워크 abcde abcde </div>
            <div class="col_badge new_bbs"><span class="new_bbs">14</span></div>
            <div class="col_badge new_offer"><span class="new_offer">7</span></div>
          </div>
        </router-link>
      </div>
    </q-card>

    <q-list no-border link inset-separator>
      <q-list-header>Essential Links</q-list-header>
      <q-side-link item to="/docs">
        <q-item-side icon="school" />
        <q-item-main label="Docs" sublabel="quasar-framework.org" />
      </q-side-link>
    </q-list>
  </div>
</template>

<script>
import BoardLine from './BoardLine';

import {
  openURL, QBtn, QIcon, QList, QListHeader, QItem, QItemSide, QItemMain, QSideLink, QTabs, QRouteTab, QSearch, Dialog, 
  QCard, QCardTitle, QCardMain, QCardActions, QCardMedia, QCardSeparator,
  QCollapsible, QChip, QItemTile
} from "quasar";

export default {
  name: "index",
  components: {
    QBtn, QIcon, QList, QListHeader, QItem, QItemSide, QItemMain, QSideLink, QTabs, QRouteTab, QSearch, 
    QCard, QCardTitle, QCardMain, QCardActions, QCardMedia, QCardSeparator,
    QCollapsible, QChip, QItemTile,
    BoardLine
  },
  data() {
    return {
      arrNotice: [
        { title: '개방형 직위 7개 공모', date: '17.11.22' },
        { title: '개방형 직위 7개 공모합니다 border', date: '17.11.22' },
        { title: '개방형 직위 7개 border spaces', date: '17.11.22' },
      ],
    };
  },
  computed: {},
  methods: {
    launch(url) {
      openURL(url);
    },
    showDialog() {
      // "this" here refers to current component
      console.log(this.variable); // prints: "alright"
      Dialog.create({
        title: "Some title",
        message: "Some message",
        buttons: [
          "Cancel",
          {
            label: "Empty Trash Bin",
            handler() {
              // "this" refers to the scope of this method only, not your Vue component
              console.log(this.variable); // prints: undefined
            }
          }
        ]
      });
    }
  },
  mounted() {},
  beforeDestroy() {}
};
</script>

<style lang="stylus">
#personal 
  .q-card-actions
    width 100%
  .q-card
    .card_title
      display: flex;
      align-items: center;
      padding: 4px 16px 0px 16px
      img
        padding-right: 8px;
    .card_main
      padding: 0px 16px
  #account
    margin 0.5rem
    padding 0.5rem 1rem
    text-align center
    .plz-login 
      padding-left 0.5rem
  #notice
    .board
      display flex
      font-size 0.9rem
      justify-content space-between
      margin 0.2rem 0.0rem
    .board-tick
      width 0.3rem
      background orange
    .board-title
      width 12.0rem
      overflow hidden
      word-wrap normal
      white-space nowrap
      text-overflow ellipsis
      margin-left 0.2rem
    .board-date
      margin-left auto
      color red
      font-size 0.8rem
      line-height 1.45rem
  .top_list
    border-radius: 5px;
    border: 1px solid silver;
    text-align center
    .col_name
      color: #000;
      width 182px
    .col_badge
      width 34px
      // text-align center
      // content-align center
      // .badge
      //   color #fff
      //   font bold 0.8rem normal
      //   height 1.6rem
      //   padding 0px 5px 1px 5px
      //   border-radius: 15px;
      //   vertical-align middle
      // .new_bbs
      //   background-color orange
      // .new_offer
      //   background-color red
    .new_bbs
      color orange
    .new_offer
      color red
    .list_header
      font-size 0.9rem
      text-align center
      font-weight: bold
    .list_tr
      border-top 1px solid silver
      font-size 0.9rem
      &.q-item-link
        .col_name
          text-align left
          // padding-left 1.7rem
          // &:before
          //   // font-family: "Material Icons"
          //   // content: "\E877"
          //   // content: url('/statics/boy-avatar.png');
          //   // content: "\e7ef"
          //   content: "\1F3C6"
          //   float: left;
          //   margin-left: -1.7rem
      .bread_hier
        font 0.9rem normal
        font-weight normal
        // &:before
        //   // font-family: "Material Icons"
        //   // content: "\E877"
        //   // content: url('/statics/boy-avatar.png');
        //   content: "\1F3C6"
        //   float: left;
        //   margin-left: -1.5rem
        i
          text-decoration: none;
          font-style: normal
          color: #000;
        i:after
          content: "\276F";
          font-weight: bold;
          color orange
        i:first-child:before
          content: " ";
        i:last-child:after
          content: "";

// .layout-aside-right
// .layout-aside-left
// @media screen and (min-width 440px)
// width 400px
.logo-container 
  width 255px
  height 242px
  perspective 800px
  position absolute
  top 50%
  left 50%
  transform translateX(-50%) translateY(-50%)

.logo 
  position absolute
  transform-style preserve-3d
</style>
