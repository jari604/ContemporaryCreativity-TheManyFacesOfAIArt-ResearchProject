<script setup lang="ts">
const { locale } = useI18n()
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
