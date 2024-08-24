<script setup>
import NavBar from "@/src/components/NavBar.vue";
import Carousel from "@/src/components/Carousel.vue";
import About from "./src/components/About.vue";
import Experience from "./src/components/Experience.vue";
import "primeicons/primeicons.css";
</script>

<template>
  <div class="w-full flex flex-col bg-neutral-900">
    <div class="lg:px-24 px-2 pt-8">
      <NavBar />
    </div>
    <div class="lg:px-24 px-2">
      <Carousel />
    </div>
    <About />
    <div class="lg:px-24 px-2 pt-8">
      <Experience />
    </div>
  </div>
</template>
