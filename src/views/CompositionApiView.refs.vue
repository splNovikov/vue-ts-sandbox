<template>
  <h1>(Composition API) Refs</h1>
  <p>{{ name }} - {{ age }}</p>
  <button type="button" @click="changeName('Updated Name')">Change Name</button>
  <button type="button" @click="changeAge(50)">Change Age</button>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "AboutView",
  components: {},
  setup() {
    const name = ref("Link");
    const age = ref<number | string>(25);

    return { name, age };
  },
  methods: {
    changeName(val: string) {
      this.name = val;
    },
    changeAge(val: number | string) {
      this.age = val;
    },
  },
});
</script>
