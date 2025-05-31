<template>
  <div class="bg-gray-50">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <div class="text-center">
        <h1 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          {{ $t('customersPage.title') }}
        </h1>
        <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
          {{ $t('customersPage.subtitle') }}
        </p>
      </div>

      <div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
        <CustomerCard 
          v-for="customer in customers" 
          :key="customer.id" 
          :customer="customer"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
defineI18nRoute({
  paths: {
    en: '/customers',
    tr: '/musteriler'
  }
})

const customers = ref([
  {
    id: '1',
    name: 'Sea to Sky',
    logo: 'https://ui-avatars.com/api/?name=STS&color=7F9CF5&background=EBF4FF&size=128',
    description: 'Türkiye\'nin önde gelen enduro yarış organizasyonu firması',
    projectCount: 3,
    services: ['Dijital Dönüşüm', 'Teknik Danışmanlık']
  },
  {
    id: '2',
    name: 'STF',
    logo: 'https://ui-avatars.com/api/?name=STF&color=7F9CF5&background=EBF4FF&size=128',
    description: 'Akıllı tarım sistemleri ve dijital tarım otomasyonları',
    projectCount: 4,
    services: ['Endüstriyel Otomasyon', 'Dijital Dönüşüm']
  },
  {
    id: '3',
    name: 'Norbuddet',
    logo: 'https://ui-avatars.com/api/?name=NB&color=7F9CF5&background=EBF4FF&size=128',
    description: 'Uluslararası lojistik ve taşımacılık hizmetleri',
    projectCount: 2,
    services: ['Lojistik Çözümler', 'Dijital Dönüşüm']
  },
  {
    id: '4',
    name: 'Pegas Touristik',
    logo: 'https://ui-avatars.com/api/?name=PT&color=7F9CF5&background=EBF4FF&size=128',
    description: 'Türkiye\'nin en büyük turizm acentası',
    projectCount: 5,
    services: ['Dijital Dönüşüm', 'Teknik Danışmanlık']
  },
  {
    id: '5',
    name: 'Swandoor Hotel',
    logo: 'https://ui-avatars.com/api/?name=SH&color=7F9CF5&background=EBF4FF&size=128',
    description: 'Dünya çapında lüks otel zinciri',
    projectCount: 3,
    services: ['Otel Yönetim Sistemleri', 'Dijital Dönüşüm']
  },
  {
    id: '5',
    name: 'Altıntar',
    logo: 'https://ui-avatars.com/api/?name=SH&color=7F9CF5&background=EBF4FF&size=128',
    description: 'Agro-Endüstriyel sektörün lider firmalarındandır.',
    projectCount: 3,
    services: ['Tarım ve Endüstriyel Otomasyon', 'Dijital Dönüşüm']
  },
  {
    id: '5',
    name: 'Southwind Airlines',
    logo: 'https://ui-avatars.com/api/?name=SW&color=7F9CF5&background=EBF4FF&size=128',
    description: 'Havayolu sektöründe lider firmalarındandır.',
    projectCount: 3,
    services: ['Havayolu Yönetim Sistemleri', 'Dijital Dönüşüm']
  }
])
</script> 