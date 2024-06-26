<script setup lang="ts">
const localePreference = useCookie('locale', {
  maxAge: 31 * 24 * 60 * 60,
})
const { setLocale } = useI18n()
setLocale(localePreference.value ? localePreference.value : 'nl')
</script>

<template>
  <div>
    <NavBar />
    <NuxtPage />
  </div>
</template>
