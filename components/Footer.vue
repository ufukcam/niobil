<template>
  <footer class="bg-white">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <div class="xl:grid xl:grid-cols-3 xl:gap-8">
        <!-- Company Info -->
        <div class="space-y-8 xl:col-span-1">
          <h3 class="text-xl font-bold text-indigo-600">Niobil</h3>
          <p class="text-gray-500 text-base">
            {{ $t('homePage.hero.description') }}
          </p>
          <div class="flex space-x-6">
            <a href="#" class="text-gray-400 hover:text-gray-500">
              <span class="sr-only">LinkedIn</span>
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/niobileu/" class="text-gray-400 hover:text-gray-500">
              <span class="sr-only">Instagram</span>
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.012 7.052.07 5.771.128 4.548.334 3.5 1.382 2.452 2.43 2.246 3.653 2.188 4.934.012 8.332 0 8.741 0 12s.012 3.668.07 4.948c.058 1.281.264 2.504 1.312 3.552 1.048 1.048 2.271 1.254 3.552 1.312C8.332 23.988 8.741 24 12 24s3.668-.012 4.948-.07c1.281-.058 2.504-.264 3.552-1.312 1.048-1.048 1.254-2.271 1.312-3.552.058-1.281.07-1.69.07-4.948s-.012-3.668-.07-4.948c-.058-1.281-.264-2.504-1.312-3.552C19.452.334 18.229.128 16.948.07 15.668.012 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Links -->
        <div class="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">{{ $t('common.services') }}</h3>
              <ul class="mt-4 space-y-4">
                <li>
                  <a href="#" class="text-base text-gray-500 hover:text-gray-900">{{ $t('homePage.features.web.title') }}</a>
                </li>
                <li>
                  <a href="#" class="text-base text-gray-500 hover:text-gray-900">{{ $t('homePage.features.mobile.title') }}</a>
                </li>
                <li>
                  <a href="#" class="text-base text-gray-500 hover:text-gray-900">{{ $t('homePage.features.data.title') }}</a>
                </li>
                <li>
                  <a href="#" class="text-base text-gray-500 hover:text-gray-900">{{ $t('homePage.features.cloud.title') }}</a>
                </li>
              </ul>
            </div>
            <div class="mt-12 md:mt-0">
              <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">{{ $t('footer.company') }}</h3>
              <ul class="mt-4 space-y-4">
                <li>
                  <a href="#" class="text-base text-gray-500 hover:text-gray-900">{{ $t('footer.about') }}</a>
                </li>
                <li>
                  <a href="#" class="text-base text-gray-500 hover:text-gray-900">{{ $t('projectsPage.title') }}</a>
                </li>
                <li>
                  <a href="#" class="text-base text-gray-500 hover:text-gray-900">{{ $t('common.contact') }}</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">{{ $t('common.contact') }}</h3>
              <ul class="mt-4 space-y-4">
                <li class="text-base text-gray-500">
                  <span class="font-medium">{{ $t('contactPage.info.address.label') }}:</span><br />
                  {{ $t('contactPage.info.address.value') }}
                </li>
                <li class="text-base text-gray-500">
                  <span class="font-medium">{{ $t('contactPage.info.email.label') }}:</span><br />
                  {{ $t('contactPage.info.email.value') }}
                </li>
                <li class="text-base text-gray-500">
                  <span class="font-medium">{{ $t('contactPage.info.phone.label') }}:</span><br />
                  {{ $t('contactPage.info.phone.value') }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-12 border-t border-gray-200 pt-8">
        <p class="text-base text-gray-400 xl:text-center">
          &copy; {{ new Date().getFullYear() }} {{ $t('footer.copyright') }}
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script> 