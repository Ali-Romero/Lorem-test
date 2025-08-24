<script setup>
import { computed } from 'vue'

const props = defineProps({
  label: String,
  primary: Boolean,
  large: Boolean,
  tag: {
    type: String,
    default: 'button',
  },
})

const classes = computed(() => ({
  'ui-button--primary': props.primary,
  'ui-button--large': props.large,
}))
</script>

<template>
  <component :is="tag" v-wave class="ui-button" :class="classes">
    <slot name="icon" />
    {{ label }}
  </component>
</template>

<style scoped lang="scss">
.ui-button {
  width: 100%;
  height: 43px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  gap: 10px;
  background-color: $color-white;
  border: 1px solid #6f6d7b;
  border-radius: 4px;
  font-family: $base-font-family;
  font-size: 13px;
  text-transform: uppercase;
  color: #2a2b30;
  cursor: pointer;

  &--primary {
    background-color: $color-primary;
    color: $color-white;
    border-color: $color-white;
  }

  &--large {
    height: 48px;
    font-size: 15px;
  }
}
</style>
