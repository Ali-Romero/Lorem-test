<script setup>
import logoUrl from '@/assets/images/logo.svg?url'
import UiWrapper from '@/components/UiWrapper.vue'
import AppMenu from '@/components/AppMenu.vue'
</script>

<template>
  <header>
    <ui-wrapper>
      <div>
        <a href="/">
          <img :src="logoUrl" alt="loremipsum.net" />
        </a>

        <app-menu />
      </div>
    </ui-wrapper>
  </header>
</template>
