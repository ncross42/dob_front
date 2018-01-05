<template>
  <div class="board">
    <div class="board-tick"></div>
    <div class="board-title text-primary">
      {{title}}
    </div>
    <div class="board-date">{{date}}</div>
  </div>
</template>

<script>
export default {
  name: "board-line",
  props: ['title', 'date'],
  data() { return {}; },
  computed: {},
  methods: {},
  mounted() {},
  beforeDestroy() {}
};
</script>

<style lang="stylus" scoped>
.board
  display flex  
  justify-content space-between
  margin 0.2em 0.0rem
.board-tick
  min-width 0.3rem
  background #FFD25C
.board-title
  // width 13.5rem
  overflow hidden
  word-wrap normal
  white-space nowrap
  text-overflow ellipsis
  margin-left 0.2rem
  line-height 1.6rem
.board-date
  margin-left auto
  color red
  line-height 1.6rem
</style>
