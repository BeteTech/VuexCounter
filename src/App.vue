<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <Counter></Counter>
    <Counter2></Counter2>
  </div>
</template>

<script>
import Counter from "./components/Counter";
import Counter2 from "./components/Counter2";

export default {
  name: "app",
  components: {
    Counter,
    Counter2
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
