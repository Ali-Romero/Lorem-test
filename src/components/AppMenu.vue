<script setup></script>

<template>
  <nav class="app-menu">
    <ul class="app-menu__list">
      <li class="app-menu__item">
        <a href="#" class="app-menu__link">Бизнес</a>
      </li>
      <li>
        <a href="#" class="app-menu__link">О нас</a>
      </li>
      <li>
        <a href="#" class="app-menu__link">Цены</a>
      </li>
      <li>
        <a href="#" class="app-menu__link">Оформить заказ</a>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
.app-menu {
  &__list {
    align-items: center;
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;
    gap: 20px;

    @include tablet() {
      gap: 30px;
    }
    @include desktop() {
      gap: 60px;
    }
  }

  &__link {
    color: inherit;
    display: inline-block;
    position: relative;
    text-decoration: none;
    transition: all 0.3s;
  }

  &__link:hover {
    color: $color-primary
  }

  &__link:after {
    content: '';
    width: 0;
    height: 1px;
    position: absolute;
    bottom: -2px;
    right: 0;
    background: currentColor;
    transition: width 0.2s ease-in-out;
    will-change: width;
  }

  &__link:hover:after {
    width: 100%;
    left: 0;
    right: auto;
  }
}
</style>
