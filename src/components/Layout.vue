<template>
  <q-layout ref="layout" view="hHr LpR lFf" :right-breakpoint="1280">
    <!-- Header -->
    <q-toolbar slot="header">
      <q-btn flat @click="$refs.layout.toggleLeft()">
        <q-icon name="perm_identity" />
        <q-icon name="sentiment_satisfied" />
      </q-btn>
      <q-toolbar-title class="text-center">
        Layout Header
        <span slot="subtitle">Optional subtitle</span>
      </q-toolbar-title>

      <q-btn flat @click="showDialog()"> <q-icon name="search" /> </q-btn>

      <q-btn flat @click="$refs.layout.toggleRight()"> <q-icon name="menu" /> </q-btn>
    </q-toolbar>

    <!-- <div class="pull-right" style="max-width: 500px">
      <q-search v-model="search" color="none" />
    </div> -->

    <!-- Navigation -->
    <q-tabs slot="navigation" position="bottom" align="center">
      <q-route-tab slot="title" icon="list"        to="/test-layout/about"   replace hide="icon" label="공지"  />
      <q-route-tab slot="title" icon="star"        to="/test-layout/toolbar" replace hide="icon" label="즐겨찾기" />
      <q-route-tab slot="title" icon="filter_list" to="/test-layout/tabs"    replace hide="icon" label="지역계층" />
      <q-route-tab slot="title" icon="school"      to="/test-layout/drawer"  replace hide="icon" label="전문주제" />
    </q-tabs>

    <!-- Left Side Panel -->
    <div slot="left" class="no-scroll">
      <personal></personal>
    </div>

    <!-- Right Side Panel -->
    <div slot="right">
      <multimenu></multimenu>
    </div>

    <!-- sub-routes get injected here: -->
    <router-view />
    <!-- Footer -->
    <q-toolbar slot="footer">
      <q-toolbar-title>
        Layout Footer
      </q-toolbar-title>
    </q-toolbar>

  </q-layout>
</template>

<script>
import Personal from './Personal'
import Multimenu from './Multimenu'

import {
  openURL, QLayout, QToolbar, QToolbarTitle, QBtn, QIcon, QList, QListHeader, QItem, QItemSide, QItemMain, QSideLink, QTabs, QRouteTab, 
  QSearch, Dialog, QCard, QCardTitle, QCardMain, QCardActions, QCardMedia, QCardSeparator
} from 'quasar'

export default {
  name: 'layout',
  components: {
    QLayout, QToolbar, QToolbarTitle, QBtn, QIcon, QList, QListHeader, QItem, QItemSide, QItemMain, QSideLink, QTabs, QRouteTab, 
    QSearch, QCard, QCardTitle, QCardMain, QCardActions, QCardMedia, QCardSeparator,
    Personal, Multimenu
  },
  data () {
    return {
      variable: 'alright'
    }
  },
  computed: {
  },
  methods: {
    launch (url) {
      openURL(url)
    },
    showDialog () {
      // "this" here refers to current component
      console.log(this.variable) // prints: "alright"
      Dialog.create({
        title: 'Some title',
        message: 'Some message',
        buttons: [
          'Cancel',
          {
            label: 'Empty Trash Bin',
            handler () {
              // "this" refers to the scope of this method only, not your Vue component
              console.log(this.variable) // prints: undefined
            }
          }
        ]
      })
    },
  },
  mounted () {
  },
  beforeDestroy () {
  }
}
</script>

<style lang="stylus">
::-webkit-scrollbar
    display: none
aside
  overflow: hidden;
  // .no-scroll
  //   -ms-overflow-style none
  //   overflow: -moz-scrollbars-none;
  //   overflow-y: hidden;
  //   overflow-x: hidden;
.layout-aside-right
.layout-aside-left
  overflow: hidden;
  @media screen and (min-width: 440px)
    width 300px
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
