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
export default {
  mounted() {
    // eslint-disable-next-line no-console
    console.log(this.$store);
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
    evenOrOdd() {
      return this.$store.state.evenOrOdd;
    }
  },
  methods: {
    increment() {
      this.$store.dispatch("increment");
    },
    decrement() {
      this.$store.dispatch("decrement");
    },
    incrementIfOdd() {
      this.$store.dispatch("incrementIfOdd");
    },
    incrementAsync() {
      this.$store.dispatch("incrementAsync");
    }
  }
};
</script>

<style scoped>
button {
  margin: 10px;
  color: red;
  background: yellow;
}
</style>

