<script setup lang="ts">
import { FwbP } from 'flowbite-vue'
</script>

<template>
  <main class="flex min-h-screen w-full flex-col items-center p-8">
    <h2 class="mb-4 text-3xl font-bold leading-none tracking-tight text-gray-900 md:text-4xl">
      Apache 2.0 license
    </h2>
    <div class="max-w-prose text-justify">
      <fwb-p class="my-4 text-lg">
        Copyright 2024 Jari de Keijzer
      </fwb-p>
      <fwb-p class="my-4 text-lg">
        Licensed under the Apache License, Version 2.0 (the "License");
        you may not use this website/code except in compliance with the License.
        You may obtain a copy of the License at
      </fwb-p>
      <fwb-p class="my-4 text-lg">
        <NuxtLink
          to="https://www.apache.org/licenses/LICENSE-2.0"
          class="font-medium text-TUcyan"
        >
          https://www.apache.org/licenses/LICENSE-2.0
        </NuxtLink>
      </fwb-p>
      <fwb-p class="my-4 text-lg">
        Unless required by applicable law or agreed to in writing, software
        distributed under the License is distributed on an "AS IS" BASIS,
        WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
        See the License for the specific language governing permissions and
        limitations under the License.
      </fwb-p>
    </div>
  </main>
</template>

<style scoped>

</style>
