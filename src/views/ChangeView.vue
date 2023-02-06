<script setup lang="ts">
import { ref, computed } from "vue";

const price = ref(0);

const given = ref(0);

const returnedChange = computed(() => {
  console.log("price: ", price.value);
  console.log("given: ", given.value);

  const formatter = new Intl.NumberFormat("fr-Fr", {
    maximumFractionDigits: 2,
  });
  const change = formatter.format(given.value - price.value);
  console.log("change: ", change);

  const isChangeNegative = given.value - price.value < 0;

  if (isChangeNegative) {
    return "Pas assez";
  } else {
    return change;
  }
});
</script>

<template>
  <div>
    <h2>Change calculator</h2>
    <div>
      <label for="price">A payer</label>
      <input type="number" id="price" v-model="price" />
    </div>

    <div>
      <label for="money">Donné</label>
      <input type="number" id="money" v-model="given" />
    </div>

    <div>
      <span>Rendu</span>
      <span>{{ returnedChange }}</span>
    </div>
  </div>
</template>

<style lang="scss"></style>
