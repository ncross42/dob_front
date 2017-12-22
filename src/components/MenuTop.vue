<template>
  <router-link :to="menu.link">
    <q-collapsible icon-toggle :icon="menu.icon" :label="menu.title"/>
      <nested-menu :is="menu.children" v-bind:children="menu.children" />
    </q-collapsible>
  </router-link>
</template>

<script>
import NestedMenu from './NestedMenu';
import { 
  QCollapsible, QBtn, QIcon, QList, QItemTile, 
} from "quasar"; 

export default {
  name: "menu-top",
  props: ['menu'],
  components: {
    NestedMenu, QCollapsible, QBtn, QIcon, QList, QItemTile,
  },
  data() {
    return { }
  },
  computed: {},
  methods: {},
  mounted() {},
  beforeDestroy() {}
};
</script>