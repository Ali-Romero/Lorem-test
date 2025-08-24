<script setup>
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import IconSearch from '@/assets/icons/icon-search.svg'
import IconPercent from '@/assets/icons/icon-percent.svg'
import IconFileAdd from '@/assets/icons/icon-file-add.svg'
import IconMessage from '@/assets/icons/icon-message.svg'
import IconMoney from '@/assets/icons/icon-money.svg'

import '@splidejs/vue-splide/css'

const options = {
  arrows: false,
  mediaQuery: 'min',
  breakpoints: {
    1200: {
      destroy: true,
    },
  },
}
</script>

<template>
  <splide :options="options" class="app-order-steps">
    <splide-slide class="app-order-steps__slide">
      <div class="app-order-steps__item">
        <div class="app-order-steps__circle">
          <icon-search class="app-order-steps__icon" />
          <div class="app-order-steps__dots">
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
        <div class="app-order-steps__label">Lorem ipsum dolor sit amet</div>
      </div>
    </splide-slide>
    <splide-slide class="app-order-steps__slide">
      <div class="app-order-steps__item">
        <div class="app-order-steps__circle">
          <icon-percent class="app-order-steps__icon" />
          <div class="app-order-steps__dots">
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
        <div class="app-order-steps__label">Сonsecteturadipiscing elit</div>
      </div>
    </splide-slide>
    <splide-slide class="app-order-steps__slide">
      <div class="app-order-steps__item">
        <div class="app-order-steps__circle">
          <icon-file-add class="app-order-steps__icon" />
          <div class="app-order-steps__dots">
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
        <div class="app-order-steps__label">Sed do eiusmod tempor</div>
      </div>
    </splide-slide>
    <splide-slide class="app-order-steps__slide">
      <div class="app-order-steps__item">
        <div class="app-order-steps__circle">
          <icon-message class="app-order-steps__icon" />
          <div class="app-order-steps__dots">
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
        <div class="app-order-steps__label">Esse cillum dolore eu fugiat</div>
      </div>
    </splide-slide>
    <splide-slide class="app-order-steps__slide">
      <div class="app-order-steps__item">
        <div class="app-order-steps__circle">
          <icon-money class="app-order-steps__icon" />
          <div class="app-order-steps__dots">
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
        <div class="app-order-steps__label">Excepteur sint occaecat cupidatat non proident</div>
      </div>
    </splide-slide>
  </splide>
</template>

<style scoped lang="scss">
.app-order-steps {
  $parent: &;

  &.is-active {
    padding-bottom: 28px;
  }

  &:not(.is-active) {
    :deep(.splide__list) {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 30px;
    }

    #{$parent}__item {
      width: 209px;
    }
  }

  :deep(.splide__pagination) {
    bottom: 0;
    gap: 8px;
  }

  :deep(.splide__pagination__page) {
    background-color: #c4c4c4;
    opacity: 1;

    &.is-active {
      background-color: $color-white;
    }
  }

  &__slide:last-child &__dots,
  &__slide:nth-child(5) &__dots,
  &.is-active &__dots {
    display: none;
  }

  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  &__circle {
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $color-primary;
    border: 5px solid #286690;
    border-radius: 100%;
    position: relative;
  }

  &__label {
    padding: 0 10px;
    font-size: 16px;
    color: $color-white;
    text-align: center;
  }

  &__icon {
    width: 55px;
    height: 55px;
    display: block;
  }

  &__dots {
    height: 6px;
    position: absolute;
    left: calc(100% + 18px);
    top: 0;
    bottom: 0;
    margin: auto;
    display: flex;
    gap: 20px;

    span {
      display: block;
      width: 6px;
      height: 6px;
      background-color: #c4c4c4;
      border-radius: 50%;
      animation: wave 1.5s infinite ease-in-out;
    }

    span:nth-child(1) { animation-delay: 0s; }
    span:nth-child(2) { animation-delay: 0.15s; }
    span:nth-child(3) { animation-delay: 0.3s; }
    span:nth-child(4) { animation-delay: 0.45s; }
    span:nth-child(5) { animation-delay: 0.6s; }
  }

  @keyframes wave {
    0%, 100% {
      transform: translateY(0);
      opacity: 0.5;
    }
    50% {
      transform: translateY(-6px);
      opacity: 1;
    }
  }
}
</style>
