import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function load (component) {
  // '@' is aliased to src/components
  return () => import(`@/${component}.vue`)
}

export default new VueRouter({
  /*
   * NOTE! VueRouter "history" mode DOESN'T works for Cordova builds,
   * it is only to be used only for websites.
   *
   * If you decide to go with "history" mode, please also open /config/index.js
   * and set "build.publicPath" to something other than an empty string.
   * Example: '/' instead of current ''
   *
   * If switching back to default "hash" mode, don't forget to set the
   * build publicPath back to '' so Cordova builds work again.
   */

  mode: 'hash',
  scrollBehavior: () => ({ y: 0 }),

  routes: [
    { path: '/l', component: load('Layout'),
      children: [
        { path: '/main', component: load('Main') },
        { path: '/register', component: load('Register') },
        { path: '/login', component: load('Login') },
        { path: '/category', component: load('Category') },
        { path: '/mystat', component: load('Mystat') },
        { path: '/allstat', component: load('Allstat') },
        { path: '/offer', component: load('Offer') },
        { path: '/elect', component: load('Elect') },
      ]
    },
    { path: '/h', component: load('Hello') },

    // Always leave this last one
    { path: '*', component: load('Error404') } // Not found
  ]
})
