<template>
  <div class="me-text">
    <p><span class="text-arrows">🠶</span> UX/UI DESIGNER</p>
    <p><span class="text-arrows">🠶</span> FRONTEND DEVELOPER</p>
    <p><span class="text-arrows">🠶</span> AMATEUR PHOTOGRAPHER</p>
    <p><span class="text-arrows">🠶</span> HAMBURGER CONNOISSEUR</p>
  </div>
</template>

<script>
import { onMounted } from "vue";
import gsap from "gsap";

export default {
  setup() {
    onMounted(() => {
      gsap.fromTo(
        ".text-arrows",
        { opacity: 0, x: -15 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: 1, // Varje pil kommer in med 1s mellanrum
          repeat: -1, // Loopar animationen
          yoyo: true, // Går tillbaka till startpositionen
        }
      );
    });
  },
};
</script>

<style scoped>
.me-text {
  font-size: 1.5rem;
}

.text-arrows {
  display: inline-block;
  margin-left: -20px;
  margin-right: 5px;
  color: #29b585;
}
</style>
