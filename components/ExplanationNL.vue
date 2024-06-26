<script setup lang="ts">
import { FwbCard, FwbHeading, FwbP } from 'flowbite-vue'
</script>

<template>
  <div class="flex flex-col items-center w-full max-w-prose gap-4">
    <Fwb-card
      class="p-5 w-fit"
      variant="horizontal"
    >
      <Fwb-heading
        tag="h5"
        class="text-xl tracking-tight"
      >
        Kies volgens intuïtie!
      </Fwb-heading>
      <Fwb-p>
        <ol class="space-y-1 list-decimal list-inside">
          <li>U krijgt twee foto's te zien</li>
          <li>
            Per paar foto's, maakt u <strong class="font-bold text-gray-900">drie</strong> keuzes:
            <ul class="md:ps-3 ps-1 mt-2 list-disc list-inside">
              <li>Welke foto is het meest <strong class="font-bold text-gray-900">vernieuwend?</strong></li>
              <li>Welke foto is het meest <strong class="font-bold text-gray-900">verrassend?</strong></li>
              <li>Welke foto is het meest <strong class="font-bold text-gray-900">waardevol?</strong></li>
            </ul>
          </li>
          <li>Klik op de knoppen tussen de foto's</li>
          <li>
            Kies op uw eerste <strong class="font-bold text-gray-900">impuls</strong> en
            <strong class="font-bold text-gray-900">intuïtie</strong>
          </li>
          <li>Klik op de groene 'Verstuur' knop</li>
          <li>De volgende twee foto's verschijnen</li>
          <li>Gevraagd wordt om {{ useRuntimeConfig().public.minNumberOfVotesPerParticipant }} keer te stemmen</li>
          <li>Uw deelname kost ongeveer 15 minuten</li>
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
        Wat is vernieuwend?
      </Fwb-heading>
      <Fwb-p class="text-pretty text-justify">
        Een afbeelding is vernieuwender dan de andere als er meer nieuwe elementen in zitten die u nog niet
        eerder hebt gezien. Deze <strong class="font-bold text-gray-900">nieuwe</strong> elementen hoeven dus niet
        verrassend of waardevol te zijn.
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
        Wat is verrassend?
      </Fwb-heading>
      <Fwb-p class="text-pretty text-justify">
        Een afbeelding is verrassender dan de andere als het een onverwachte twist heeft met
        bijvoorbeeld vreemde combinaties van verschillende elementen. Dit
        <strong class="font-bold text-gray-900">verrassende</strong> hoeft dus niet nieuw of waardevol te zijn.
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
        Wat is waardevol?
      </Fwb-heading>
      <Fwb-p class="text-pretty text-justify">
        Een afbeelding is waardevoller dan de andere afbeelding als het een esthetische (hoe het er uit ziet) of
        emotionele waarde heeft. Dit kan bijvoorbeeld een mooie compositie zijn of een plaatje dat raakt. Deze
        <strong class="font-bold text-gray-900">waarde</strong> hoeft niet nieuw of verrassend te zijn.
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
        Wat is een ELO score?
      </Fwb-heading>
      <Fwb-p class="text-pretty text-justify">
        Een <NuxtLink
          to="https://nl.wikipedia.org/wiki/Elo-rating"
          class="font-medium text-TUcyan"
        >
          ELO-rating
        </NuxtLink>(score) is een getalsmatige aanduiding van de sterkte van een speler. Het wordt het meest toegepast in
        schaken en dammen, maar kan bij elk spel worden gebruikt waarbij spelers 1 tegen 1 spelen. In dit onderzoek
        zijn de afbeeldingen de 'spelers', in plaats van personen. U als deelnemer bepaalt echter wie de winnaar is
        van het 'spel'. Na genoeg stemmen ontstaat een rangschikking van foto's, waarbij de meest creatieve
        afbeelding de hoogste score heeft.
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
</template>

<style scoped>

</style>
