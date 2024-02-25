<template>
  <div class="app">
    <header>
      <div class="order">
        <button @click="handleClick('title')">Order by title</button>
        <button @click="handleClick('salary')">Order by salary</button>
        <button @click="handleClick('location')">Order by location</button>
      </div>
    </header>

    <JobList :jobs="jobs" :order="order" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Job } from "@/types/Job";
import { OrderTerm } from "@/types/OrderTerm";
import JobList from "@/components/JobList.vue";

export default defineComponent({
  components: { JobList },
  setup() {
    const jobs = ref<Job[]>([
      { id: 1, title: "farm worker", location: "lon lon ranch", salary: 30000 },
      { id: 2, title: "quaryryman", location: "death mountain", salary: 40000 },
      {
        id: 3,
        title: "flute player",
        location: "the lost wood",
        salary: 35000,
      },
      { id: 4, title: "fisherman", location: "lake hylia", salary: 20000 },
      {
        id: 5,
        title: "prison guard",
        location: "gerudo valley",
        salary: 32000,
      },
    ]);
    const order = ref<OrderTerm>("title");

    const handleClick = (term: OrderTerm) => {
      order.value = term;
    };

    return { jobs, handleClick, order };
  },
});
</script>

<style scoped>
header {
  text-align: center;

  .order {
    margin-top: 20px;
  }
}
button {
  margin: 0 10px;
  color: #1195c9;
  border: 3px solid #1195c9;
  background: #d5f0ff;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}
</style>
