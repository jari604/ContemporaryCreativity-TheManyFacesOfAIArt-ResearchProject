<script setup lang="ts">

import {FwbCard, FwbHeading, FwbP} from "flowbite-vue";
</script>

<template>
  <main class="flex min-h-screen w-full flex-col items-center p-8">
    <FwbCard class="max-w-sm" img-alt="Profile picture Jari de Keijzer" img-src="/jari.jpg">
      <div class="p-5">
      <FwbHeading tag="h5" class="text-2xl font-bold tracking-tight text-gray-900">
        Jari de Keijzer
      </FwbHeading>
      <FwbP class="font-normal text-gray-700">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </FwbP>
        </div>
    </FwbCard>
  </main>
</template>

<style scoped>

</style>