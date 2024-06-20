<script setup lang="ts">
import { FwbNavbar, FwbNavbarCollapse, FwbNavbarLink, FwbNavbarLogo } from 'flowbite-vue'

// console.log(this.$route.name)
</script>

<template>
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
            Home
          </NuxtLink>
        </fwb-navbar-link>
        <fwb-navbar-link>
          <NuxtLink
            to="/explanation"
            active-class="text-TUcyan"
          >
            Uitleg
          </NuxtLink>
        </fwb-navbar-link>

        <fwb-navbar-link>
          <NuxtLink
            to="/vote"
            active-class="text-TUcyan"
          >
            Stemmen
          </NuxtLink>
        </fwb-navbar-link>

        <fwb-navbar-link>
          <NuxtLink
            to="/license"
            active-class="text-TUcyan"
          >
            Licentie
          </NuxtLink>
        </fwb-navbar-link>

        <fwb-navbar-link>
          <NuxtLink
            to="/contact"
            active-class="text-TUcyan"
          >
            Contact
          </NuxtLink>
        </fwb-navbar-link>
      </fwb-navbar-collapse>
    </template>
  </fwb-navbar>
</template>
