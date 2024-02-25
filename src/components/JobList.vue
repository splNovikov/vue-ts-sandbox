<template>
  <div class="job-list">
    <p>Ordered by {{ order }}</p>
    <ul>
      <li v-for="job in orderedJob" :key="job.id">
        <h2>{{ job.title }} in {{ job.location }}</h2>
        <div class="salary">
          <p>{{ job.salary }} rubles</p>
        </div>
        <div class="description">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem omnis
            voluptatum eius doloremque optio iusto sequi dignissimos. Pariatur
            earum assumenda dolores possimus quidem quam, reprehenderit aliquid
            consequuntur amet non facere.
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";
import { Job } from "@/types/Job";
import { OrderTerm } from "@/types/OrderTerm";

export default defineComponent({
  props: {
    jobs: {
      required: true,
      type: Array as PropType<Job[]>,
    },
    order: {
      required: true,
      type: String as PropType<OrderTerm>,
    },
  },
  setup(props) {
    const orderedJob = computed(() => {
      return [...props.jobs].sort((a: Job, b: Job) =>
        a[props.order] > b[props.order] ? 1 : -1
      );
    });

    return { orderedJob };
  },
});
</script>

<style scoped>
.job-list {
  max-width: 960px;
  margin: 40px auto;

  ul {
    padding: 0;
  }

  li {
    list-style-type: none;
    background: white;
    padding: 16px;
    margin: 16px 0;
    border-radius: 4px;
  }

  h2 {
    margin: 0 0 10px;
    text-transform: capitalize;
  }
}

.salary {
  display: flex;

  img {
    width: 30px;
  }

  p {
    color: #17bf66;
    font-weight: bold;
    margin: 10px 4px;
  }
}
</style>
