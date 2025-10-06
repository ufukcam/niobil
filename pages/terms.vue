<template>
  <div class="bg-gray-50">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <div class="text-center">
        <h1 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Terms of Service
        </h1>
        <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
          Effective date: {{ effectiveDate }}
        </p>
      </div>

      <div class="mt-12 space-y-10 bg-white shadow-lg rounded-lg p-8">
        <section>
          <h2 class="text-2xl font-bold text-gray-900">1. Acceptance of Terms</h2>
          <p class="mt-3 text-gray-700 leading-7">
            By accessing or using our services, websites, or applications (collectively, the "Service"), you agree to be bound by these Terms of Service (the "Terms"). If you do not agree with any part of the Terms, you may not use the Service.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-gray-900">2. Changes to Terms</h2>
          <p class="mt-3 text-gray-700 leading-7">
            We may update these Terms from time to time. The updated Terms will be indicated by an updated "Effective date" and will become effective when posted. Your continued use of the Service after any changes constitutes acceptance of the updated Terms.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-gray-900">3. Accounts and Security</h2>
          <p class="mt-3 text-gray-700 leading-7">
            You are responsible for safeguarding your account credentials and for any activities or actions under your account. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-gray-900">4. Acceptable Use</h2>
          <p class="mt-3 text-gray-700 leading-7">
            You agree not to misuse the Service or help anyone else do so. Prohibited activities include, without limitation, interfering with the Service, accessing it using a method other than the interfaces and instructions we provide, or attempting to reverse engineer the Service.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-gray-900">5. Intellectual Property</h2>
          <p class="mt-3 text-gray-700 leading-7">
            The Service and its original content, features, and functionality are and will remain the exclusive property of their respective owners and are protected by applicable intellectual property laws.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-gray-900">6. Third‑Party Services</h2>
          <p class="mt-3 text-gray-700 leading-7">
            The Service may contain links to third‑party websites or services that are not owned or controlled by us. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third‑party websites or services.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-gray-900">7. Termination</h2>
          <p class="mt-3 text-gray-700 leading-7">
            We may suspend or terminate your access to the Service immediately, without prior notice or liability, for any reason, including if you breach the Terms. Upon termination, your right to use the Service will cease immediately.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-gray-900">8. Limitation of Liability</h2>
          <p class="mt-3 text-gray-700 leading-7">
            To the maximum extent permitted by law, in no event shall we be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of the Service.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-gray-900">9. Governing Law</h2>
          <p class="mt-3 text-gray-700 leading-7">
            These Terms shall be governed and construed in accordance with the laws applicable in our jurisdiction, without regard to its conflict of law provisions.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-gray-900">10. Contact Us</h2>
          <p class="mt-3 text-gray-700 leading-7">
            If you have any questions about these Terms, please contact us through the <NuxtLink to="/contact" class="text-blue-600 hover:text-blue-500 underline">contact page</NuxtLink>.
          </p>
        </section>
      </div>
    </div>
  </div>
  
</template>

<script setup>
import { computed } from 'vue'

defineI18nRoute({
  paths: {
    en: '/terms',
    tr: '/kosullar'
  }
})

const effectiveDate = computed(() => {
  const date = new Date('2025-10-06')
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
})

useSeoMeta({
  title: 'Terms of Service',
  ogTitle: 'Terms of Service',
  description: 'Read the Terms of Service governing your use of our website and services.',
  ogDescription: 'Read the Terms of Service governing your use of our website and services.',
  keywords: 'terms, terms of service, tos, legal, conditions'
})
</script>


