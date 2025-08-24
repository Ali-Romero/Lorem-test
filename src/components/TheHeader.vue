<script setup>
import { ref } from 'vue'
import logoUrl from '@/assets/images/logo.svg?url'
import UiWrapper from '@/components/UiWrapper.vue'
import AppMenu from '@/components/AppMenu.vue'
import AppMenuMobile from '@/components/AppMenuMobile.vue'
import UiBurger from '@/components/UiBurger.vue'

const isShowMobileMenu = ref(false)
</script>

<template>
  <header class="header">
    <ui-wrapper>
      <div class="header__inner">
        <a href="/" class="header__logo">
          <img :src="logoUrl" alt="loremipsum.net" width="245" height="21" />
        </a>
        <div class="header__menu">
          <app-menu />
        </div>
        <div class="header__burger">
          <app-menu-mobile
            :is-show="isShowMobileMenu"
            @close="isShowMobileMenu = false"
          ></app-menu-mobile>
          <ui-burger @click="isShowMobileMenu = !isShowMobileMenu"></ui-burger>
        </div>
      </div>
    </ui-wrapper>
  </header>
</template>

<style scoped lang="scss">
.header {
  position: fixed;
  z-index: 22;
  background: rgba(16, 16, 29, 0.9);
  margin: 0 auto;
  left: 0;
  right: 0;
  max-width: 1920px;

  &__inner {
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 14px 0;

    @include tablet() {
      padding: 24px 0;
    }
    @include desktop() {
      padding: 32px 0;
    }
  }

  &__logo img{
    display: block;
    width: 170px;
    height: 15px;

    @include tablet() {
      width: 200px;
      height: 17px;
    }
    @include desktop() {
      width: 245px;
      height: 21px;
    }
  }

  &__menu {
    display: none;

    @include tablet() {
      display: block;
    }
  }

  &__burger {
    @include tablet() {
      display: none;
    }
  }
}
</style>
