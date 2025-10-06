<template>
  <div class="bg-gradient-to-b from-gray-50 to-white">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
      <div class="text-center">
        <h1 class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
          {{ $t('projectsPage.title') }}
        </h1>
        <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
          {{ $t('projectsPage.subtitle') }}
        </p>
      </div>

      <div class="mt-16 grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
        <!-- Bentap -->
        <div class="flex flex-col overflow-hidden rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
          <div class="flex-shrink-0">
            <img class="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Bentap">
          </div>
          <div class="flex flex-1 flex-col justify-between bg-white p-6">
            <div class="flex-1">
              <a href="https://bentap.com" target="_blank" class="block mt-2">
                <p class="text-xl font-semibold text-gray-900">{{ $t('projectsPage.projects.bentap.title') }}</p>
                <p class="mt-3 text-base text-gray-500">
                  {{ $t('projectsPage.projects.bentap.description') }}
                </p>
              </a>
            </div>
            <div class="mt-6 flex items-center">
              <div class="flex-shrink-0">
                <img class="h-10" src="https://ui-avatars.com/api/?name=Bentap&color=7F9CF5&background=EBF4FF" alt="Bentap Logo">
              </div>
              <div class="ml-3">
                <p class="text-sm font-medium text-gray-900">
                  <a href="https://bentap.com" target="_blank" class="hover:underline">{{ $t('projectsPage.projects.bentap.website') }}</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- ThisMenu -->
        <div class="flex flex-col overflow-hidden rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
          <div class="flex-shrink-0">
            <img class="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="ThisMenu">
          </div>
          <div class="flex flex-1 flex-col justify-between bg-white p-6">
            <div class="flex-1">
              <a href="https://thismenu.net" target="_blank" class="block mt-2">
                <p class="text-xl font-semibold text-gray-900">{{ $t('projectsPage.projects.thismenu.title') }}</p>
                <p class="mt-3 text-base text-gray-500">
                  {{ $t('projectsPage.projects.thismenu.description') }}
                </p>
              </a>
            </div>
            <div class="mt-6 flex items-center">
              <div class="flex-shrink-0">
                <img class="h-10" src="https://ui-avatars.com/api/?name=ThisMenu&color=7F9CF5&background=EBF4FF" alt="ThisMenu Logo">
              </div>
              <div class="ml-3">
                <p class="text-sm font-medium text-gray-900">
                  <a href="https://thismenu.net" target="_blank" class="hover:underline">{{ $t('projectsPage.projects.thismenu.website') }}</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Benscreen -->
        <div class="flex flex-col overflow-hidden rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
          <div class="flex-shrink-0">
            <img class="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Benscreen">
          </div>
          <div class="flex flex-1 flex-col justify-between bg-white p-6">
            <div class="flex-1">
              <a href="https://benscreen.com" target="_blank" class="block mt-2">
                <p class="text-xl font-semibold text-gray-900">{{ $t('projectsPage.projects.benscreen.title') }}</p>
                <p class="mt-3 text-base text-gray-500">
                  {{ $t('projectsPage.projects.benscreen.description') }}
                </p>
              </a>
            </div>
            <div class="mt-6 flex items-center">
              <div class="flex-shrink-0">
                <img class="h-10" src="https://ui-avatars.com/api/?name=Benscreen&color=7F9CF5&background=EBF4FF" alt="Benscreen Logo">
              </div>
              <div class="ml-3">
                <p class="text-sm font-medium text-gray-900">
                  <a href="https://benscreen.com" target="_blank" class="hover:underline">{{ $t('projectsPage.projects.benscreen.website') }}</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Bilpp Payment -->
        <div class="flex flex-col overflow-hidden rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
          <div class="flex-shrink-0">
            <img class="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Niobil OU Payment">
          </div>
          <div class="flex flex-1 flex-col justify-between bg-white p-6">
            <div class="flex-1">
              <a href="https://pay.bilpp.com" target="_blank" class="block mt-2">
                <p class="text-xl font-semibold text-gray-900">{{ $t('projectsPage.projects.bilpp.title') }}</p>
                <p class="mt-3 text-base text-gray-500">
                  {{ $t('projectsPage.projects.bilpp.description') }}
                </p>
              </a>
            </div>
            <div class="mt-6 flex items-center">
              <div class="flex-shrink-0">
                <img class="h-10" src="https://ui-avatars.com/api/?name=Bilpp&color=7F9CF5&background=EBF4FF" alt="Niobil OU Logo">
              </div>
              <div class="ml-3">
                <p class="text-sm font-medium text-gray-900">
                  <a href="https://pay.bilpp.com" target="_blank" class="hover:underline">{{ $t('projectsPage.projects.bilpp.website') }}</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- BilppGo -->
        <div class="flex flex-col overflow-hidden rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
          <div class="flex-shrink-0">
            <img class="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="BilppGo">
          </div>
          <div class="flex flex-1 flex-col justify-between bg-white p-6">
            <div class="flex-1">
              <a href="https://bilppgo.com" target="_blank" class="block mt-2">
                <p class="text-xl font-semibold text-gray-900">{{ $t('projectsPage.projects.bilppgo.title') }}</p>
                <p class="mt-3 text-base text-gray-500">
                  {{ $t('projectsPage.projects.bilppgo.description') }}
                </p>
              </a>
            </div>
            <div class="mt-6 flex items-center">
              <div class="flex-shrink-0">
                <img class="h-10" src="https://ui-avatars.com/api/?name=BilppGo&color=7F9CF5&background=EBF4FF" alt="BilppGo Logo">
              </div>
              <div class="ml-3">
                <p class="text-sm font-medium text-gray-900">
                  <a href="https://bilppgo.com" target="_blank" class="hover:underline">{{ $t('projectsPage.projects.bilppgo.website') }}</a>
                </p>
              </div>
            </div>
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
    en: '/projects',
    tr: '/projeler'
  }
})

const { t } = useI18n()

// SEO meta tags
useSeoMeta({
  title: () => t('projectsPage.meta.title'),
  ogTitle: () => t('projectsPage.meta.title'),
  description: () => t('projectsPage.meta.description'),
  ogDescription: () => t('projectsPage.meta.description'),
  keywords: () => t('projectsPage.meta.keywords')
})
</script> 