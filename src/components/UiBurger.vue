<script setup>
import MenuBurger from '@/assets/icons/menu-burger.svg'
</script>

<template>
  <button class="ui-burger" aria-label="menu">
    <menu-burger/>
  </button>
</template>

<style scoped lang="scss">
.ui-burger {
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  border: none;
  background: none;
  cursor: pointer;
  display: block;
  padding: 0;

  svg {
    display: block;
  }
}
</style>
