<script setup lang="ts">
import { ref, computed } from "vue";

const retailPrice = ref(0);
const multiplier = ref(1);

const salePrice = computed(() => {
  const formatter = new Intl.NumberFormat("fr-Fr", {
    maximumFractionDigits: 2,
  });
  return formatter.format(retailPrice.value * multiplier.value);
});
</script>

<template>
  <div>
    <h2>Price calculator 2</h2>

    <div class="screen-result">{{ salePrice }}</div>

    <select name="multiplier" id="multiplier" v-model="multiplier">
      <option value="0.05">0.05</option>
      <option value="0.20">0.20</option>
      <option value="1" selected>1</option>
      <option value="1.8">1.8</option>
      <option value="1.9">1.9</option>
      <option value="2">2</option>
    </select>
    <div>
      <label for="price">Prix</label>
      <input type="number" id="price" v-model="retailPrice" />
    </div>
  </div>
</template>

<style lang="scss"></style>
