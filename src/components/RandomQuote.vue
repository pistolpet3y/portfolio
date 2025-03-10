<!-- components/RandomQuote.vue -->
<template>
  <p class="quote">{{ currentQuote }}</p>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  name: "RandomQuote",
  setup() {
    const quote = ref([
      "I put the ‘pro’ in procrastinate 🠴",
      "I used to be indecisive… now I'm not sure 🠴",
      "I’d agree with you, but then we’d both be wrong 🠴",
      "Get to the choppa! 🠴",
      "Dylan you son of a bitch! 🠴",
      "Common sense is like deodorant. Not everyone uses it 🠴",
      "Write something super motivational here 🠴"
    ]);

    const currentQuote = ref("");

    onMounted(() => {
      const randomIndex = Math.floor(Math.random() * quote.value.length);
      currentQuote.value = quote.value[randomIndex];
    });

    return {
      currentQuote,
    };
  },
};


</script>

<style scoped></style>