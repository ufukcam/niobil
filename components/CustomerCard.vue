<template>
  <div class="flex flex-col items-center space-y-4 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200">
    <img 
      :src="customer.logo" 
      :alt="customer.name"
      class="h-20 w-20 object-contain"
    >
    <h3 class="text-lg font-medium text-gray-900">{{ customer.name }}</h3>
    <p class="text-sm text-gray-500 text-center">{{ customer.description }}</p>
    <div class="flex items-center space-x-2 text-sm text-gray-500">
      <svg class="h-5 w-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
      </svg>
      <span>{{ customer.projectCount }} Proje Tamamlandı</span>
    </div>
    <div class="flex flex-wrap gap-2 justify-center">
      <span 
        v-for="service in customer.services" 
        :key="service"
        class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
      >
        {{ service }}
      </span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  customer: {
    type: Object,
    required: true,
    default: () => ({
      name: '',
      logo: '',
      description: '',
      projectCount: 0,
      services: []
    })
  }
})
</script> 