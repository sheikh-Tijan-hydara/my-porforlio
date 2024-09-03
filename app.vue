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

useSeoMeta({
  title: "Sheikh Tijan Hydara",
  ogTitle: "Sheikh Tijan Hydara - Software Developer Portfolio",
  description:
    "Explore the portfolio of Sheikh Tijan Hydara, a skilled software developer specializing in web and mobile applications. Discover his projects, experience, and technical expertise.",
  ogDescription:
    "Explore the portfolio of Sheikh Tijan Hydara, a skilled software developer specializing in web and mobile applications.",
  ogImage: "/public/me.png",
  twitterCard: "summary_large_image",
});
</script>

<template>
  <div class="w-full flex flex-col bg-neutral-900">
    <div class="lg:px-24 px-2 pt-2 sticky top-0 z-50 bg-black">
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
