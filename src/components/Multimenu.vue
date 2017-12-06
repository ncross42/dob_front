<template>
  <!-- Right Side Panel -->
  <div id="multimenu">
     <!-- <q-btn flat @click="$refs.layout.hideRight()" class="pull-right">
        <q-icon name="close" />
      </q-btn>
      <q-list no-border link inset-separator>
        <q-list-header>Essential Links</q-list-header>
        <q-side-link item to="/chat">
          <q-item-side icon="chat" />
          <q-item-main label="Gitter Channel" sublabel="Quasar Lobby" />
        </q-side-link>
        <q-side-link item to="/twitter">
          <q-item-side icon="rss feed" />
          <q-item-main label="Twitter" sublabel="@quasarframework" />
        </q-side-link>
      </q-list>  -->
    <div class="nav">
      <ul class="nav__list">
        <li>
          <input id="group-1" type="checkbox" hidden />
          <label for="group-1"><i class="material-icons">chevron_right</i> First level</label>
          <ul class="group-list">
            <li><a href="#">1st level item</a></li>
            <li>
              <input id="sub-group-1" type="checkbox" hidden />
              <label for="sub-group-1"><i class="material-icons">chevron_right</i> Second level</label>
              <ul class="sub-group-list">
                <li><a href="#">2nd level nav item</a></li>
                <li><a href="#">2nd level nav item</a></li>
                <li><a href="#">2nd level nav item</a></li>
                <li>
                  <input id="sub-sub-group-1" type="checkbox" hidden />
                  <label for="sub-sub-group-1"><i class="material-icons">chevron_right</i> Third level</label>
                  <ul class="sub-sub-group-list">
                    <li><a href="#">3rd level nav item</a></li>
                    <li><a href="#">3rd level nav item</a></li>
                    <li><a href="#">3rd level nav item</a></li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <!-- <li>
          <input id="group-2" type="checkbox" hidden />
          <label for="group-2"><i class="material-icons">chevron_right</i> First level</label>
          <ul class="group-list">
            <li>
              <li><a href="#">1st level item</a></li>
              <li><a href="#">1st level item</a></li>
              <input id="sub-group-2" type="checkbox" hidden />
              <label for="sub-group-2"><i class="material-icons">chevron_right</i> Second level</label>
              <ul class="sub-group-list">
                <li><a href="#">2nd level nav item</a></li>
                <li><a href="#">2nd level nav item</a></li>
                <li>
                  <input id="sub-sub-group-2" type="checkbox" hidden />
                  <label for="sub-sub-group-2"><i class="material-icons">chevron_right</i> Third level</label>
                  <ul class="sub-sub-group-list">
                    <li><a href="#">3rd level nav item</a></li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <input id="group-4" type="checkbox" hidden />
          <label for="group-4"><i class="material-icons">chevron_right</i> First level</label>
          <ul class="group-list">
            <li>
              <li><a href="#">1st level item</a></li>
              <input id="sub-group-4" type="checkbox" hidden />
              <label for="sub-group-4"><i class="material-icons">chevron_right</i> Second level</label>
              <ul class="sub-group-list">
                <li><a href="#">2nd level nav item</a></li>
                <li><a href="#">2nd level nav item</a></li>
              </ul>
            </li>
          </ul>
        </li> -->
      </ul>
    </div>
  </div>
</template>

<script>
import {
  openURL, QBtn, QIcon, QList, QListHeader, QItem, QItemSide, QItemMain, QSideLink, QSearch, Dialog, 
  QCollapsible, QChip, QItemTile
} from "quasar";

export default {
  name: "multimenu",
  components: {
    QBtn, QIcon, QList, QListHeader, QItem, QItemSide, QItemMain, QSideLink, QSearch, 
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
#multimenu
  div, span, p, pre, a, img, ul, li, label, legend {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline
    display: block
  }
  ol, ul { list-style: none }
  blockquote, q { quotes: none }
  blockquote:before, blockquote:after, q:before, q:after {
    content: '';
    content: none
  }
  table {
    border-collapse: collapse;
    border-spacing: 0
  }
  body {
    font: 100% "roboto", "Trebuchet MS", sans-serif;
    background-color:#EF476F;
  }
  a { text-decoration: none; }
  // Styling top level items
  .nav a, .nav label {
    display: block;
    padding: .85rem;
    color: #fff;
    background-color: #151515;
    box-shadow: inset 0 -1px #1d1d1d;
    -webkit-transition: all .25s ease-in;
    transition: all .25s ease-in;
  }
  .nav a:focus, .nav a:hover, .nav label:focus, .nav label:hover {
    color: rgba(255, 255, 255, 0.5);
    background: #030303;
  }
  .nav label { cursor: pointer; }

  // Styling first level lists items
  .group-list a, .group-list label {
    padding-left: 2rem;
    background: #252525;
    box-shadow: inset 0 -1px #373737;
  }
  .group-list a:focus, .group-list a:hover, .group-list label:focus, .group-list label:hover { background: #131313; }

  // Styling second level list items
  .sub-group-list a, .sub-group-list label {
    padding-left: 4rem;
    background: #353535;
    box-shadow: inset 0 -1px #474747;
  }
  .sub-group-list a:focus, .sub-group-list a:hover, .sub-group-list label:focus, .sub-group-list label:hover { background: #232323; }

  // Styling third level list items
  .sub-sub-group-list a, .sub-sub-group-list label {
    padding-left: 6rem;
    background: #454545;
    box-shadow: inset 0 -1px #575757;
  }
  .sub-sub-group-list a:focus, .sub-sub-group-list a:hover, .sub-sub-group-list label:focus, .sub-sub-group-list label:hover { background: #333333; }

  // Hide nested lists
  .group-list, .sub-group-list, .sub-sub-group-list {
    height: 100%;
    max-height: 0;
    overflow: hidden;
    -webkit-transition: max-height .2s ease-in-out;
    transition: max-height .2s ease-in-out;
  }
  .nav__list input[type=checkbox]:checked + label + ul { /* reset the height when checkbox is checked */
  max-height: 1000px; }

  // Rotating chevron icon
  label > i {
    float: right;
    -webkit-transition: -webkit-transform .25s ease;
    transition: transform .25s ease;
  }
  .nav__list input[type=checkbox]:checked + label > i {
    -webkit-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    transform: rotate(90deg);
  }
</style>
