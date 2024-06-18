<script setup lang="ts">

import {FwbButton} from "flowbite-vue";
import type {Vote} from "~/types";
import {v4 as uuidv4} from 'uuid';


const randomUserId = useCookie('randomUserId');
randomUserId.value = randomUserId.value || uuidv4();

const imageUrlPrefix = '/images'
const {data, status, refresh} = await useFetch(`/api/images/random-pair`);
const pending = status.value === 'pending'

const selectedNovelty = ref('');
const selectedSurprise = ref('');
const selectedValue = ref('');

function setSelectedNovelty(value: string) {
  selectedNovelty.value = value;
}

function setSelectedSurprise(value: string) {
  selectedSurprise.value = value;
}

function setSelectedValue(value: string) {
  selectedValue.value = value;
}

async function reset() {
  selectedNovelty.value = '';
  selectedSurprise.value = '';
  selectedValue.value = '';
  await refresh();
}

async function submit() {
  console.log('Submit clicked');
  console.table({
    selectedNovelty: selectedNovelty.value,
    selectedSurprise: selectedSurprise.value,
    selectedValue: selectedValue.value,
  });

  if (!data.value) {
    console.error('No data');
    return;
  }

  if (!selectedNovelty.value || !selectedSurprise.value || !selectedValue.value) {
    console.error('Not all values are selected');
    return;
  }

  const voteBody: Omit<Vote, 'timestamp'> = {
    image_id_1: data.value.image1.url_id,
    image_id_2: data.value.image2.url_id,
    winner_novelty: selectedNovelty.value,
    winner_surprise: selectedSurprise.value,
    winner_value: selectedValue.value,
    user_id: randomUserId.value || 'unknown',
  }

  await $fetch('/api/votes', {
    method: 'PUT',
    body: JSON.stringify(voteBody),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  await reset();
}

</script>

<template>
  <main class="flex min-h-screen w-full flex-col items-center p-8">
    <div class="flex flex-col items-center justify-between">
      <template v-if="pending">
        <Loading/>
      </template>
      <template v-else-if="data">
        <div class="size-full space-y-8 md:flex md:items-center md:space-x-8 md:space-y-0">
          <img :src="`${imageUrlPrefix}/${data.image1.class}/${data.image1.url_id}`" alt="image 1"
               class="size-full rounded border border-gray-700 shadow-lg md:size-96"/>
          <img :src="`${imageUrlPrefix}/${data.image2.class}/${data.image2.url_id}`" alt="image 2"
               class="size-full rounded border border-gray-700 shadow-lg md:size-96"/>
        </div>

        <div class="mt-20 flex flex-col space-y-2">
          <div class="flex w-96 items-center justify-between gap-10">
            <FwbButton
                :color="selectedNovelty === data.image1.url_id ? 'red' : 'default'"
                @click="setSelectedNovelty(data.image1.url_id)"
            >Left
            </FwbButton>
            <p>Novelty</p>
            <FwbButton
                :color="selectedNovelty === data.image2.url_id ? 'red' : 'default'"
                @click="setSelectedNovelty(data.image2.url_id)"
            >Right
            </FwbButton>
          </div>

          <div class="flex w-96 items-center justify-between gap-10">
            <FwbButton
                :color="selectedSurprise === data.image1.url_id ? 'red' : 'default'"
                @click="setSelectedSurprise(data.image1.url_id)"
            >Left
            </FwbButton>
            <p>Surprise</p>
            <FwbButton
                :color="selectedSurprise === data.image2.url_id ? 'red' : 'default'"
                @click="setSelectedSurprise(data.image2.url_id)"
            >Right
            </FwbButton>
          </div>

          <div class="flex w-96 items-center justify-between gap-10">
            <FwbButton
                :color="selectedValue === data.image1.url_id ? 'red' : 'default'"
                @click="setSelectedValue(data.image1.url_id)"
            >Left
            </FwbButton>
            <p>Value</p>
            <FwbButton
                :color="selectedValue === data.image2.url_id ? 'red' : 'default'"
                @click="setSelectedValue(data.image2.url_id)"
            >Right
            </FwbButton>
          </div>

          <div class="flex flex-col space-y-2">
            <FwbButton
                :disabled="!selectedNovelty || !selectedSurprise || !selectedValue"
                @click="submit"
            >Submit
            </FwbButton>
          </div>
        </div>
      </template>
    </div>
  </main>
</template>

<style scoped>

</style>