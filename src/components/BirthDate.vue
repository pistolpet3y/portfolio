<template>
  <p>{{ ageInDays }}</p>
</template>

<script>
import { ref, onMounted, computed } from 'vue';

export default {
  name: 'BirthDate',
  setup() {
    const birthDate = new Date('1985-10-26');
    const ageInDays = computed(() => {
      const today = new Date();
      const diffTime = Math.abs(today - birthDate);
      const diffInTime = today - birthDate;
      return Math.floor(diffInTime / (1000 * 60 * 60 * 24));
    });

    return {
      ageInDays
    };
  }
};

</script>


<style scoped>
p {
  font-size: 20px;
  position: absolute !important;
  top: 438px !important;
  left: -75px !important;
  font-weight: 500;
  font-style: italic;
  color: #29b585 !important;
}
</style>