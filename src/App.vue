<script setup>
import UiLayout from '@/components/UiLayout.vue'
import TheFooter from '@/components/TheFooter.vue'
import TheHeader from '@/components/TheHeader.vue'
import SectionMain from '@/components/SectionMain.vue'
import SectionOrder from '@/components/SectionOrder.vue'
</script>

<template>
  <ui-layout>
    <template #header>
      <the-header />
    </template>

    <template #main>
      <section-main />
      <section-order />
    </template>

    <template #footer>
      <the-footer />
    </template>
  </ui-layout>
</template>

<style scoped lang="scss"></style>
