<template>
  <div>
    <h3>Click {{ count }} , count is {{ evenOrOdd }}</h3>
    <br />
    <button @click="increment">increment +</button><br />
    <button @click="decrement">decrement -</button><br />
    <button @click="incrementIfOdd">incrementIfOdd</button><br />
    <button @click="incrementAsync">incrementAsync</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapState(["count"]),
    ...mapGetters(["evenOrOdd"])
  },
  methods: {
    ...mapActions([
      "increment",
      "decrement",
      "incrementIfOdd",
      "incrementAsync"
    ])
  }
};
</script>

<style scoped>
button {
  margin: 10px;
}
</style>
