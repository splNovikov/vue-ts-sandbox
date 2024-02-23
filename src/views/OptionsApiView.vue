<template>
  <h1>(Options API)</h1>
  <p>{{ name }} - {{ age }}</p>
  <button type="button" @click="changeName('aa')">Change Name</button>
  <button type="button" @click="changeAge(22)">Change Age</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeView",
  components: {},
  data() {
    return {
      name: "Link",
      age: 25 as string | number,
    };
  },
  methods: {
    changeName(name: string) {
      return (this.name = name);
    },
    changeAge(age: number | string) {
      return (this.age = age);
    },
  },
});
</script>
