<template>
  <li>
    <!-- <div class="mm_div row">
      <router-link :to='menu.url' class="mm_title">{{menu.title}}</router-link>
      <label class="mm_folder">
        <input type="checkbox" hidden @click="clickFolder"/>
        <i class="material-icons">chevron_right</i>
      </label>
    </div> -->
    <router-link :to="menu.url" class="mm_a">
      <i class="material-icons" v-if="menu.icon">{{menu.icon}}</i>
      <div class="mm_title"> {{menu.title}} </div>
      <label v-if="menu.children" class="mm_folder pull-right" @click="clickFolder2">
        <input type="checkbox" hidden>
        <i class="material-icons">chevron_right</i>
      </label>
    </router-link>
    <ul v-if="menu.children" class="mm_indent">
      <nested-menu :menu="one" v-for="one in menu.children" :key="one.url"></nested-menu>
    </ul>
  </li>
</template>

<script>
export default {
  name: "nested-menu",
  props: ['menu'],
  components: {},
  data() {
    return { }
  },
  computed: {},
  methods: {
    // clickFolder(event) {
    //   // if (event) event.preventDefault()
    //   let el = event.target
    //   console.log('el.checked: ' + el.checked)
    //   let p = el.parentElement.parentElement.nextElementSibling
    //   if (el.checked) p.classList.add('opened')
    //   else p.classList.remove('opened')
    // },
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