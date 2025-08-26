<script setup>
import UiWrapper from '@/components/UiWrapper.vue'
import IconQiwi from '@/assets/icons/icon-qiwi.svg'
import IconYandex from '@/assets/icons/icon-yandex.svg'
import IconWm from '@/assets/icons/icon-wm.svg'
import IconEmail from '@/assets/icons/icon-email.svg'
import IconVk from '@/assets/icons/icon-vk.svg'
</script>

<template>
  <footer class="footer">
    <ui-wrapper>
      <div class="footer__inner">
        <div class=".footer__copyright">© 2018 «LoremIpsum.net» Все права защищены.</div>
        <div class="footer__payments">
          <ul class="footer__list">
            <li class="footer__item">
              <icon-qiwi />
              <span class="footer__description">Qiwi wallet</span>
            </li>
            <li class="footer__item">
              <icon-yandex />
              <span class="footer__description">Yandex Money</span>
            </li>
            <li class="footer__item">
              <icon-wm />
              <span class="footer__description">Web Money</span>
            </li>
          </ul>
        </div>
        <div class="footer__contacts">
          <ul class="footer__list">
            <li class="footer__item">
              <a href="#" target="_blank" rel="noopener noreferrer" class="footer__link">
                <icon-email />
                <span class="footer__description">info@ipsum228.com</span>
              </a>
            </li>
            <li class="footer__item">
              <a href="#" target="_blank" rel="noopener noreferrer" class="footer__link">
                <icon-vk />
                <span class="footer__description">Мы вконтакте</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </ui-wrapper>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  background-color: #3d4050;

  &__inner {
    display: flex;
    justify-content: space-between;
    flex-direction: column-reverse;
    align-items: center;
    flex-wrap: wrap;
    padding: 20px 0;
    font-size: 13px;
    gap: 14px;

    @include desktop() {
      flex-direction: row;
      padding: 30px 0;
      gap: 20px;
    }
  }

  &__list {
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;
    gap: 16px;

    @include tablet() {
      gap: 24px;
    }

    @include desktop() {
      gap: 38px;
    }

    svg {
      display: block;
    }
  }

  &__item,
  &__link {
    display: flex;
    align-items: center;
    gap: 6px;

    @include tablet() {
      gap: 10px;
    }
  }

  &__link {
    list-style-type: none;
    text-decoration: none;
    color: inherit;
    transition: all 0.3s;

    &:hover {
      color: $color-primary;
    }
  }

  &__payments {
    color: #c3c3c3;

    @include desktop() {
      border-inline: 1px solid #c3c3c3;
      padding: 0 40px;
    }

    .footer__description {
      width: 60px;

      @include mobile() {
        width: unset;
      }
    }
  }
}
</style>
