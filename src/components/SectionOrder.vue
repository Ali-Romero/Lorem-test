<script setup>
import { ref } from 'vue';
import UiWrapper from '@/components/UiWrapper.vue';

import UiSelect from './UiSelect.vue';

const selectValue = ref()

const options = [
  {
    label: "Option 1",
    value: 1
  },
  {
    label: "Option 2",
    value: 2
  }
]
</script>

<template>
  <section class="section-order">
    <ui-wrapper>
      <div class="section-order__inner">
        <h2 class="section-order__title">Оформление  Заказа</h2>
        <div class="section-order__description">Перед заполнением формы ознакомьтесь с нашей схемой работы!</div>
      </div>
      selectValue: {{ selectValue }}
      <ui-select v-model="selectValue" :options="options" placeholder="Выберите тип системы" />
    </ui-wrapper>
  </section>
</template>

<style scoped lang="scss"></style>
