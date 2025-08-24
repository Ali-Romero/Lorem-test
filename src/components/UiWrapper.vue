<template>
  <div class="ui-wrapper">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.ui-wrapper {
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 8px;

  @include tablet() {
    padding: 0 14px;
  }
}
</style>
