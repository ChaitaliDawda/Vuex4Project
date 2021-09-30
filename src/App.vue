<template>
  <composition />
</template>

<script>
//import vuexTest from "./components/vuexTest.vue";
import composition from "./components/composition.vue";

export default {
  name: "App",
  components: {
   // vuexTest,
    composition,
  },
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
