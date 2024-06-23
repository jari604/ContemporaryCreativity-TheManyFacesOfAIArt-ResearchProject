<script setup lang="ts">
import { FwbP, FwbHeading, FwbCard } from 'flowbite-vue'
</script>

<template>
  <FwbCard
    variant="horizontal"
    class="p-5 max-w-prose text-justify"
  >
    <FwbHeading
      tag="h5"
      class="mb-2 text-2xl font-bold tracking-tight text-gray-900"
    >
      Deelname aan onderzoek
    </FwbHeading>
    <FwbP>
      Beste deelnemer,
    </FwbP>
    <FwbP>
      U wordt uitgenodigd om deel te nemen aan een onderzoek genaamd
      <strong class="font-bold text-gray-900">Contemporary Creativity: The Many Faces of AI Art.</strong>
      Dit onderzoek wordt uitgevoerd door Jari de Keijzer, Bachelor student Computer Science & Engineering aan de TU
      Delft, onder begeleiding van Dr. Anna Lukina.
    </FwbP>

    <FwbP>
      Het doel van dit onderzoek is om te ontdekken of afbeeldingen die gegenereerd worden door een specifiek
      Kunstmatige Intelligentie (AI) model creatief kunnen lijken. Om deze vraag te beantwoorden, stemt u, als
      deelnemer, op de creativiteit van paren van afbeeldingen. Voor elk paar afbeeldingen stemt u op de afbeelding die
      u het meest <strong class="font-bold text-gray-900"> vernieuwend, verrassend of waardevol</strong> vindt. Dit
      betekent dat u voor elk paar afbeeldingen drie stemmen moet uitbrengen. De paren afbeeldingen bevatten zowel door AI
      gegenereerde als niet-gegenereerde afbeeldingen. De AI afbeeldingen zullen zowel realistischere als
      'creatievere' (soms wat vreemde) plaatjes bevatten. Tijdens het stemproces krijgt u NIET te
      zien tot welke categorie de afbeelding behoort, dit is onderdeel van het onderzoek. Deelnemen aan dit onderzoek
      kost u ongeveer 15 minuten.
    </FwbP>

    <FwbP>
      Dit onderzoek is <strong class="font-bold text-gray-900">volledig anoniem</strong>, er worden dus GEEN
      persoonlijke gegevens verzameld. Deze stemwebsite wordt gehost op een server die eigendom is van de TU Delft,
      waarop geen andere gegevens dan uw anonieme stemmen worden verzameld. Deze stemmen worden gebruikt om de
      afbeeldingen te rangschikken op basis van een ELO-score (uitleg op de volgende pagina). Met deze ranking wordt de
      creativiteit van het AI-model geëvalueerd. De verzamelde stemmen, de ELO-ranking en de geëvalueerde resultaten
      worden gepubliceerd en gepresenteerd in een paper die publiekelijk beschikbaar zal zijn op de TU Delft repository.
    </FwbP>

    <FwbP>
      Iedereen van <strong class="font-bold text-gray-900">18 jaar of ouder</strong> mag meedoen aan dit
      onderzoek. Het is belangrijk voor dit onderzoek om een gevarieerde verzameling stemmen te krijgen. Meer
      deelnemers verhoogt de nauwkeurigheid van de ranglijst. Daarom is het u, de deelnemer, toegestaan om dit
      onderzoek met anderen te delen.
    </FwbP>

    <FwbP>
      Uw deelname aan dit onderzoek is geheel vrijwillig en u kunt zich op elk moment terugtrekken. Aangezien de
      stemmen volledig anoniem zijn, kunnen ze niet aan u worden gekoppeld, waardoor het onmogelijk is om 'uw' stemmen
      te verwijderen na het indienen.
    </FwbP>

    <FwbP>
      Doorgaan naar het volgende scherm start het stemproces, waardoor u een anonieme deelnemer bent.
    </FwbP>

    <FwbP>
      Eventuele vragen of opmerkingen kunnen naar het volgende e-mailadres worden gestuurd:
      <NuxtLink
        to="mailto:j.n.dekeijzer@student.tudelft.nl?subject=Research Project"
        class="font-medium text-TUcyan underline hover:text-TUdarkblue hover:no-underline"
      >
        j.n.dekeijzer@student.tudelft.nl
      </NuxtLink>
    </FwbP>

    <FwbP>
      Hartelijk dank voor uw tijd en deelname,
    </FwbP>
    <FwbP>
      Jari de Keijzer
    </FwbP>

    <NuxtLink
      to="/explanation"
      class="flex py-2.5 px-5 rounded-lg font-medium text-TUwhite w-full bg-TUcyan text-base hover:bg-TUdarkblue focus:ring-2 focus:outline-none focus:ring-TUblue active:ring-4 active:ring-TUblue"
    >
      Ik begrijp het en doe mee
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
  </FwbCard>
</template>

<style scoped>

</style>
