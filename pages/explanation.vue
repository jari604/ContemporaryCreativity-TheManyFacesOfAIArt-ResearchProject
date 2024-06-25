<script setup lang="ts">
const localePreference = useCookie('locale', {
  maxAge: 7 * 24 * 60 * 60,
})

const { locale, setLocale } = useI18n()
setLocale(localePreference.value ? localePreference.value : 'nl')
</script>

<template>
  <main class="flex min-h-screen w-full flex-col items-center p-8">
    <h2 class="mb-4 whitespace-pre-line text-3xl font-bold leading-none tracking-tight md:text-4xl text-transparent bg-clip-text bg-gradient-to-r to-TUdarkgreen from-TUlightgreen">
      {{ $t('measuringCreativity') }} -
      <small class="font-semibold text-transparent bg-clip-text bg-gradient-to-r to-TUraspberry from-TUpink">{{ $t('howDoesItWork') }}</small>
    </h2>
    <template v-if="locale==='en'">
      <ExplanationEN />
    </template>
    <template v-else>
      <ExplanationNL />
    </template>
  </main>
</template>

<style scoped>

</style>
