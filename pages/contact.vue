<script setup lang="ts">
import { FwbButton, FwbCard, FwbHeading, FwbP } from 'flowbite-vue'
</script>

<template>
  <main class="flex min-h-screen w-full flex-col items-center p-8">
    <FwbCard
      class="max-w-sm"
      img-alt="Profile picture Jari de Keijzer"
      img-src="/jari.jpg"
    >
      <div class="p-5 max-w-prose text-justify">
        <FwbHeading
          tag="h5"
          class="mb-4 text-2xl font-bold tracking-tight text-gray-900"
        >
          Jari de Keijzer
        </FwbHeading>
        <FwbP class="font-normal text-gray-700">
          Hi!
        </FwbP>
        <FwbP class="font-normal text-gray-700">
          Ik ben Jari de Keijzer, een dubbele bachelor student in technische informatica en filosofie. Deze website en
          het experiment wat ik daarmee uitvoer is onderdeel van mijn bachelor thesis voor de informatica bachelor.
        </FwbP>
        <FwbP class="font-normal text-gray-700">
          Mijn onderzoek gaat over de creatieve potentie van AI gegenereerde afbeeldingen. Ik ben benieuwd naar jouw
          mening over de creativiteit van deze afbeeldingen. Na de afronding van dit experiment zal ik de ranking van
          deze foto's gaan analyseren en daar zal ik een aantal conclusies uit trekken. Het leuke van dit onderwerp, is
          dat het een combinatie is van technische informatica en filosofie is.
        </FwbP>
        <FwbP class="font-normal text-gray-700">
          Mocht je vragen hebben over mijn onderzoek, of wil je de resultaten na afloop ontvangen, stuur mij dan een
          mail via onderstaande knop.
        </FwbP>
        <FwbP class="font-normal text-gray-700">
          Heel erg bedankt voor je deelname!
        </FwbP>
        <FwbP class="font-normal text-gray-700">
          Jari de Keijzer
        </FwbP>

        <NuxtLink to="mailto:j.n.dekeijzer@student.tudelft.nl?subject=Research Project">
          <FwbButton
            class="w-full bg-TUcyan hover:bg-TUdarkblue focus:outline-none focus:ring-4 focus:ring-TUblue active:outline-none active:ring-4 active:ring-TUblue"
          >
            Stuur een e-mail
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

          </FwbButton>
        </NuxtLink>
      </div>
    </FwbCard>
  </main>
</template>

<style scoped>

</style>
