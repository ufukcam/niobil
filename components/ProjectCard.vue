<template>
  <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
    <div class="flex-shrink-0">
      <img class="h-48 w-full object-cover" :src="project.image" :alt="project.title">
    </div>
    <div class="flex-1 bg-white p-6 flex flex-col justify-between">
      <div class="flex-1">
        <p class="text-sm font-medium text-blue-600">
          {{ project.category }}
        </p>
        <NuxtLink :to="'/projects/' + project.id" class="block mt-2">
          <p class="text-xl font-semibold text-gray-900">{{ project.title }}</p>
          <p class="mt-3 text-base text-gray-500">{{ project.description }}</p>
        </NuxtLink>
      </div>
      <div class="mt-6 flex items-center">
        <div class="flex-shrink-0">
          <span class="sr-only">{{ project.client }}</span>
          <img class="h-10 w-10 rounded-full" :src="project.clientLogo" :alt="project.client">
        </div>
        <div class="ml-3">
          <p class="text-sm font-medium text-gray-900">
            {{ project.client }}
          </p>
          <div class="flex space-x-1 text-sm text-gray-500">
            <time :datetime="project.date">{{ project.date }}</time>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    required: true,
    default: () => ({
      id: '',
      title: '',
      description: '',
      image: '',
      category: '',
      client: '',
      clientLogo: '',
      date: ''
    })
  }
})
</script> 