<script setup>
import { Form as ValidationForm, Field as ValidationField } from 'vee-validate'
import { object, string, mixed } from 'yup'
import UiInput from '@/components/UiInput.vue'
import UiInputFile from '@/components/UiInputFile.vue'
import UiSelect from '@/components/UiSelect.vue'
import UiRangeSlider from '@/components/UiRangeSlider.vue'
import UiButton from '@/components/UiButton.vue'

const validationSchema = object({
  type: string().required(),
  email: string().email().required(),
  name: string().required(),
  file: mixed().required(),
})

const initialValues = {
  type: '',
  email: '',
  name: '',
  percent: 75,
  file: null,
}

const options = [
  {
    label: 'Sed ut perspiciatis',
    value: '1',
  },
  {
    label: 'Nemo enim ipsam',
    value: '2',
  },
  {
    label: 'Et harum quidem',
    value: '3',
  },
  {
    label: 'Temporibus autem',
    value: '4',
  },
  {
    label: 'Itaque earum rerum',
    value: '5',
  },
]
</script>

<template>
  <validation-form
    :validation-schema="validationSchema"
    :initial-values="initialValues"
    class="app-order-form"
    v-slot="{ errors }"
  >
    <div class="app-order-form__row">
      <div class="app-order-form__col">
        <validation-field name="type" v-slot="{ field }">
          <ui-select
            v-bind="field"
            v-model="field.value"
            :options="options"
            :error="!!errors.type"
            placeholder="Выберите тип системы"
          />
        </validation-field>
      </div>
      <div class="app-order-form__col">
        <validation-field name="email" v-slot="{ field }">
          <ui-input v-bind="field" :error="!!errors.email" placeholder="Ваш e-mail" type="email" />
        </validation-field>
      </div>
      <div class="app-order-form__col">
        <validation-field name="name" v-slot="{ field }">
          <ui-input v-bind="field" :error="!!errors.name" placeholder="Ваше имя" type="text" />
        </validation-field>
      </div>
    </div>
    <div class="app-order-form__row">
      <div class="app-order-form__col app-order-form__col--range">
        <validation-field name="percent" v-slot="{ field }">
          <ui-range-slider
            v-bind="field"
            v-model="field.value"
            label="Sed ut perspiciatis, unde omnis iste natus"
          />
        </validation-field>
      </div>
      <div class="app-order-form__col">
        <validation-field name="file" v-slot="{ handleChange }">
          <ui-input-file name="file" :error="!!errors.file" @change="handleChange" />
        </validation-field>
      </div>
      <div class="app-order-form__col">
        <div class="app-order-form__button">
          <ui-button label="Отправить" primary large />
        </div>
      </div>
    </div>
  </validation-form>
</template>

<style scoped lang="scss">
.app-order-form {
  $parent: &;

  &__row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: column;
    gap: 16px;
    margin: 0 0 20px 0;

    @include mobile() {
      gap: 20px;
    }

    @include tablet() {
      flex-direction: row;
    }

    @include desktop() {
      gap: 30px;
      margin: 0 0 30px 0;
    }

    &:nth-child(2) {
      margin: 0;

      #{$parent}__col {
        flex: unset;
        width: 100%;

        @include tablet() {
          width: 360px;
        }

        @include desktop() {
          width: 370px;
        }

        &:nth-child(1) {
          width: 100%;
          margin: 0 0 6px 0;

          @include desktop() {
            margin: 0;
            width: 770px;
          }
        }
      }
    }
  }

  &__col {
    flex: calc(33.3% - 30px) 1 1;
  }
}
</style>
