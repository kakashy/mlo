<template>
  <header>
    <a href="/">MLO</a>
    <p>{{ date ?? "😊" }}</p>
  </header>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
export default class Header extends Vue {
  data(): { date: string } {
    return {
      date: new Date().toDateString(),
    };
  }
}
</script>

<style scoped>
header {
  height: 55px;
  background-color: #222830;
  color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  box-sizing: border-box;
  box-shadow: #00000020 0px 3px 7px;
  font-size: 1.2rem;
}
a {
  text-decoration: none;
  font-weight: 700;
  padding: 2px;
  border-radius: 3px;
  color: rgb(51, 192, 122);
}
a:hover {
  background-color: #00000020;
}
p {
  opacity: 0.2;
  font-size: 0.7rem;
}
</style>
