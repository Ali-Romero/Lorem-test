<script setup>
import UiButton from '@/components/UiButton.vue'
import IconFile from '@/assets/icons/icon-file.svg'
import { computed } from 'vue'

const props = defineProps({
  error: Boolean,
})

const emit = defineEmits(['update:modelValue'])

function onChange(event) {
  const file = event.target.files?.[0] ?? null
  emit('update:modelValue', file)
}

const classes = computed(() => ({
  'ui-input-file--error': props.error,
}))
</script>

<template>
  <label class="ui-input-file" :class="classes">
    <input v-bind="$attrs" type="file" class="ui-input-file__input" @change="onChange" />
    <ui-button label="Прикрепить файл" tag="span" large class="ui-input-file__button">
      <template #icon>
        <icon-file />
      </template>
    </ui-button>
  </label>
</template>

<style scoped lang="scss">
.ui-input-file {
  &__input {
    visibility: hidden;
    width: 0;
    height: 0;
    position: absolute;
  }

  &__button {
    border: 2px solid $color-primary;
    color: $color-dark;
  }

  &--error {
    animation: shake 0.6s;
  }

  &--error &__button {
    border-color: $color-error;
    color: $color-error;
  }
}
</style>
