<script setup>
import VueSlider from 'vue3-slider'

const props = defineProps({
  label: String,
  modelValue: {
    type: Number,
    default: 0,
  },
})

const emit = defineEmits(['update:modelValue'])

function onChange(value) {
  emit('update:modelValue', value)
}
</script>

<template>
  <div class="ui-range-slider">
    <div class="ui-range-slider__label">
      <div>{{ label }}</div>
      <div>{{ modelValue }} %</div>
    </div>
    <vue-slider
      :model-value="modelValue"
      always-show-handle
      class="ui-range-slider__control"
      @update:modelValue="onChange"
    />
  </div>
</template>

<style scoped lang="scss">
.ui-range-slider {
  &__control {
    margin: 0;
    :deep(.handle) {
      background-color: #42a9ed;
      transition: scale 0.2s;
      border-radius: 100%;
      top: 50%;
      width: 20px;
      height: 20px;
      border: 2px solid #286690;

      @include desktop() {
        width: 24px;
        height: 24px;
        border: 3px solid #286690;
      }

      &.hover {
        translate: -8px -50%;
      }
    }

    :deep(.track-filled) {
      display: none;
    }

    :deep(.track) {
      background-color: rgba($color: $color-white, $alpha: 0.7);
      border: 1px solid $color-white;
      transition: all 0.3s;
    }

    &:hover {
      :deep(.track) {
        background-color: $color-white;
      }

      :deep(.handle) {
        scale: 1.2;
      }
    }
  }

  &__label {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    padding: 0 0 18px 0;

    @include mobile() {
      font-size: 16px;
    }

    @include tablet() {
      font-size: 18px;
    }
  }
}
</style>
