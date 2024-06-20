<script setup lang="ts">
import { FwbButton, FwbImg } from 'flowbite-vue'
import { v4 as uuidv4 } from 'uuid'
import type { Vote } from '~/types'
import LoadingSkeleton from '~/components/LoadingSkeleton.vue'

const randomUserId = useCookie(
  'randomUserId',
  { maxAge: 7 * 24 * 60 * 60 },
)
randomUserId.value = randomUserId.value || uuidv4()

const imageUrlPrefix = '/images'
const { data, status, refresh } = await useFetch(`/api/images/random-pair`)
const pending = status.value === 'pending'

const notClicked = 'bg-TUwhite text-TUcyan'
const clicked = 'bg-TUcyan text-TUwhite'
const button = 'border-2 border-TUcyan md:p-6 text-base hover:bg-currentColor hover:text-currentColor hover:ring-4 hover:ring-TUcyan focus:ring-2 focus:ring-TUcyan active:ring-4 active:ring-TUcyan '
const buttonClicked = `${button}${clicked}`
const buttonNotClicked = `${button}${notClicked}`

const selectedNovelty = useState<string>('novelty', () => '')
const selectedSurprise = useState<string>('surprise', () => '')
const selectedValue = useState<string>('value', () => '')

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
  console.log('Submit clicked')
  console.table({
    selectedNovelty: selectedNovelty.value,
    selectedSurprise: selectedSurprise.value,
    selectedValue: selectedValue.value,
  })

  if (!data.value) {
    console.error('No data')
    return
  }

  if (!selectedNovelty.value || !selectedSurprise.value || !selectedValue.value) {
    console.error('Not all values are selected')
    return
  }

  const voteBody: Omit<Vote, 'timestamp'> = {
    image_id_1: data.value.image1.url_id,
    image_id_2: data.value.image2.url_id,
    winner_novelty: selectedNovelty.value,
    winner_surprise: selectedSurprise.value,
    winner_value: selectedValue.value,
    user_id: randomUserId.value || 'unknown',
  }

  await useFetch('/api/votes', {
    method: 'PUT',
    body: JSON.stringify(voteBody),
    headers: {
      'Content-Type': 'application/json',
    },
  })

  clearNuxtState()
  await refresh()
}
</script>

<template>
  <main class="flex min-h-screen w-full flex-col items-center md:my-28 p-8">
    <template v-if="pending">
      <LoadingSkeleton />
    </template>
    <template v-else-if="data">
      <div class="flex flex-col md:flex-row space-y-8 md:space-x-8 md:space-y-0">
        <fwb-img
          :src="`${imageUrlPrefix}/ALL/${data.image1.url_id}`"
          alt="image 1"
          img-class="size-96 rounded border border-gray-700 shadow-lg"
        />

        <div class="flex md:flex-col flex-row size-full md:size-96 justify-around">
          <div class="flex md:flex-row flex-col items-center justify-between">
            <FwbButton
              :class="selectedNovelty === data.image1.url_id ? buttonClicked : buttonNotClicked"
              @click="setSelectedNovelty(data.image1.url_id)"
            >
              Links
            </FwbButton>
            <p>Vernieuwend</p>
            <FwbButton
              :class="selectedNovelty === data.image2.url_id ? buttonClicked : buttonNotClicked"
              @click="setSelectedNovelty(data.image2.url_id)"
            >
              Rechts
            </FwbButton>
          </div>

          <div class="flex md:flex-row flex-col items-center justify-between">
            <FwbButton
              :class="selectedSurprise === data.image1.url_id ? buttonClicked : buttonNotClicked"
              @click="setSelectedSurprise(data.image1.url_id)"
            >
              Boven
            </FwbButton>
            <p>Verassend</p>
            <FwbButton
              :class="selectedSurprise === data.image2.url_id ? buttonClicked : buttonNotClicked"
              @click="setSelectedSurprise(data.image2.url_id)"
            >
              Onder
            </FwbButton>
          </div>

          <div class="flex md:flex-row flex-col items-center justify-between">
            <FwbButton
              :class="selectedValue === data.image1.url_id ? buttonClicked : buttonNotClicked"
              @click="setSelectedValue(data.image1.url_id)"
            >
              Links
            </FwbButton>
            <p>Waardevol</p>
            <FwbButton
              :class="selectedValue === data.image2.url_id ? buttonClicked : buttonNotClicked"
              @click="setSelectedValue(data.image2.url_id)"
            >
              Rechts
            </FwbButton>
          </div>
          <FwbButton
            class="md:p-6 pt-3 pb-5 vertical-text text-base bg-TUdarkgreen hover:bg-TUdarkgreen hover:ring-2 hover:ring-TUlightgreen focus:ring-2 focus:ring-TUlightgreen active:ring-4 active:ring-TUlightgreen "
            :disabled="!selectedNovelty || !selectedSurprise || !selectedValue"
            @click="submit"
          >
            Verzenden
          </FwbButton>
        </div>

        <fwb-img
          :src="`${imageUrlPrefix}/ALL/${data.image2.url_id}`"
          alt="image 2"
          img-class="size-96 rounded border border-gray-700 shadow-lg"
        />
      </div>
    </template>
  </main>
</template>

<style scoped lang="postcss">
  .vertical-text {
    writing-mode: vertical-rl;
    text-orientation: upright;
    letter-spacing: -0.3em;
  }

@screen md {
  .vertical-text {
    writing-mode: horizontal-tb;
    text-orientation: mixed;
    letter-spacing: normal;
  }
}
</style>
