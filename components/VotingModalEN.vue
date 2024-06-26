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
        Congratulations, u have voted {{ numberOfVotes }} times!
      </FwbHeading>
    </template>
    <template #body>
      <FwbP>
        You have submitted the required number of votes. Thank you very much!
      </FwbP>
      <FwbP>
        Will you keep voting to help me improve the ELO scores? By casting additional votes, you are comparing the
        creativity of even more possible pairs of photos. By comparing more photos, the final ranking will keep improving.
      </FwbP>
      <FwbP>If so, please click the green button to cast 10 more votes. If not please press the orange button.</FwbP>
      <FwbP><strong class="font-bold text-gray-900">Thank you for your participation and time</strong></FwbP>
    </template>
    <template #footer>
      <div class="flex justify-around gap-4">
        <FwbButton
          class="md:p-6 text-base bg-TUdarkgreen hover:bg-TUdarkgreen hover:ring-2 hover:ring-TUlightgreen focus:ring-2 focus:ring-TUlightgreen active:ring-4 active:ring-TUlightgreen"
          @click="$emit('continue-voting')"
        >
          Vote 10 more times
        </FwbButton>
        <FwbButton
          class="md:p-6 text-base bg-TUorange hover:bg-TUorange hover:ring-2 hover:ring-TUyellow focus:ring-2 focus:ring-TUyellow active:ring-4 active:ring-TUyellow"
          @click="navigateTo('/contact')"
        >
          Stop casting votes
        </FwbButton>
      </div>
    </template>
  </FwbModal>
</template>

<style scoped>

</style>
