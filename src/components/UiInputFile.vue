<script setup>
import UiButton from '@/components/UiButton.vue'
import IconFile from '@/assets/icons/icon-file.svg'

const emit = defineEmits(['update:modelValue'])

function onChange(event) {
  const file = event.target.files?.[0] ?? null
  emit('update:modelValue', file)
}
</script>

<template>
  <label class="ui-input-file">
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
  }
}
</style>
