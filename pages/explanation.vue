<script setup lang="ts">
import { FwbButton } from 'flowbite-vue'
</script>

<template>
  <main class="flex min-h-screen w-full flex-col items-center p-8">
    <h2 class="mb-4 text-3xl font-bold leading-none tracking-tight text-gray-900 md:text-4xl">
      Creativiteit meten in foto's:
      <small class="ms-2 font-semibold text-gray-500 dark:text-gray-400">hoe werkt dat?</small>
    </h2>
    <div class="max-w-prose">
      <p class="my-4 text-lg font-normal text-gray-500 lg:text-xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
        est laborum.
      </p>
      <p class="mb-4 text-lg font-normal text-gray-500 lg:text-xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
        est laborum.
      </p>
      <FwbButton
        href="/vote"
        class="bg-TUcyan hover:bg-TUdarkblue focus:outline-none focus:ring-4 focus:ring-TUblue active:outline-none active:ring-4 active:ring-TUblue"
      >
        Ik begrijp het en wil nu gaan stemmen
        <svg
          class="size-[24px] inline"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 12H5m14 0-4 4m4-4-4-4"
          />
        </svg>
      </FwbButton>
    </div>
  </main>
</template>

<style scoped>

</style>
