<script setup lang="ts">
import { FwbCard, FwbHeading, FwbP } from 'flowbite-vue'
</script>

<template>
  <FwbCard
    img-alt="Profiel foto Jari de Keijzer"
    img-src="/jari.jpg"
  >
    <div class="p-5 text-justify text-pretty">
      <FwbHeading
        tag="h5"
        class="mb-4 text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r to-TUdarkblue from-TUcyan"
      >
        Bedankt voor uw deelname!
      </FwbHeading>
      <FwbP>
        Hi!
      </FwbP>
      <FwbP>
        Ik ben Jari de Keijzer, een dubbele bachelor student in technische informatica en filosofie. Deze website en
        het onderzoek wat ik daarmee uitvoer is onderdeel van mijn bachelor thesis voor de informatica bachelor.
      </FwbP>
      <FwbP>
        Mijn onderzoek gaat over de creatieve potentie van AI (kunstmatige intelligentie) gegenereerde afbeeldingen.
        Ik ben erg benieuwd naar uw intuïtieve mening over de creativiteit van deze afbeeldingen. Na de afronding van
        dit onderzoek zal ik de rangschikking van deze foto's gaan analyseren en daaruit een aantal conclusies trekken.
        Het uitdagende van dit onderwerp is dat het een combinatie van technische informatica en filosofie is.
      </FwbP>
      <FwbP>
        Mocht u vragen hebben over mijn onderzoek of wilt u de resultaten na afloop ontvangen, stuur mij dan een
        mail via onderstaande knop.
      </FwbP>
      <FwbP>
        Heel erg bedankt voor uw deelname!
      </FwbP>
      <FwbP>
        Jari de Keijzer
      </FwbP>

      <NuxtLink
        to="mailto:j.n.dekeijzer@student.tudelft.nl?subject=Research Project"
        class="flex w-max py-2.5 px-5 m-auto rounded-lg font-medium text-TUwhite bg-TUcyan text-base hover:bg-TUdarkblue focus:ring-2 focus:outline-none focus:ring-TUblue active:ring-4 active:ring-TUblue"
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
      </NuxtLink>
    </div>
  </FwbCard>
</template>

<style scoped>

</style>
