<template>
  <div>
    <!-- Hero Section -->
     <Hero />

    <!-- Ventures Section -->
    <section class="py-12 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:text-center">
          <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">{{ $t('homePage.ventures.title') }}</h2>
          <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {{ $t('homePage.ventures.subtitle') }}
          </p>
        </div>
        <div class="mt-16">
          <div class="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <!-- Navibil -->
            <div class="relative rounded-lg border border-gray-200 bg-white p-8 shadow-sm flex flex-col">
              <div class="flex-1">
                <img src="/assets/images/navibil.svg" alt="Navibil Logo" class="h-12 w-auto mb-4">
                <h3 class="text-xl font-semibold text-gray-900">{{ $t('homePage.ventures.navibil.title') }}</h3>
                <p class="mt-3 text-base text-gray-500">
                  {{ $t('homePage.ventures.navibil.description') }}
                </p>
              </div>
              <div class="mt-6">
                <NuxtLink to="/ventures/navibil" class="text-base font-medium text-indigo-600 hover:text-indigo-500">
                  {{ $t('common.learnMore') }} <span aria-hidden="true">&rarr;</span>
                </NuxtLink>
              </div>
            </div>

            <!-- Estegre -->
            <div class="relative rounded-lg border border-gray-200 bg-white p-8 shadow-sm flex flex-col">
              <div class="flex-1">
                <img src="/assets/images/estegre.svg" alt="Estegre Logo" class="h-12 w-auto mb-4">
                <h3 class="text-xl font-semibold text-gray-900">{{ $t('homePage.ventures.estegre.title') }}</h3>
                <p class="mt-3 text-base text-gray-500">
                  {{ $t('homePage.ventures.estegre.description') }}
                </p>
              </div>
              <div class="mt-6">
                <NuxtLink to="/ventures/estegre" class="text-base font-medium text-indigo-600 hover:text-indigo-500">
                  {{ $t('common.learnMore') }} <span aria-hidden="true">&rarr;</span>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:text-center mb-16">
          <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">{{ $t('homePage.features.title') }}</h2>
          <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {{ $t('homePage.features.subtitle') }}
          </p>
          <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            {{ $t('homePage.features.description') }}
          </p>
        </div>

        <div class="mt-10">
          <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <!-- Feature 1 -->
            <div class="relative group">
              <div class="relative bg-white p-6 rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div class="inline-flex p-3 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-xl shadow-lg">
                    <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                </div>
                <div class="text-center mt-6">
                  <h3 class="text-lg font-bold text-gray-900 mb-2">{{ $t('homePage.features.web.title') }}</h3>
                  <p class="text-base text-gray-500">
                    {{ $t('homePage.features.web.description') }}
                  </p>
                </div>
              </div>
            </div>

            <!-- Feature 2 -->
            <div class="relative group">
              <div class="relative bg-white p-6 rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div class="inline-flex p-3 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-xl shadow-lg">
                    <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <div class="text-center mt-6">
                  <h3 class="text-lg font-bold text-gray-900 mb-2">{{ $t('homePage.features.mobile.title') }}</h3>
                  <p class="text-base text-gray-500">
                    {{ $t('homePage.features.mobile.description') }}
                  </p>
                </div>
              </div>
            </div>

            <!-- Feature 3 -->
            <div class="relative group">
              <div class="relative bg-white p-6 rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div class="inline-flex p-3 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-xl shadow-lg">
                    <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                </div>
                <div class="text-center mt-6">
                  <h3 class="text-lg font-bold text-gray-900 mb-2">{{ $t('homePage.features.data.title') }}</h3>
                  <p class="text-base text-gray-500">
                    {{ $t('homePage.features.data.description') }}
                  </p>
                </div>
              </div>
            </div>

            <!-- Feature 4 -->
            <div class="relative group">
              <div class="relative bg-white p-6 rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div class="inline-flex p-3 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-xl shadow-lg">
                    <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                </div>
                <div class="text-center mt-6">
                  <h3 class="text-lg font-bold text-gray-900 mb-2">{{ $t('homePage.features.cloud.title') }}</h3>
                  <p class="text-base text-gray-500">
                    {{ $t('homePage.features.cloud.description') }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <div class="bg-blue-50">
      <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span class="block">{{ $t('homePage.cta.title') }}</span>
          <span class="block text-blue-600">{{ $t('homePage.cta.subtitle') }}</span>
        </h2>
        <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div class="inline-flex rounded-md shadow">
            <NuxtLink
              to="/contact"
              class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              {{ $t('homePage.cta.buttons.contact') }}
            </NuxtLink>
          </div>
          <div class="ml-3 inline-flex rounded-md shadow">
            <NuxtLink
              to="/projects"
              class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
            >
              {{ $t('homePage.cta.buttons.projects') }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

defineI18nRoute({
  paths: {
    en: '/',
    tr: '/'
  }
})

const { t } = useI18n()

// SEO meta tags
useSeoMeta({
  title: () => t('homePage.hero.title'),
  ogTitle: () => t('homePage.hero.title'),
  description: () => t('homePage.hero.description'),
  ogDescription: () => t('homePage.hero.description')
})
</script> 