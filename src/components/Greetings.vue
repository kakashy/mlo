<template>
  <div class="main">
    <div class="icon">
      <p>ICON</p>
    </div>
    <div class="salamu">
      <p>{{ salamu() }}</p>
      <p class="wasaa">
        {{ `${new Date().getHours()}${new Date().getMinutes()}` }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
export default class Greetings extends Vue {
  salamu = (): string => {
    var d = new Date().getHours();
    switch (d) {
      case 5:
      case 7:
      case 8:
        return "Sabalkheri!";
      case 11:
      case 12:
      case 13:
        return "Jambo!";
      case 17:
      case 18:
      case 19:
      case 20:
      case 21:
      case 22:
      case 23:
        return "Msalkheri";
      default:
        return "Habari";
    }
  };
}
</script>

<style scoped>
.main {
  padding: 5px;
  margin: 30px 15px;
  border-radius: 5px;
  background-color: #ffffff10;
  box-shadow: #00000020 3px 3px 7px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.salamu {
  font-size: 1.5rem;
  margin: 0;
}
.wasaa {
  font-weight: 100;
  font-size: 4rem;
  margin: 0;
}

@media screen and (min-width: 550px) {
  .main {
    padding: 15px;
    flex-direction: row;
    justify-content: space-around;
  }
  .salamu {
    text-align: left;
  }
}
</style>
