<script setup lang="ts">
const localePreference = useCookie('locale', {
  maxAge: 7 * 24 * 60 * 60,
})

const { locale, setLocale } = useI18n()
setLocale(localePreference.value ? localePreference.value : 'nl')
</script>

<template>
  <main class="flex min-h-screen w-full flex-col items-center p-8">
    <template v-if="locale==='en'">
      <ContactEN />
    </template>
    <template v-else>
      <ContactNL />
    </template>
  </main>
</template>

<style scoped>

</style>
