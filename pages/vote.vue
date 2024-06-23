<script setup lang="ts">
import { FwbButton, FwbHeading, FwbImg, FwbModal, FwbP } from 'flowbite-vue'
import { v4 as uuidv4 } from 'uuid'
import LoadingSkeleton from '~/components/LoadingSkeleton.vue'
import type { Vote } from '~/types'

const numberOfVotes = useCookie(
  'numberOfVotes',
  { maxAge: 7 * 24 * 60 * 60, default: () => 0 },
)

const targetVotes = useCookie('targetVotes', {
  maxAge: 7 * 24 * 60 * 60,
  default: () => {
    return useRuntimeConfig().public.minNumberOfVotesPerParticipant
  },
})

const randomUserId = useCookie('randomUserId', {
  maxAge: 7 * 24 * 60 * 60,
  default: () => {
    if (numberOfVotes.value !== 0 || targetVotes.value !== useRuntimeConfig().public.minNumberOfVotesPerParticipant) {
      numberOfVotes.value = 0 // Reset if a new user is detected and the number of votes is not 1
      targetVotes.value = useRuntimeConfig().public.minNumberOfVotesPerParticipant
    }
    return uuidv4()
  },
})

const notClicked = 'bg-TUwhite text-TUcyan'
const clicked = 'bg-TUcyan text-TUwhite'
const button = 'border-2 border-TUcyan md:p-6 text-base vertical-text hover:bg-currentColor hover:text-currentColor hover:ring-4 hover:ring-TUcyan focus:ring-2 focus:ring-TUcyan active:ring-4 active:ring-TUcyan '
const buttonClicked = `${button}${clicked}`
const buttonNotClicked = `${button}${notClicked}`

const done = computed(() => typeof window !== 'undefined')
const isMobile = computed(() => {
  return done.value && window.innerWidth < 768
})

const progress = computed(() => Math.min((numberOfVotes.value / targetVotes.value) * 100, 100))

const progressStyle = computed(() => {
  if (isMobile.value) {
    return { height: `${progress.value}%`, width: 'min-content' }
  }
  else {
    return { width: `${progress.value}%` }
  }
})

const showModal = useState('showModal', () => progress.value === 100)

watch(progress, (newProgress) => {
  if (newProgress === 100) {
    showModal.value = true
  }
})

function continueVoting() {
  targetVotes.value += 10
  showModal.value = false
}

function finishVoting() {
  clearNuxtState(['novelty', 'surprise', 'value'])
  navigateTo('/contact')
}

const imageUrlPrefix = '/images'
const { data, status, refresh } = await useFetch(`/api/images/random-pair`)
const pending = status.value === 'pending'

const selectedNovelty = useState('novelty', () => '')
const selectedSurprise = useState('surprise', () => '')
const selectedValue = useState('value', () => '')

function setSelectedNovelty(value: string) {
  selectedNovelty.value = value
}

function setSelectedSurprise(value: string) {
  selectedSurprise.value = value
}

function setSelectedValue(value: string) {
  selectedValue.value = value
}

