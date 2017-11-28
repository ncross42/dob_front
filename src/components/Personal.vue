<template>
  <!-- Left Side Panel -->
  <div id="personal" class="row">
    <!-- <q-btn flat @click="$refs.layout.hideLeft()"> <q-icon name="arrow_back" /> </q-btn> -->
    <q-card-actions id="account" class="shadow-1">
      <q-btn outline>
        <q-icon size="4em" name="account_circle" />
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
      <q-collapsible group="somegroup1" class="text-bold" icon="error_outline" label="공지사항" opened>
        <q-list no-border>
          <div class="bbs row">
            <div class="bbs-tick"></div>
            <div class="bbs-title text-primary">
              개방형 직위 7개 공모
            </div>
            <div class="bbs-date">17.11.22</div>
          </div>
          <div class="bbs row">
            <div class="bbs-tick"></div>
            <div class="bbs-title text-primary">
              개방형 직위 7개 공모합니다 border
            </div>
            <div class="bbs-date">17.11.22</div>
          </div>
          <div class="bbs row">
            <div class="bbs-tick"></div>
            <div class="bbs-title text-primary">
              개방형 직위 7개 border spaces
            </div>
            <div class="bbs-date">17.11.22</div>
          </div>
        </q-list>
      </q-collapsible>
    </q-card>

    <q-card id="top_hier">
      <q-collapsible group="somegroup2" class="text-bold" icon="filter_list" label="인기계층" opened>
        <table width="100%" cellpadding="1" cellspacing="1" align="center">
          <thead>
            <tr>
              <th class="col_name">계층</th>
              <th class="col_badge new_bbs">토론</th>
              <th class="col_badge new_offer">발의</th>
            </tr>
          </thead>
          <tbody>
            <tr class="q-item-link">
              <td class="col_name">
                <div class="col_name hier_bread">
                  <i>대한민국</i>
                  <i>서울시</i>
                  <i>서초구</i>
                  <i>반포1동</i>
                </div>
              </td>
              <td class="col_badge">
                <span class="badge new_bbs">14</span>
              </td>
              <td class="col_badge">
                <span class="badge new_offer">7</span>
              </td>
            </tr>
          </tbody>
        </table>
      </q-collapsible>
    </q-card>

    <q-card>
      <q-collapsible group="somegroup3" class="text-bold" icon="group" label="인기단체" opened>
        <div>
          Content
          <q-item>
            <q-item-side avatar="/statics/boy-avatar.png" />
            <q-item-main>
              <q-item-tile label>John Doe</q-item-tile>
              <q-item-tile sublabel>Quasar enthusiast</q-item-tile>
            </q-item-main>
            <q-item-side right>
              <q-item-tile icon="chat_bubble" color="green" />
            </q-item-side>
          </q-item>
          <q-item>
            <q-item-side>
                <q-icon name="panorama_vertical" />
            </q-item-side>
            <q-item-main label="John Doe" sublabel="Quasar enthusiast" />
            <q-item-side right icon="chat_bubble" />
          </q-item>
        </div>
      </q-collapsible>
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
    QCollapsible, QChip, QItemTile
  },
  data() {
    return {
      variable: "alright"
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
  .q-card
  .q-card-actions
    width 100%
  #account
    margin 0.5em
    padding 0.5em 1em
    text-align center
    .plz-login 
      padding-left 0.5em
  #notice
    .bbs
      font-size 0.9em
      justify-content space-between
      margin 0.2em 0.0em
    .bbs-tick
      width 0.3em
      background orange
    .bbs-title
      width 13.5em
      overflow hidden
      word-wrap normal
      white-space nowrap
      text-overflow ellipsis
      margin-left 0.2em
    .bbs-date
      margin-left auto
      color red
      font-size 0.8em
      line-height 1.8em
  #top_hier
    border-radius: 10px;
    border: 1px solid silver;
    text-align left
    .new_bbs
      color orange
    .new_offer
      color red
    table
      table-layout fixed
      border-collapse collapse
      text-align center
      tr
        border-bottom 1px solid silver
      thead
        th
          font-size 0.8em
        .col_name
          width 170px
          text-align left
          padding-left 2.0em
        .col_badge
          width 34px
      tbody
        td
          font-size 1.0em
        .col_name
          text-align left
          padding-left: 0.7em
        .col_badge
          width 34px
          text-align center
          content-align center
          .badge
            color #fff
            font bold 0.8em normal
            height 1.6em
            padding 0px 5px 1px 5px
            border-radius: 15px;
            vertical-align middle
          .new_bbs
              background-color orange
          .new_offer
              background-color red
        .hier_bread
          font 0.8em normal
          &:before
            // font-family: "Material Icons"
            // content: "\E877"
            // content: url('/statics/boy-avatar.png');
            content: "\1F3C6"
            float: left;
            margin-left: -1.5em
          i
            text-decoration: none;
            font-style: normal
            font-weight: bold;
            color: #000;
          i:after
            content: "\276F";
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
