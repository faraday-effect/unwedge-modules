<template>
  <div id="app">
    <now-is-the-time />
    <add-sub />
    <img alt="Vue logo" src="./assets/logo.png" />
    <ul>
      <li>
        At the tone, the time will be
        {{ whatTime }}
      </li>
      <li>We add: {{ addTwo(17, 42) }}</li>
      <li>We subtract: {{ minusTwo(17, 42) }}</li>
    </ul>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
// import { nowJavaScript } from "js-simple-module";
// import { nowTypeScript } from "ts-simple-module";

// import { now, plus, minus } from "js-normal-module";

import { now, plus, minus } from "ts-normal-module";
import { NowIsTheTime, AddSub } from "vue-sfcs";

export default {
  name: "App",
  components: {
    HelloWorld,
    NowIsTheTime,
    AddSub
  },
  methods: {
    addTwo(a, b) {
      return plus(a, b);
    },
    minusTwo(a, b) {
      return minus(a, b);
    }
  },
  computed: {
    whatTime() {
      return now();
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
