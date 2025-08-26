<script setup>
import UiWrapper from '@/components/UiWrapper.vue'
import UiButton from '@/components/UiButton.vue'
</script>

<template>
  <section class="section-main">
    <div class="section-main__outer">
      <ui-wrapper>
        <div class="section-main__inner">
          <h1 class="section-main__title">
            <span>Lorem ipsum </span>
            dolor sit amet
            <br />
            consectetur
            <span>adipiscing</span>
          </h1>
          <div class="section-main__info">
            <h2 class="section-main__subtitle">
              At vero eos et accusamus et iusto odio dignissimos ducimus!
            </h2>
            <ul class="section-main__list">
              <li>Totam rem aperiam eaque ipsa</li>
              <li>Sit voluptatem accusantium doloremque laudantium</li>
              <li>Sed ut perspiciatis, unde omnis iste natus error</li>
            </ul>
          </div>
          <div class="section-main__buttons">
            <div class="section-main__button">
              <ui-button primary label="Заказать" />
            </div>
            <div class="section-main__button">
              <ui-button label="Подробнее" />
            </div>
          </div>
        </div>
      </ui-wrapper>
    </div>
  </section>
</template>

<style scoped lang="scss">
.section-main {
  color: $color-black;
  background-image: url('@/assets/images/main-bg.webp');
  background-repeat: no-repeat;
  background-position: center top;
  background-size: cover;
  text-align: center;

  @include tablet() {
    text-align: left;
  }

  @include desktop() {
    background-size: 1920px auto;
  }

  &__outer {
    background-color: rgba($color: $color-white, $alpha: 0.496);

    @include tablet() {
      background-color: unset;
    }
  }

  &__inner {
    padding: 110px 0 50px 0;

    @include mobile() {
      padding: 120px 0 70px 0;
    }

    @include tablet() {
      padding: 150px 0 100px 0;
    }

    @include desktop() {
      padding: 202px 0;
    }
  }

  &__title {
    text-transform: uppercase;
    font-size: 19px;
    margin: 0 0 30px 0;

    @include mobile() {
      font-size: 23px;
      margin: 0 0 40px 0;
    }

    @include tablet() {
      font-size: 32px;
      margin: 0 0 60px 0;
    }

    @include desktop() {
      font-size: 48px;
      margin: 0 0 80px 0;
    }
  }

  &__title span {
    color: $color-primary;
  }

  &__info {
    font-size: 16px;
    margin: 0 0 40px 0;

    @include tablet() {
      font-size: 18px;
      margin: 0 0 60px 0;
    }

    @include desktop() {
      margin: 0 0 80px 0;
      font-size: 20px;
    }
  }

  &__subtitle {
    margin: 0 0 8px 0;
    font-size: inherit;

    @include desktop() {
      margin: 0 0 10px 0;
    }
  }

  &__list {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0 0 0 8px;
    gap: 3px;

    @include desktop() {
      padding: 0 0 0 10px;
      gap: 5px;
    }
  }

  &__list li::before {
    content: '-';
    color: #000;
    margin: 0 11px 0 0;
  }

  &__buttons {
    display: flex;
    gap: 10px;
    flex-direction: column-reverse;
    align-items: center;

    @include tablet() {
      gap: 30px;
      flex-direction: row;
    }
  }

  &__button {
    width: 183px;
  }
}
</style>
