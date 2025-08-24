<script setup>
import { computed } from 'vue'

const props = defineProps({
  error: Boolean,
  modelValue: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['update:modelValue'])

function onInput(event) {
  emit('update:modelValue', event.target.value)
}

const classes = computed(() => ({
  'ui-input--error': props.error,
}))
</script>

<template>
  <input v-bind="$attrs" :value="modelValue" @input="onInput" class="ui-input" :class="classes" />
</template>

<style scoped lang="scss">
.ui-input {
  width: 100%;
  display: block;
  padding: 12px 10px;
  border-radius: 3px;
  color: $color-dark;
  background-color: rgba($color: $color-white, $alpha: 0.85);
  border: 1px solid $color-white;
  font-family: $base-font-family;
  font-size: 16px;
  transition: all 0.3s;
  outline: none;
  
  @include desktop() {
    font-size: 18px;
  }

  &::placeholder {
    color: $color-dark;
  }

  &:focus {
    background-color: $color-white;
  }

  &--error {
    color: $color-error;
    animation: shake 0.6s;

    &::placeholder {
      color: $color-error;
    }
  }
}
</style>
