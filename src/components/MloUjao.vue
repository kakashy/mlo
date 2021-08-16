<template>
  <div class="main">
    <div class="title">
      <p>Mlo Ujao</p>
    </div>
    <div class="mlo-details">
      <p class="mlo-title">{{ mloNext.mlo }}</p>
      <p>{{ mloNext.maelezo }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import mlo from "../lib/ujao";
export default class MloUjao extends Vue {
  data() {
    return {
      mloNext: {},
    };
  }
  getUjao(): any {
    const food = new mlo();
    return food.ujao();
  }
  mounted() {
    this.mloNext = this.getUjao();
  }
}
</script>

<style scoped>
.main {
  margin: 40px 15px;
  padding: 5px;
  background-color: #ffffff10;
  box-shadow: #00000020 3px 3px 7px;
  border-radius: 5px;
}
.title {
  height: 40px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background-color: rgb(173, 23, 23);
  position: absolute;
  transform: translate(-5px, -20px);
}
.mlo-details {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.mlo-title {
  color: rgb(51, 192, 122);
  font-weight: 400;
  font-size: 2rem;
}

@media screen and (min-width: 550px) {
  .main {
    padding: 20px;
  }
  .title {
    transform: translate(-10px, -30px);
  }
  .mlo-details {
    flex-direction: row;
    justify-content: space-evenly;
  }
}
</style>
