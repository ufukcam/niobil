<template>
  <div class="bg-gray-50">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <div class="text-center">
        <h1 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          {{ $t('contactPage.title') }}
        </h1>
        <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
          {{ $t('contactPage.subtitle') }}
        </p>
      </div>

      <div class="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
        <!-- Contact Form -->
        <div class="bg-white shadow-lg rounded-lg p-8">
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700">{{ $t('contactPage.form.name') }}</label>
              <div class="mt-1">
                <input 
                  id="name" 
                  v-model="form.name" 
                  type="text" 
                  required 
                  class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
              </div>
            </div>

            <div>
              <label for="email" class="block text-sm font-medium text-gray-700">{{ $t('contactPage.form.email') }}</label>
              <div class="mt-1">
                <input 
                  id="email" 
                  v-model="form.email" 
                  type="email" 
                  required 
                  class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
              </div>
            </div>

            <div>
              <label for="phone" class="block text-sm font-medium text-gray-700">{{ $t('contactPage.form.phone') }}</label>
              <div class="mt-1">
                <input 
                  id="phone" 
                  v-model="form.phone" 
                  type="tel" 
                  required 
                  class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
              </div>
            </div>

            <div>
              <label for="subject" class="block text-sm font-medium text-gray-700">{{ $t('contactPage.form.subject') }}</label>
              <div class="mt-1">
                <input 
                  id="subject" 
                  v-model="form.subject" 
                  type="text" 
                  required 
                  class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
              </div>
            </div>

            <div>
              <label for="message" class="block text-sm font-medium text-gray-700">{{ $t('contactPage.form.message') }}</label>
              <div class="mt-1">
                <textarea 
                  id="message" 
                  v-model="form.message" 
                  rows="4" 
                  required 
                  class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>
            </div>

            <div>
              <button 
                type="submit" 
                class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                {{ $t('contactPage.form.submit') }}
              </button>
            </div>
          </form>
        </div>

        <!-- Contact Information -->
        <div class="bg-white shadow-lg rounded-lg p-8">
          <div class="space-y-8">
            <div>
              <h3 class="text-lg font-medium text-gray-900">{{ $t('contactPage.info.title') }}</h3>
              <dl class="mt-4 space-y-6">
                <div>
                  <dt class="text-sm font-medium text-gray-500">{{ $t('contactPage.info.address.label') }}</dt>
                  <dd class="mt-1 text-sm text-gray-900 whitespace-pre-line">
                    {{ $t('contactPage.info.address.value') }}
                  </dd>
                </div>
                <div>
                  <dt class="text-sm font-medium text-gray-500">{{ $t('contactPage.info.phone.label') }}</dt>
                  <dd class="mt-1 text-sm text-gray-900">
                    <a :href="'tel:' + $t('contactPage.info.phone.value')" class="text-blue-600 hover:text-blue-500">
                      {{ $t('contactPage.info.phone.value') }}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt class="text-sm font-medium text-gray-500">{{ $t('contactPage.info.email.label') }}</dt>
                  <dd class="mt-1 text-sm text-gray-900">
                    <a :href="'mailto:' + $t('contactPage.info.email.value')" class="text-blue-600 hover:text-blue-500">
                      {{ $t('contactPage.info.email.value') }}
                    </a>
                  </dd>
                </div>
              </dl>
            </div>

            <div>
              <h3 class="text-lg font-medium text-gray-900">{{ $t('contactPage.hours.title') }}</h3>
              <dl class="mt-4 space-y-6">
                <div>
                  <dt class="text-sm font-medium text-gray-500">{{ $t('contactPage.hours.weekdays.label') }}</dt>
                  <dd class="mt-1 text-sm text-gray-900">{{ $t('contactPage.hours.weekdays.value') }}</dd>
                </div>
                <div>
                  <dt class="text-sm font-medium text-gray-500">{{ $t('contactPage.hours.saturday.label') }}</dt>
                  <dd class="mt-1 text-sm text-gray-900">{{ $t('contactPage.hours.saturday.value') }}</dd>
                </div>
                <div>
                  <dt class="text-sm font-medium text-gray-500">{{ $t('contactPage.hours.sunday.label') }}</dt>
                  <dd class="mt-1 text-sm text-gray-900">{{ $t('contactPage.hours.sunday.value') }}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

defineI18nRoute({
  paths: {
    en: '/contact',
    tr: '/iletisim'
  }
})

const { t } = useI18n()

const form = ref({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

const handleSubmit = () => {
  // Form submission logic will be implemented here
  console.log('Form submitted:', form.value)
  // Clear form fields
  form.value = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  }
}

// SEO meta tags
useSeoMeta({
  title: () => t('contactPage.meta.title'),
  ogTitle: () => t('contactPage.meta.title'),
  description: () => t('contactPage.meta.description'),
  ogDescription: () => t('contactPage.meta.description'),
  keywords: () => t('contactPage.meta.keywords')
})
</script> 