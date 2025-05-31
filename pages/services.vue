<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-50 to-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="text-center mb-16">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">
          {{ $t('servicesPage.title') }}
        </h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          {{ $t('servicesPage.description') }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ServiceCard
          v-for="service in services"
          :key="service.id"
          :title="$t(service.titleKey)"
          :description="$t(service.descriptionKey)"
          :icon="service.icon"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
defineI18nRoute({
  paths: {
    en: '/services',
    tr: '/hizmetler'
  }
})

const { t } = useI18n()

// SEO meta tags
useSeoMeta({
  title: () => t('servicesPage.meta.title'),
  ogTitle: () => t('servicesPage.meta.title'),
  description: () => t('servicesPage.meta.description'),
  ogDescription: () => t('servicesPage.meta.description'),
  keywords: () => t('servicesPage.meta.keywords')
})

const services = [
  {
    id: 'industrial',
    titleKey: 'servicesPage.services.industrial.title',
    descriptionKey: 'servicesPage.services.industrial.description',
    href: '/services/industrial-automation',
    icon: 'industrial'
  },
  {
    id: 'network',
    titleKey: 'servicesPage.services.network.title',
    descriptionKey: 'servicesPage.services.network.description',
    href: '/services/network-solutions',
    icon: 'network'
  },
  {
    id: 'server',
    titleKey: 'servicesPage.services.server.title',
    descriptionKey: 'servicesPage.services.server.description',
    href: '/services/server-solutions',
    icon: 'server'
  },
  {
    id: 'security',
    titleKey: 'servicesPage.services.security.title',
    descriptionKey: 'servicesPage.services.security.description',
    href: '/services/security-solutions',
    icon: 'security'
  },
  {
    id: 'software',
    titleKey: 'servicesPage.services.software.title',
    descriptionKey: 'servicesPage.services.software.description',
    href: '/services/software-development',
    icon: 'software'
  },
  {
    id: 'iot',
    titleKey: 'servicesPage.services.iot.title',
    descriptionKey: 'servicesPage.services.iot.description',
    href: '/services/iot-solutions',
    icon: 'iot'
  },
  {
    id: 'cloud',
    titleKey: 'servicesPage.services.cloud.title',
    descriptionKey: 'servicesPage.services.cloud.description',
    href: '/services/cloud-solutions',
    icon: 'cloud'
  },
  {
    id: 'analytics',
    titleKey: 'servicesPage.services.analytics.title',
    descriptionKey: 'servicesPage.services.analytics.description',
    href: '/services/data-analytics',
    icon: 'analytics'
  },
  {
    id: 'consulting',
    titleKey: 'servicesPage.services.consulting.title',
    descriptionKey: 'servicesPage.services.consulting.description',
    href: '/services/technical-consulting',
    icon: 'consulting'
  }
]
</script> 