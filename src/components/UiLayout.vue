<template>
  <div class="ui-layout">
    <slot name="header" />

    <main class="ui-layout__main">
      <slot name="main" />
    </main>

    <slot name="footer" />
  </div>
</template>

<style scoped lang="scss">
.ui-layout {
  display: flex;
  flex-direction: column;
  min-height: 100%;

  &__main {
    flex: 1;
  }
}
</style>
