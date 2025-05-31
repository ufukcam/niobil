<template>
  <div class="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
    <div class="max-w-max mx-auto">
      <main class="sm:flex">
        <p class="text-4xl font-extrabold text-indigo-600 sm:text-5xl">404</p>
        <div class="sm:ml-6">
          <div class="sm:border-l sm:border-gray-200 sm:pl-6">
            <h1 class="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
              {{ $t('error.pageNotFound') }}
            </h1>
            <p class="mt-4 text-base text-gray-500">
              {{ $t('error.checkUrl') }}
            </p>
          </div>
          <div class="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
            <NuxtLink
              :to="localePath('/')"
              class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {{ $t('error.goHome') }}
            </NuxtLink>
            <a
              href="mailto:info@Niobil.com"
              class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {{ $t('error.contact') }}
            </a>
          </div>
        </div>
      </main>
    </div>
    <!-- Animasyonlu İllüstrasyon -->
    <div class="mt-8 animate-float">
      <img
        src="/images/404-illustration.svg"
        alt="404 illustration"
        class="h-64 w-auto"
      />
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'error'
})
</script>

<style>
.animate-float {
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
}
</style> 