<script setup>
console.log("hello vue!!");
const message = "yes it is";
</script>

<template>
  <h1>Vue 3 入門</h1>
  <p>{{ message.length * 10 }}</p>
  <p>{{ message.length * 10 > 10 ? 'long' : 'short' }}</p>
  <p>{{ message.length > 10 ? 'long' : 'short' }}</p>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
