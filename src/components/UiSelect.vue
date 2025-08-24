<script setup>
import { computed } from 'vue'
import VueSelect from 'vue3-select-component'

const props = defineProps({
  error: Boolean,
})

const classes = computed(() => ({
  'ui-select--error': props.error,
}))
</script>

<template>
  <vue-select class="ui-select" :class="classes" />
</template>

<style scoped lang="scss">
.ui-select {
  --vs-padding: 9px 10px;
  --vs-border: 1px solid #{$color-white};
  --vs-outline-color: #{$color-white};
  --vs-min-height: 48px;
  --vs-border-radius: 3px;
  --vs-background-color: #{rgba($color: $color-white, $alpha: 0.85)};
  --vs-placeholder-color: #{$color-dark};
  --vs-text-color: #{$color-dark};
  --vs-font-size: 18px;

  &.open {
    --vs-background-color: rgba(61, 64, 80, 0.85);
    --vs-text-color: #{$color-white};
    --vs-placeholder-color: #{$color-white};
    --vs-outline-color: rgba(61, 64, 80, 0.85);
    --vs-menu-border: 1px solid rgba(61, 64, 80, 0.85);
    --vs-menu-offset-top: 0;
    --vs-border-radius: 0 0 3px 3px;
    --vs-menu-background-color: rgba(39, 39, 51, 0.9);
    --vs-option-text-color: #{$color-white};
    --vs-option-hover-background-color: rgba(39, 39, 51, 0);
    --vs-option-focused-background-color: rgba(39, 39, 51, 0);
    --vs-option-focused-text-color: #{$color-primary}
  }

  &--error {
    animation: shake 0.6s;
    --vs-placeholder-color: #{$color-error};
    --vs-text-color: #{$color-error};
  }

  :deep(.control) {
    transition: all 0.3s;

    &.focused {
      box-shadow: none;
    }
  }

  :deep(.input-placeholder) {
    font-size: var(--vs-font-size);
  }
}
</style>
