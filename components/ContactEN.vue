<script setup lang="ts">
import { FwbCard, FwbHeading, FwbP } from 'flowbite-vue'
</script>

<template>
  <FwbCard
    img-alt="Profile picture Jari de Keijzer"
    img-src="/jari.jpg"
  >
    <div class="p-5 text-justify text-pretty">
      <FwbHeading
        tag="h5"
        class="mb-4 text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r to-TUdarkblue from-TUcyan"
      >
        Thank you for participating!
      </FwbHeading>
      <FwbP>
        Hi!
      </FwbP>
      <FwbP>
        My name is Jari de Keijzer, a double bachelor student in Computer Science & Engineering and Philosophy. This
        website and the research I am conducting with it is part of my bachelor's thesis for the computer science
        bachelor program.
      </FwbP>
      <FwbP>
        My research is about the creative potential of AI (artificial intelligence) generated images. I am very curious
        about your intuitive opinion on the creativity of these images. After completing this research, I will analyze
        the ranking of these photos and draw conclusions from it. The challenging but very interesting aspect of this
        topic is that it combines computer science and philosophy.
      </FwbP>
      <FwbP>
        If you have any questions about my research or would like to receive the results afterward, please send me an
        email via the button below.
      </FwbP>
      <FwbP>
        Thank you very much for participating!
      </FwbP>
      <FwbP>
        Jari de Keijzer
      </FwbP>

      <NuxtLink
        to="mailto:j.n.dekeijzer@student.tudelft.nl?subject=Research Project"
        class="flex w-max py-2.5 px-5 m-auto rounded-lg font-medium text-TUwhite bg-TUcyan text-base hover:bg-TUdarkblue focus:ring-2 focus:outline-none focus:ring-TUblue active:ring-4 active:ring-TUblue"
      >
        Send an email
        <svg
          class="w-6 h-6 inline"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M11 16v-5.5A3.5 3.5 0 0 0 7.5 7m3.5 9H4v-5.5A3.5 3.5 0 0 1 7.5 7m3.5 9v4M7.5 7H14m0 0V4h2.5M14 7v3m-3.5 6H20v-6a3 3 0 0 0-3-3m-2 9v4m-8-6.5h1"
          />
        </svg>
      </NuxtLink>
    </div>
  </FwbCard>
</template>

<style scoped>

</style>
