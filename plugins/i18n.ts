import { defineNuxtPlugin } from 'nuxt/app'
import { useI18n } from 'vue-i18n'

export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.config.globalProperties.$switchLanguage = (locale: string) => {
    const i18n = useI18n()
    i18n.locale.value = locale
  }
}) 