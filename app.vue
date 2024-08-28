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
  <div class="w-full flex flex-col bg-neutral-900 relative">
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
    <div class="fixed right-10 bottom-10 z-10 hiddem lg-block" id="widget">
          <a
            href="https://www.linkedin.com/in/sheikh-tijan-hydara-60602621a/"
            target="_blank"
            class="my-4"
          >
            <button
              type="button"
              class="px-8 py-2 font-bold bg-green-500 round-corner hover:border hover:border-green-500 hover:bg-transparent hover:text-green-500 text-white transition-colors duration-300 text-sm md:text-base transform hover:scale-105 transition duration-300 ease-in-out"
            >
              Get in Touch
            </button>
          </a>
    </div>
    <div class="lg:px-24 px-2" id="projects">
      <Projects />
    </div>
    <div class="" id="recommendations">
      <Recommendations />
    </div>
    <div class="lg:px-24 px-2">
      <Footer />
    </div>
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
}
.round-corner {
  border-radius: 60px 8px 40px 60px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
}
</style>
