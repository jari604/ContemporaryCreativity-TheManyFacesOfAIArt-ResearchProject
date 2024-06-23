<script setup lang="ts">
import { FwbCard, FwbHeading, FwbP } from 'flowbite-vue'
</script>

<template>
  <main class="flex min-h-screen w-full flex-col items-center p-8">
    <h2 class="mb-4 text-3xl font-bold leading-none tracking-tight text-gray-900 md:text-4xl">
      Creativiteit meten in foto's:
      <small class="ms-2 font-semibold text-gray-500">hoe werkt dat?</small>
    </h2>
    <div class="flex flex-col items-center w-full max-w-prose gap-4">
      <Fwb-card
        class="p-5 w-fit"
        variant="horizontal"
      >
        <Fwb-heading
          tag="h5"
          class="text-xl tracking-tight"
        >
          Kies volgens je intuïtie!
        </Fwb-heading>
        <Fwb-p>
          <ol class="space-y-1 list-decimal list-inside">
            <li>Je krijgt twee foto's te zien</li>
            <li>
              Per paar foto's, maak je <strong class="font-semibold text-gray-900">drie</strong> keuzes:
              <ul class="ps-3 mt-2 list-disc list-inside">
                <li>Welke foto is het meest <strong class="font-semibold text-gray-900"> vernieuwend?</strong></li>
                <li>Welke foto is het meest <strong class="font-semibold text-gray-900">verrassend?</strong></li>
                <li>Welke foto is het meest <strong class="font-semibold text-gray-900">waardevol?</strong></li>
              </ul>
            </li>
            <li>Klik op de knoppen tussen de foto's</li>
            <li>Kies op je eerste <strong class="font-semibold text-gray-900">impuls</strong> en <strong class="font-semibold text-gray-900">intuïtie</strong></li>
            <li>Klik op de groene 'verzenden' knop</li>
            <li>De volgende twee foto's verschijnen</li>
            <li>Je wordt gevraagd om 20x te stemmen</li>
            <li>Je deelname kost ongeveer 15 minuten</li>
          </ol>
        </Fwb-p>
      </Fwb-card>

      <Fwb-card
        class="p-5"
        variant="horizontal"
      >
        <Fwb-heading
          tag="h5"
          class="text-xl tracking-tight"
        >
          Wat bedoel je met vernieuwend?
        </Fwb-heading>
        <Fwb-p class="text-pretty">
          Een plaatje is vernieuwender dan het andere plaatje als er meer nieuwe elementen in zitten die jij nog niet eerder hebt gezien. Deze nieuwe elementen hoeven dus niet verassend of waardevol te zijn.
        </Fwb-p>
      </Fwb-card>

      <Fwb-card
        class="p-5"
        variant="horizontal"
      >
        <Fwb-heading
          tag="h5"
          class="text-xl tracking-tight"
        >
          Wat bedoel je met verassend?
        </Fwb-heading>
        <Fwb-p class="text-pretty">
          Een plaatje is verrassender dan het andere plaatje als het plaatje een onverwachte twist heeft met bijvoorbeeld gekke combinaties van elementen. Deze twists hoeven dus niet nieuw of waardevol te zijn.
        </Fwb-p>
      </Fwb-card>

      <Fwb-card
        class="p-5"
        variant="horizontal"
      >
        <Fwb-heading
          tag="h5"
          class="text-xl tracking-tight"
        >
          Wat bedoel je met waardevol?
        </Fwb-heading>
        <Fwb-p class="text-pretty">
          Een plaatje is waardevoller dan het andere plaatje als het plaatje een esthetische (hoe het er uit ziet) of emotionele waarde heeft. Dit kan bijvoorbeeld een mooie compositie zijn of een plaatje dat je raakt. Deze waarde hoeft niet nieuw of verassend te zijn.
        </Fwb-p>
      </Fwb-card>

      <NuxtLink
        to="/vote"
        class="flex py-2.5 px-5 rounded-lg font-medium text-TUwhite w-full bg-TUcyan text-base hover:bg-TUdarkblue focus:ring-2 focus:outline-none focus:ring-TUblue active:ring-4 active:ring-TUblue"
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
      </NuxtLink>
    </div>
  </main>
</template>

<style scoped>

</style>
