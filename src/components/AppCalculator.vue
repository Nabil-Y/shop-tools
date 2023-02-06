<script setup lang="ts">
import { ref, computed } from "vue";

const multiplier = ref(1);
const retailPrice = ref("0");
const salePrice = computed(() => {
  const newValue = +retailPrice.value * multiplier.value;
  const formatter = new Intl.NumberFormat("fr-Fr", {
    maximumFractionDigits: 2,
  });
  return formatter.format(newValue);
});

const cantPressZero = computed(
  () => retailPrice.value.includes("0") && retailPrice.value.length < 2
);
const cantPressDot = computed(() => retailPrice.value.includes("."));

const buttonHandler = (event: Event) => {
  const eventTarget = event.target as HTMLButtonElement;
  const isRetailPriceZero = retailPrice.value === "0";

  if (eventTarget.innerText === "C") {
    retailPrice.value = "0";
    return;
  }

  if (eventTarget.innerText === "." && isRetailPriceZero) {
    retailPrice.value = "0.";
    return;
  }

  const updatedValue = isRetailPriceZero
    ? eventTarget.innerText
    : retailPrice.value + eventTarget.innerText;

  retailPrice.value = updatedValue;
};

const changeHandler = (event: Event) => {
  const eventTarget = event.target as HTMLInputElement;
  multiplier.value = +eventTarget.value;
};
</script>

<template>
  <div class="screen-retail">{{ retailPrice }}</div>
  <div class="screen-sale">{{ salePrice }}</div>

  <div class="calculator-buttons">
    <button class="button" @click="buttonHandler">1</button>
    <button class="button" @click="buttonHandler">2</button>
    <button class="button" @click="buttonHandler">3</button>
    <button class="button" @click="buttonHandler">4</button>
    <button class="button" @click="buttonHandler">5</button>
    <button class="button" @click="buttonHandler">6</button>
    <button class="button" @click="buttonHandler">7</button>
    <button class="button" @click="buttonHandler">8</button>
    <button class="button" @click="buttonHandler">9</button>
    <button class="button" @click="buttonHandler" :disabled="cantPressZero">
      0
    </button>
    <button class="button" @click="buttonHandler" :disabled="cantPressDot">
      .
    </button>
    <button class="button" @click="buttonHandler">C</button>
  </div>

  <div class="calculator-multipliers">
    <label class="radio-label" for="multiplier-2">{{ 2 }}</label>
    <input
      class="radio-input"
      @change="changeHandler"
      type="radio"
      id="multiplier-2"
      name="multiplier"
      :value="2"
    />

    <label class="radio-label" for="multiplier-1.9">{{ 1.9 }}</label>
    <input
      class="radio-input"
      @change="changeHandler"
      type="radio"
      id="multiplier-1.9"
      name="multiplier"
      :value="1.9"
    />

    <label class="radio-label" for="multiplier-1.8">{{ 1.8 }}</label>
    <input
      class="radio-input"
      @change="changeHandler"
      type="radio"
      id="multiplier-1.8"
      name="multiplier"
      :value="1.8"
    />

    <label class="radio-label" for="multiplier">{{ 1 }}</label>
    <input
      checked
      class="radio-input"
      @change="changeHandler"
      type="radio"
      id="multiplier"
      name="multiplier"
      :value="1"
    />

    <label class="radio-label" for="multiplier-0.2">{{ 0.2 }}</label>
    <input
      class="radio-input"
      @change="changeHandler"
      type="radio"
      id="multiplier-0.2"
      name="multiplier"
      :value="0.2"
    />

    <label class="radio-label" for="multiplier-0.05">{{ 0.05 }}</label>
    <input
      class="radio-input"
      @change="changeHandler"
      type="radio"
      id="multiplier-0.05"
      name="multiplier"
      :value="0.05"
    />
  </div>
</template>

<style lang="scss">
.calculator-multipliers {
  display: flex;

  & > * {
    margin-right: 10px;
  }
}

.calculator-buttons {
  display: flex;
  flex-flow: row wrap;
  width: 200px;
  .button {
    width: 50px;
    height: 50px;
    margin-bottom: 20px;
  }
}

.button {
  margin-right: 10px;
}

.button,
.radio-input,
.radio-label {
  cursor: pointer;
}
</style>
