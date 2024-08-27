<script setup>
import NavBar from "@/src/components/NavBar.vue";
import Carousel from "@/src/components/Carousel.vue";
import About from "./src/components/About.vue";
import Skills from "./src/components/Skills.vue";
import Experience from "./src/components/Experience.vue";
import Projects from "./src/components/Projects.vue";
import Recommendations from "./src/components/Recommendations.vue";
import Footer from "./src/components/Footer.vue";
import "primeicons/primeicons.css";
</script>

<template>
  <div class="w-full flex flex-col bg-neutral-900">
    <div class="lg:px-24 px-2 pt-8 sticky top-0 z-50 bg-black">
      <NavBar />
    </div>
    <div class="lg:px-24 px-2">
      <Carousel />
    </div>
    <div id="about">
      <About />
    </div>
    <div class="lg:px-24 px-2 pt-8">
      <Skills />
    </div>
    <div id="experience">
      <Experience />
    </div>
    <div class="lg:px-24 px-2" id="projects">
      <Projects />
    </div>
    <!-- <div class="" id="recommendations">
      <Recommendations />
    </div> -->
    <div class="lg:px-24 px-2">
      <Footer />
    </div>
  </div>
</template>
