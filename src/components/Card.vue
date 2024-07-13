<script setup lang="ts">
import { ref } from 'vue'
import { computed } from 'vue'

const isCardOpen = ref(false)

const toggleCard = () => {
  isCardOpen.value = !isCardOpen.value
}
</script>

<template>
  <div class="card">
    <div>
      <div class="card__title">
        <slot> </slot>
      </div>
      <div class="card__details" :style="isCardOpen ? 'max-height: 200px' : 'max-height: 0px'">
        <div v-if="isCardOpen">
          <slot name="details"> </slot>
        </div>
      </div>
    </div>
    <div class="card__arrow" @click="toggleCard">
      <div v-if="isCardOpen">
        <img alt="Arrow up" src="@/assets/arrow-up.svg" width="25" height="25" />
      </div>
      <div v-else>
        <img alt="Arrow down" src="@/assets/arrow-down.svg" width="25" height="25" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  display: flex;
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  margin: 1rem;

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }

  &__title {
    display: flex;
  }

  &__arrow {
    cursor: pointer;
    margin-left: auto;
    font-size: 1.5rem;
  }

  &__details {
    max-height: 0;
    transition: max-height 0.2s ease-out;
  }
}
</style>
