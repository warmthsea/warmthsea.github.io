<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Header from './layout/header/index.vue';
</script>

<template>
  <Header />
  <RouterView />
</template>

<style>
@import "@/assets/base.css";
</style>
