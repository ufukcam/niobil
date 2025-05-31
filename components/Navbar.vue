<template>
  <nav class="bg-white shadow">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <!-- Logo -->
          <div class="flex-shrink-0 flex items-center">
            <NuxtLink to="/" class="text-xl font-bold text-indigo-600">
              Niobil
            </NuxtLink>
          </div>
          
          <!-- Navigation Links -->
          <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
            <NuxtLink to="/" class="inline-flex items-center px-1 pt-1 border-b-2 border-indigo-500 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out">
              {{ $t('common.home') }}
            </NuxtLink>
            <NuxtLink :to="localePath('projects')" class="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out">
              {{ $t('projectsPage.title') }}
            </NuxtLink>
            <NuxtLink :to="localePath('services')" class="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out">
              {{ $t('common.services') }}
            </NuxtLink>
            <NuxtLink :to="localePath('customers')" class="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out">
              {{ $t('common.customers') }}
            </NuxtLink>
            <div class="relative group">
              <button class="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out h-full">
                {{ $t('homePage.ventures.title') }}
                <svg class="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </button>
              <div class="absolute z-10 hidden group-hover:block w-48 top-full bg-white rounded-md shadow-lg">
                <div class="py-1">
                  <NuxtLink to="/ventures/navibil" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">{{ $t('homePage.ventures.navibil.title') }}</NuxtLink>
                  <NuxtLink to="/ventures/estegre" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">{{ $t('homePage.ventures.estegre.title') }}</NuxtLink>
                </div>
              </div>
            </div>
            <NuxtLink :to="localePath('contact')" class="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out">
              {{ $t('common.contact') }}
            </NuxtLink>
          </div>
        </div>

        <!-- Language Switcher -->
        <div class="hidden sm:ml-6 sm:flex sm:items-center">
          <div class="relative group">
            <button class="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 focus:outline-none transition duration-150 ease-in-out">
              <span>{{ currentLocale === 'tr' ? 'TR' : 'EN' }}</span>
              <svg class="ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </button>
            <div class="absolute right-0 z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible hover:opacity-100 hover:visible transition-all duration-300 ease-in-out w-24 mt-2 bg-white rounded-md shadow-lg">
              <div class="py-1">
                <button
                  v-for="lang in locales"
                  :key="lang.code"
                  @click="setLanguage(lang.code)"
                  class="block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100"
                >
                  {{ lang.code.toUpperCase() }}
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Mobile menu button -->
        <div class="flex items-center sm:hidden">
          <button @click="toggleMobileMenu" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
            <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path v-if="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div v-show="isMobileMenuOpen" class="sm:hidden">
      <div class="pt-2 pb-3 space-y-1">
        <NuxtLink to="/" class="block pl-3 pr-4 py-2 border-l-4 border-indigo-500 text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition duration-150 ease-in-out">
          {{ $t('common.home') }}
        </NuxtLink>
        <div class="relative">
          <button @click="toggleVenturesMenu" class="w-full flex items-center pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out">
            {{ $t('homePage.ventures.title') }}
            <svg class="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </button>
          <div v-show="isVenturesMenuOpen" class="pl-4">
            <NuxtLink to="/ventures/navibil" class="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300">
              {{ $t('homePage.ventures.navibil.title') }}
            </NuxtLink>
            <NuxtLink to="/ventures/estegre" class="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300">
              {{ $t('homePage.ventures.estegre.title') }}
            </NuxtLink>
          </div>
        </div>
        <NuxtLink to="/projects" class="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out">
          {{ $t('projectsPage.title') }}
        </NuxtLink>
        <NuxtLink to="/services" class="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out">
          {{ $t('common.services') }}
        </NuxtLink>
        <NuxtLink to="/customers" class="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out">
          {{ $t('common.customers') }}
        </NuxtLink>
        <NuxtLink to="/contact" class="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out">
          {{ $t('common.contact') }}
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter, useLocalePath } from '#imports'

const { locale, locales, setLocale } = useI18n()
const router = useRouter()
const localePath = useLocalePath()
const currentLocale = ref(locale.value)
const isMobileMenuOpen = ref(false)
const isVenturesMenuOpen = ref(false)

const setLanguage = async (code) => {
  try {
    await setLocale(code)
    currentLocale.value = code
    // Mevcut rotayı yeni dilde yeniden yönlendir
    const currentRoute = router.currentRoute.value
    const newPath = localePath(currentRoute.name, code)
    if (newPath !== currentRoute.path) {
      await router.push(newPath)
    }
  } catch (error) {
    console.error('Dil değiştirme hatası:', error)
  }
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const toggleVenturesMenu = () => {
  isVenturesMenuOpen.value = !isVenturesMenuOpen.value
}
</script> 