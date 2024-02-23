<template>
  <h1>(Composition API) Reactive</h1>
  <p>{{ name }} - {{ age }}</p>
  <button type="button" @click="changeName('Updated Name')">Change Name</button>
  <button type="button" @click="changeAge(50)">Change Age</button>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
  name: "AboutView",
  components: {},
  setup() {
    const state = reactive({
      name: "Link",
      age: 25 as string | number,
    });

    return { ...toRefs(state) };
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
