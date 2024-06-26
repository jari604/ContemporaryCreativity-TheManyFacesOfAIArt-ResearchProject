<script setup lang="ts">
import { FwbHeading, FwbModal, FwbNavbar, FwbNavbarCollapse, FwbNavbarLink, FwbNavbarLogo } from 'flowbite-vue'

const localePreference = useCookie('locale')

const { locale, setLocale } = useI18n()

const showLanguageModal = useState('showLanguageModal', () => !localePreference.value)

function toggleLocale() {
  localePreference.value = locale.value === 'nl' ? 'en' : 'nl'
  setLocale(localePreference.value)
}

function setLocaleAndCloseModal(locale: string) {
  setLocale(locale)
  localePreference.value = locale
  showLanguageModal.value = false
}
</script>

<template>
  <template v-if="showLanguageModal">
    <div class="fixed inset-0 bg-black bg-opacity-50 z-50" />
    <FwbModal
      not-escapable
      persistent
      class="rounded-lg transform-none top-10"
    >
      <template #header>
        <FwbHeading
          tag="h3"
          class="grid grid-cols-2 text-center"
        >
          <div>
            Taal
          </div>
          <div>
            Language
          </div>
        </FwbHeading>
      </template>
      <template #body>
        <div class="flex justify-around gap-4">
          <svg
            id="flag-icons-nl"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 480"
            class="rounded-lg cursor-pointer w-32 h-24 md:w-64 md:h-48"
            @click="setLocaleAndCloseModal('nl')"
          >
            <path
              fill="#ae1c28"
              d="M0 0h640v160H0z"
            />
            <path
              fill="#fff"
              d="M0 160h640v160H0z"
            />
            <path
              fill="#21468b"
              d="M0 320h640v160H0z"
            />
          </svg>
          <svg
            id="flag-icons-gb"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 480"
            class="rounded-lg cursor-pointer w-32 h-24 md:w-64 md:h-48"
            @click="setLocaleAndCloseModal('en')"
          >
            <path
              fill="#012169"
              d="M0 0h640v480H0z"
            />
            <path
              fill="#FFF"
              d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0z"
            />
            <path
              fill="#C8102E"
              d="m424 281 216 159v40L369 281zm-184 20 6 35L54 480H0zM640 0v3L391 191l2-44L590 0zM0 0l239 176h-60L0 42z"
            />
            <path
              fill="#FFF"
              d="M241 0v480h160V0zM0 160v160h640V160z"
            />
            <path
              fill="#C8102E"
              d="M0 193v96h640v-96zM273 0v480h96V0z"
            />
          </svg>
        </div>
      </template>
    </FwbModal>
  </template>

  <fwb-navbar>
    <template #logo>
      <NuxtLink to="/">
        <fwb-navbar-logo
          alt="TU Delft - Delft University of Technology - logo"
          image-url="/TU-Delft/logo-descriptor-png/TUDelft_logo_descriptor_rgb.png"
        >
          Contemporary Creativity
        </fwb-navbar-logo>
      </NuxtLink>
    </template>
    <template #default="{ isShowMenu }">
      <fwb-navbar-collapse :is-show-menu="isShowMenu">
        <fwb-navbar-link>
          <NuxtLink
            to="/"
            active-class="text-TUcyan"
          >
            {{ $t('home') }}
          </NuxtLink>
        </fwb-navbar-link>
        <fwb-navbar-link>
          <NuxtLink
            to="/explanation"
            active-class="text-TUcyan"
          >
            {{ $t('explanation') }}
          </NuxtLink>
        </fwb-navbar-link>

        <fwb-navbar-link>
          <NuxtLink
            to="/vote"
            active-class="text-TUcyan"
          >
            {{ $t('vote') }}
          </NuxtLink>
        </fwb-navbar-link>

        <fwb-navbar-link>
          <NuxtLink
            to="/license"
            active-class="text-TUcyan"
          >
            {{ $t('license') }}
          </NuxtLink>
        </fwb-navbar-link>

        <fwb-navbar-link>
          <NuxtLink
            to="/contact"
            active-class="text-TUcyan"
          >
            {{ $t('contact') }}
          </NuxtLink>
        </fwb-navbar-link>
        <fwb-navbar-link
          link="#"
          @click="toggleLocale"
        >
          <div
            class="flex items-center space-x-0.5 space-x-reverse w-min"
            :class="{ 'flex-row-reverse': locale === 'en' }"
          >
            <svg
              id="flag-icons-nl"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              class="rounded-full size-5"
            >
              <path
                fill="#ae1c28"
                d="M0 0h512v170.7H0z"
              />
              <path
                fill="#fff"
                d="M0 170.7h512v170.6H0z"
              />
              <path
                fill="#21468b"
                d="M0 341.3h512V512H0z"
              />
            </svg>
            /
            <svg
              id="flag-icons-gb"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              class="rounded-full size-5"
            >
              <path
                fill="#012169"
                d="M0 0h512v512H0z"
              />
              <path
                fill="#FFF"
                d="M512 0v64L322 256l190 187v69h-67L254 324 68 512H0v-68l186-187L0 74V0h62l192 188L440 0z"
              />
              <path
                fill="#C8102E"
                d="m184 324 11 34L42 512H0v-3zm124-12 54 8 150 147v45zM512 0 320 196l-4-44L466 0zM0 1l193 189-59-8L0 49z"
              />
              <path
                fill="#FFF"
                d="M176 0v512h160V0zM0 176v160h512V176z"
              />
              <path
                fill="#C8102E"
                d="M0 208v96h512v-96zM208 0v512h96V0z"
              />
            </svg>
          </div>
        </fwb-navbar-link>
      </fwb-navbar-collapse>
    </template>
  </fwb-navbar>
</template>
