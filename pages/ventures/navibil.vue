<template>
  <div class="bg-white">
    <!-- Hero section -->
    <div class="relative bg-gray-50 overflow-hidden">
      <div class="relative pt-6 pb-16 sm:pb-24">
        <main class="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
          <div class="text-center">
            <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span class="block">{{ $t('ventures.navibil.hero.title') }}</span>
              <span class="block text-indigo-600">{{ $t('ventures.navibil.hero.subtitle') }}</span>
            </h1>
            <p class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              {{ $t('ventures.navibil.hero.description') }}
            </p>
          </div>
        </main>
      </div>
    </div>

    <!-- Feature section -->
    <div class="relative bg-white py-16 sm:py-24 lg:py-32">
      <div class="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 class="text-base font-semibold uppercase tracking-wider text-indigo-600">{{ $t('ventures.navibil.features.title') }}</h2>
        <p class="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          {{ $t('ventures.navibil.features.subtitle') }}
        </p>
        <p class="mx-auto mt-5 max-w-prose text-xl text-gray-500">
          {{ $t('ventures.navibil.features.description') }}
        </p>
        <div class="mt-12">
          <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div class="pt-6">
              <div class="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                <div class="-mt-6">
                  <div>
                    <span class="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                      <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                      </svg>
                    </span>
                  </div>
                  <h3 class="mt-8 text-lg font-medium text-gray-900 tracking-tight">{{ $t('ventures.navibil.features.items.gps.title') }}</h3>
                  <p class="mt-5 text-base text-gray-500">
                    {{ $t('ventures.navibil.features.items.gps.description') }}
                  </p>
                </div>
              </div>
            </div>

            <div class="pt-6">
              <div class="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                <div class="-mt-6">
                  <div>
                    <span class="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                      <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </span>
                  </div>
                  <h3 class="mt-8 text-lg font-medium text-gray-900 tracking-tight">{{ $t('ventures.navibil.features.items.fuel.title') }}</h3>
                  <p class="mt-5 text-base text-gray-500">
                    {{ $t('ventures.navibil.features.items.fuel.description') }}
                  </p>
                </div>
              </div>
            </div>

            <div class="pt-6">
              <div class="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                <div class="-mt-6">
                  <div>
                    <span class="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                      <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </span>
                  </div>
                  <h3 class="mt-8 text-lg font-medium text-gray-900 tracking-tight">{{ $t('ventures.navibil.features.items.driver.title') }}</h3>
                  <p class="mt-5 text-base text-gray-500">
                    {{ $t('ventures.navibil.features.items.driver.description') }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA section -->
    <div class="bg-indigo-50">
      <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
          <span class="block">{{ $t('ventures.navibil.cta.title') }}</span>
          <span class="block text-indigo-600">{{ $t('ventures.navibil.cta.subtitle') }}</span>
        </h2>
        <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div class="inline-flex rounded-md shadow">
            <NuxtLink to="/contact" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
              {{ $t('ventures.navibil.cta.button') }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

const { t } = useI18n()

// SEO meta tags
useHead({
  title: t('ventures.navibil.meta.title'),
  meta: [
    {
      name: 'description',
      content: t('ventures.navibil.meta.description')
    },
    {
      name: 'keywords',
      content: t('ventures.navibil.meta.keywords')
    }
  ]
})

// Define i18n route
defineI18nRoute()
</script> 