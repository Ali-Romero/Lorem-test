<script setup>
import UiWrapper from '@/components/UiWrapper.vue'
import AppOrderSteps from '@/components/AppOrderSteps.vue'
import AppOrderForm from '@/components/AppOrderForm.vue'
</script>

<template>
  <section class="section-order">
    <ui-wrapper>
      <div class="section-order__inner">
        <div class="section-order__info">
          <h2 class="section-order__title">
            Оформление
            <span>Заказа</span>
          </h2>
          <div class="section-order__description">
            Перед заполнением формы ознакомьтесь с нашей схемой работы!
          </div>
        </div>
        <div class="section-order__steps">
          <app-order-steps />
        </div>
        <div class="section-order__feedback">
          <app-order-form />
        </div>
      </div>
    </ui-wrapper>
  </section>
</template>

<style scoped lang="scss">
.section-order {
  color: $color-white;
  background-image: url('@/assets/images/order-bg.webp');
  background-repeat: no-repeat;
  background-position: center top;
  background-size: cover;

  @include desktop() {
    background-size: 1920px auto;
  }

  &__inner {
    padding: 50px 0;

    @include mobile() {
      padding: 60px 0 70px 0;
    }

    @include tablet() {
      padding: 90px 0 109px 0;
    }

    @include desktop() {
      padding: 121px 0 149px 0;
    }
  }

  &__info {
    text-align: center;
    margin: 0 0 40px 0;

    @include tablet() {
      margin: 0 0 54px 0;
    }

    @include desktop() {
      margin: 0 0 80px 0;
    }
  }

  &__title {
    text-transform: uppercase;
    font-size: 20px;
    margin: 0 0 20px 0;

    @include mobile() {
      font-size: 24px;
    }

    @include tablet() {
      font-size: 30px;
    }

    @include desktop() {
      font-size: 36px;
      margin: 0 0 30px 0;
    }

    span {
      color: $color-primary;
    }
  }

  &__description {
    color: #bbb;
  }

  &__steps {
    margin: 0 0 44px 0;

    @include tablet() {
      margin: 0 0 60px 0;
    }

    @include desktop() {
      margin: 0 0 80px 0;
    }
  }

  &__feedback {
    margin: 0;
    overflow: hidden;
  }
}
</style>
