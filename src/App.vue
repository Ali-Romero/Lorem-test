<script setup>
import UiLayout from '@/components/UiLayout.vue'
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
</script>

<template>
  <ui-layout>
    <template #header>
      <the-header />
    </template>

    <template #main>
      <div>main</div>
      <h1>фывфыв</h1>
      <h2>asd</h2>
      <div>At vero eos et accusamus et iusto odio dignissimos ducimus!</div>
    </template>

    <template #footer>
      <the-footer />
    </template>
  </ui-layout>
</template>

<style scoped lang="scss"></style>
