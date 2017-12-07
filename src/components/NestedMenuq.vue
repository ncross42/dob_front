<template>
  <div>
    <template v-if="menu.children">
      <router-link :to="menu.url" :data-title="menu.title">
        <q-collapsible icon-toggle :icon="menu.icon" :label="menu.title"/>
          <div class="mm_indent">
            <nested-menuq :menu="one" v-for="one in menu.children" :key="one.url" />
          </div>
        </q-collapsible>
      </router-link>
    </template>
    <template v-else>
      <q-item separator tag="label" link :to="menu.url" :data-title="menu.title">
        {{menu.title}}
      </q-item>
    </template>
  </div>
</template>

<script>
import { QCollapsible, QBtn, QItem, QItemMain } from "quasar"; 

export default {
  name: "nested-menuq",
  props: ['menu'],
  components: { QCollapsible, QBtn, QItem, QItemMain },
  data() { return {} },
  computed: {},
  methods: {},
  created() {
    // console.log('created : ' + this.menu.title) 
  },
  mounted() {
    // console.log('mounted : ' + this.menu.title)
  },
  beforeDestroy() {}
};
</script>

<style lang="stylus">
.mm_indent
  padding-left 1rem
</style>