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
        Use your intuition!
      </Fwb-heading>
      <Fwb-p>
        <ol class="space-y-1 list-decimal list-inside">
          <li>You will see two photos</li>
          <li>
            Make <strong class="font-bold text-gray-900">three</strong> choices per pair of photos:
            <ul class="md:ps-3 ps-1 mt-2 list-disc list-inside">
              <li>Which photo is the most <strong class="font-bold text-gray-900">novel?</strong></li>
              <li>Which photo is the most <strong class="font-bold text-gray-900">surprising?</strong></li>
              <li>Which photo is the most <strong class="font-bold text-gray-900">valuable?</strong></li>
            </ul>
          </li>
          <li>Click on the buttons between the photos</li>
          <li>
            Choose based on <strong class="font-bold text-gray-900">impulse</strong> and
            <strong class="font-bold text-gray-900">intuition</strong>
          </li>
          <li>Click the green 'Submit' button</li>
          <li>The next two photos will appear</li>
          <li>You are asked to vote {{ useRuntimeConfig().public.minNumberOfVotesPerParticipant }} times</li>
          <li>Participating takes about 15 minutes</li>
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
        What is novelty?
      </Fwb-heading>
      <Fwb-p class="text-pretty text-justify">
        An image is more novel than the other if it contains more new elements that you have not seen before. These
        <strong class="font-bold text-gray-900">new</strong> elements do not have to be surprising or valuable.
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
        What is surprising?
      </Fwb-heading>
      <Fwb-p class="text-pretty text-justify">
        An image is more surprising than the other if it has an unexpected twist with, for example, strange combinations
        of different elements. This <strong class="font-bold text-gray-900">surprising</strong> element does not have to
        be new or valuable.
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
        What is valuable?
      </Fwb-heading>
      <Fwb-p class="text-pretty text-justify">
        An image is more valuable than the other if it has aesthetic (what it looks like) or emotional value. This can
        be, for example, a beautiful composition or an image that moves you. This
        <strong class="font-bold text-gray-900">value</strong> does not have to be new or surprising.
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
        What is an ELO rating?
      </Fwb-heading>
      <Fwb-p class="text-pretty text-justify">
        An <NuxtLink
          to="https://en.wikipedia.org/wiki/Elo_rating_system"
          class="font-medium text-TUcyan"
        >
          ELO-rating
        </NuxtLink> (score) is a numerical representation of a player's strength. It is most commonly used in chess and
        checkers but can be applied to any game where players compete one-on-one. In this research, the images are the
        'players', instead of people. You, as a participant, determine who the winner of the 'game' is. After enough
        votes, a ranking of photos is created, with the most creative image having the highest score.
      </Fwb-p>
    </Fwb-card>

    <NuxtLink
      to="/vote"
      class="flex py-2.5 px-5 rounded-lg font-medium text-TUwhite w-full bg-TUcyan text-base hover:bg-TUdarkblue focus:ring-2 focus:outline-none focus:ring-TUblue active:ring-4 active:ring-TUblue"
    >
      I understand and want to vote now
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
