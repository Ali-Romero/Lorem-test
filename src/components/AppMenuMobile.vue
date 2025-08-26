<script setup>
import { computed } from 'vue'
import logoUrl from '@/assets/images/logo.svg?url'
import CloseIcon from '@/assets/icons/close-icon.svg'
import AppMenu from '@/components/AppMenu.vue'

const props = defineProps({
  isShow: Boolean,
})

const classes = computed(() => ({
  'app-mobile-menu--show': props.isShow,
}))
</script>

<template>
  <div class="app-mobile-menu" :class="classes">
    <div class="app-mobile-menu__head">
      <a href="/" class="app-mobile-menu__logo">
        <img :src="logoUrl" alt="logo" width="130" height="36" />
      </a>
      <button class="app-mobile-menu__close" @click="$emit('close')" aria-label="close">
        <close-icon />
      </button>
    </div>
    <app-menu />
  </div>
</template>

<style scoped lang="scss">
.app-mobile-menu {
  padding: 14px 8px;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: $color-dark;
  color: $color-white;
  z-index: 100;
  visibility: hidden;
  opacity: 0;
  transition: all 0.2s;

  &--show {
    opacity: 1;
    visibility: visible;
  }

  & :deep(.app-menu__list) {
    flex-direction: column;
    align-items: flex-start;
  }

  &__head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
  }

  &__logo img {
    display: block;
    width: 170px;
    height: 15px;
  }

  &__close {
    width: 36px;
    height: 36px;
    background: none;
    border: none;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      stroke: white;
    }
  }
}
</style>
