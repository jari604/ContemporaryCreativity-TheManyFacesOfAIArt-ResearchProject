<script setup lang="ts">
const { locale } = useI18n()
</script>

<template>
  <main class="flex min-h-screen w-full flex-col items-center p-8">
    <h1 class="mb-4 md:h-14 text-3xl font-extrabold leading-none tracking-tight md:text-5xl text-transparent bg-clip-text bg-gradient-to-r to-TUdarkgreen from-TUlightgreen">
      Contemporary Creativity -
      <small class="font-semibold text-transparent bg-clip-text bg-gradient-to-r to-TUorange from-TUyellow">{{ $t('manyFaces') }}</small>
    </h1>
    <p class="mb-6 text-lg font-normal text-gray-500 sm:px-16 lg:text-xl xl:px-48">
      {{ $t('research') }}
    </p>
    <template v-if="locale==='en'">
      <OpeningEN />
    </template>
    <template v-else>
      <OpeningNL />
    </template>
  </main>
</template>

<style scoped>

</style>
