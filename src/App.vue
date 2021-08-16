<template>
  <Header :date="leoNi" />
  <Greetings />
  <mlo-ujao />
  <footer-item />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "./components/HelloWorld.vue";
import Header from "./components/Header.vue";
import Greetings from "./components/Greetings.vue";
import MloUjao from "./components/MloUjao.vue";
import FooterItem from "./components/FooterItem.vue";

@Options({
  components: {
    HelloWorld,
    Header,
    Greetings,
    MloUjao,
    FooterItem,
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
