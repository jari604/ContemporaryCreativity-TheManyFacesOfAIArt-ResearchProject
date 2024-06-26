<script setup lang="ts">
import { FwbButton, FwbHeading, FwbModal, FwbP } from 'flowbite-vue'

const numberOfVotes = useCookie('numberOfVotes')

defineEmits(['continue-voting'])
</script>

<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 z-50" />
  <FwbModal
    not-escapable
    persistent
    class="text-pretty"
  >
    <template #header>
      <FwbHeading tag="h3">
        Gefeliciteerd, u heeft {{ numberOfVotes }} keer gestemd!
      </FwbHeading>
    </template>
    <template #body>
      <FwbP>
        U heeft het vereiste aantal stemmen uitgebracht. Heel erg bedankt!
      </FwbP>
      <FwbP>
        Wilt u blijven stemmen om mij te helpen de ELO-scores te verbeteren? Door extra stemmen uit te brengen
        vergelijkt u de creativiteit van nog meer mogelijke paren van foto's. Door meer foto's met elkaar te vergelijken
        wordt de uiteindelijke ranglijst steeds beter.
      </FwbP>
      <FwbP>Klik dan op de groene knop, dan kunt u nog 10 stemmen uitbrengen. Zo niet dan drukt u op de oranje knop.</FwbP>
      <FwbP><strong class="font-bold text-gray-900">Bedankt voor uw deelname en tijd!</strong></FwbP>
    </template>
    <template #footer>
      <div class="flex justify-around gap-4">
        <FwbButton
          class="md:p-6 text-base bg-TUdarkgreen hover:bg-TUdarkgreen hover:ring-2 hover:ring-TUlightgreen focus:ring-2 focus:ring-TUlightgreen active:ring-4 active:ring-TUlightgreen"
          @click="$emit('continue-voting')"
        >
          Nog 10 keer stemmen
        </FwbButton>
        <FwbButton
          class="md:p-6 text-base bg-TUorange hover:bg-TUorange hover:ring-2 hover:ring-TUyellow focus:ring-2 focus:ring-TUyellow active:ring-4 active:ring-TUyellow"
          @click="navigateTo('/contact')"
        >
          Stoppen met stemmen
        </FwbButton>
      </div>
    </template>
  </FwbModal>
</template>

<style scoped>

</style>