async function submit() {
  if (!data.value) {
    console.error('No data')
    return
  }

  if (!selectedNovelty.value || !selectedSurprise.value || !selectedValue.value) {
    console.error('Not all values are selected')
    return
  }

  const voteBody: Vote = {
    image_id_1: data.value.image1_url,
    image_id_2: data.value.image2_url,
    winner_novelty: selectedNovelty.value,
    winner_surprise: selectedSurprise.value,
    winner_value: selectedValue.value,
    user_id: randomUserId.value,
  }

  try {
    await useFetch('/api/votes', {
      method: 'PUT',
      body: JSON.stringify(voteBody),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    console.log('Vote submitted successfully!')
    // Increment the vote counter only when successful
    numberOfVotes.value++
  }
  catch (error) {
    console.error('Error submitting vote', error)
  }

  clearNuxtState(['novelty', 'surprise', 'value'])
  await refresh()
}
</script>

<template>
  <main class="flex min-h-screen w-full flex-col items-center md:my-28 p-8">
    <template v-if="pending">
      <LoadingSkeleton />
    </template>
    <template v-else-if="data">
      <template v-if="showModal">
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
            <FwbP>Wilt u blijven stemmen om mij te helpen de ELO-scores te verbeteren? Door extra stemmen uit te brengen vergelijkt u de creativiteit van nog meer mogelijke paren van foto's. Door meer foto's met elkaar te vergelijken wordt de uiteindelijke ranglijst steeds beter.</FwbP>
            <FwbP>Klik dan op de groene knop, dan kunt u nog 10 stemmen uitbrengen. Zo niet dan drukt u op de oranje knop.</FwbP>
            <FwbP><strong class="font-bold text-gray-900">Bedankt voor uw deelname en tijd!</strong></FwbP>
          </template>
          <template #footer>
            <div class="flex justify-around gap-4">
              <FwbButton
                class="md:p-6 text-base bg-TUdarkgreen hover:bg-TUdarkgreen hover:ring-2 hover:ring-TUlightgreen focus:ring-2 focus:ring-TUlightgreen active:ring-4 active:ring-TUlightgreen"
                @click="continueVoting"
              >
                Nog 10 keer stemmen
              </FwbButton>
              <FwbButton
                class="md:p-6 text-base bg-TUorange hover:bg-TUorange hover:ring-2 hover:ring-TUyellow focus:ring-2 focus:ring-TUyellow active:ring-4 active:ring-TUyellow"
                @click="finishVoting"
              >
                Stoppen met stemmen
              </FwbButton>
            </div>
          </template>
        </FwbModal>
      </template>

      <div class="flex flex-col md:flex-row space-y-4 md:space-x-8 md:space-y-0 content-evenly">
        <fwb-img
          :src="`${imageUrlPrefix}/${data.image1_url}`"
          alt="image 1"
          img-class="md:size-96 size-72 rounded border border-gray-700 shadow-lg"
        />

        <div class="flex md:flex-col flex-row w-72 md:size-96 justify-between">
          <div
            v-if="done"
            class="bg-gray-200 h-40 md:h-auto rounded-full"
          >
            <div
              class="bg-TUorange min-h-fit min-w-fit font-medium text-TUwhite text-base vertical-text text-center p-1 leading-none rounded-full"
              :style="progressStyle"
            >
              <span class="horizontal-text p-0">{{ numberOfVotes }}</span>/<span class="p-0 mt-1.5 horizontal-text">{{ targetVotes }}</span>
            </div>
          </div>

          <div class="flex md:flex-row flex-col items-center justify-between">
            <FwbButton
              :class="selectedNovelty === data.image1_url ? buttonClicked : buttonNotClicked"
              @click="setSelectedNovelty(data.image1_url)"
            >
              <svg
                class="w-6 h-6 rotate-90 md:rotate-0"
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
                  d="M5 12h14M5 12l4-4m-4 4 4 4"
                />
              </svg>
            </FwbButton>
            <FwbP>
              Nieuw
            </FwbP>
            <FwbButton
              :class="selectedNovelty === data.image2_url ? buttonClicked : buttonNotClicked"
              @click="setSelectedNovelty(data.image2_url)"
            >
              <svg
                class="w-6 h-6 rotate-90 md:rotate-0"
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
                  d="M19 12H5m14 0-4 4m4-4-4-4"
                />
              </svg>
            </FwbButton>
          </div>

          <div class="flex md:flex-row flex-col items-center justify-between">
            <FwbButton
              :class="selectedSurprise === data.image1_url ? buttonClicked : buttonNotClicked"
              @click="setSelectedSurprise(data.image1_url)"
            >
              <svg
                class="w-6 h-6 rotate-90 md:rotate-0"
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
                  d="M5 12h14M5 12l4-4m-4 4 4 4"
                />
              </svg>
            </FwbButton>
            <FwbP>
              Verassend
            </FwbP>
            <FwbButton
              :class="selectedSurprise === data.image2_url ? buttonClicked : buttonNotClicked"
              @click="setSelectedSurprise(data.image2_url)"
            >
              <svg
                class="w-6 h-6 rotate-90 md:rotate-0"
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
                  d="M19 12H5m14 0-4 4m4-4-4-4"
                />
              </svg>
            </FwbButton>
          </div>

          <div class="flex md:flex-row flex-col items-center justify-between">
            <FwbButton
              :class="selectedValue === data.image1_url ? buttonClicked : buttonNotClicked"
              @click="setSelectedValue(data.image1_url)"
            >
              <svg
                class="w-6 h-6 rotate-90 md:rotate-0"
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
                  d="M5 12h14M5 12l4-4m-4 4 4 4"
                />
              </svg>
            </FwbButton>
            <FwbP>
              Waarde
            </FwbP>
            <FwbButton
              :class="selectedValue === data.image2_url ? buttonClicked : buttonNotClicked"
              @click="setSelectedValue(data.image2_url)"
            >
              <svg
                class="w-6 h-6 rotate-90 md:rotate-0"
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
                  d="M19 12H5m14 0-4 4m4-4-4-4"
                />
              </svg>
            </FwbButton>
          </div>

          <FwbButton
            class="md:p-6 pt-3 pb-5 p-2 vertical-text text-base bg-TUdarkgreen hover:bg-TUdarkgreen hover:ring-2 hover:ring-TUlightgreen focus:ring-2 focus:ring-TUlightgreen active:ring-4 active:ring-TUlightgreen "
            :disabled="!selectedNovelty || !selectedSurprise || !selectedValue"
            @click="submit"
          >
            Verstuur
          </FwbButton>
        </div>

        <fwb-img
          :src="`${imageUrlPrefix}/${data.image2_url}`"
          alt="image 2"
          img-class="md:size-96 size-72 rounded border border-gray-700 shadow-lg"
        />
      </div>
    </template>
  </main>
</template>

<style scoped lang="postcss">
  .horizontal-text {
    writing-mode: horizontal-tb;
    text-orientation: mixed;
    letter-spacing: normal;
  }

  .vertical-text {
    writing-mode: vertical-rl;
    text-orientation: upright;
    letter-spacing: -0.20em;
  }

  @screen md {
    .vertical-text {
      writing-mode: horizontal-tb;
      text-orientation: mixed;
      letter-spacing: normal;
    }
  }
</style>
