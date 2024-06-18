<script setup lang="ts">
import { FwbNavbar, FwbNavbarCollapse, FwbNavbarLink, FwbNavbarLogo } from 'flowbite-vue'



// console.log(this.$route.name)
</script>

<template>
  <fwb-navbar>
    <template #logo>
      <fwb-navbar-logo alt="TU Delft - Delft University of Technology - logo" image-url="/TU-Delft/logo-descriptor-png/TUDelft_logo_descriptor_rgb.png" link="/">
        Contemporary Creativity
      </fwb-navbar-logo>
    </template>
    <template #default="{isShowMenu}">
      <fwb-navbar-collapse :is-show-menu="isShowMenu">
        <fwb-navbar-link :is-active="$route.name === '/'" link="/">
          Home
        </fwb-navbar-link>
        <fwb-navbar-link :is-active="$route.name === '/explanation'" link="/explanation">
          Uitleg
        </fwb-navbar-link>
        <fwb-navbar-link :is-active="$route.name === '/vote'" link="/vote">
          Stemmen
        </fwb-navbar-link>
        <fwb-navbar-link :is-active="$route.name === '/license'" link="/license">
          Licentie
        </fwb-navbar-link>
        <fwb-navbar-link :is-active="$route.name === '/contact'" link="/contact">
          Contact
        </fwb-navbar-link>
      </fwb-navbar-collapse>
    </template>
  </fwb-navbar>
</template>