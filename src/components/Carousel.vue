<script setup>
import Button from "primevue/button";

const handleDownloadResume = () => {
  window.open("/resume.pdf", "_blank");
};
</script>

<template>
  <div
    class="relative w-full h-[80vh]  flex items-center justify-center text-white bg-cover bg-center bg-no-repeat"
    :style="{ backgroundImage: 'url(/me.png)', backgroundSize: 'cover' }"
  >
    <!-- Dark Overlay -->
    <div class="absolute inset-0 bg-neutral-900 opacity-70"></div>

    <!-- Social Media Icons -->
    <div class="absolute left-4 md:left-6 top-1/2 transform -translate-y-1/2 lg:flex flex-col gap-6 md:gap-8 hidden">
      <a
        href="https://www.linkedin.com/in/sheikh-tijan-hydara-60602621a/"
        target="_blank"
        class="text-white hover:text-green-500 transition-colors duration-300 text-xl md:text-3xl animate-bounce"
      >
        <i class="pi pi-linkedin"></i>
      </a>
      <a
        href="https://github.com/sheikh-Tijan-hydara"
        target="_blank"
        class="text-white hover:text-green-500 transition-colors duration-300 text-xl md:text-3xl animate-bounce"
      >
        <i class="pi pi-github"></i>
      </a>
      <a
        href="https://twitter.com/your-twitter"
        target="_blank"
        class="text-white hover:text-green-500 transition-colors duration-300 text-xl md:text-3xl animate-bounce"
      >
        <i class="pi pi-twitter"></i>
      </a>
    </div>

    <!-- Carousel Content -->
    <div class="z-10 text-center px-4 md:px-8 space-y-4 animate-bounce-twice">
      <h2 class="text-4xl md:text-6xl lg:text-8xl font-bold leading-tight ">
        If you can imagine it <br />
        <span class="text-green-500">I can build it.</span>
      </h2>
      <p class="text-base md:text-lg lg:text-xl text-gray-300">
        Turning your vision into a digital experience.
      </p>
      <div class="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 py-4">
        <button
          @click="handleDownloadResume"
          type="button"
          class="px-6 py-2 border font-bold border-green-500 hover:bg-green-500 hover:text-white text-green-500 transition-colors duration-300 text-sm md:text-base"
        >
          Download Resume
        </button>
        <a href="https://www.linkedin.com/in/sheikh-tijan-hydara-60602621a/" target="_blank">        
          <button
          type="button"
          class="px-8 py-2 font-bold bg-green-500 hover:border hover:border-green-500 hover:bg-transparent hover:text-green-500 text-white transition-colors duration-300 text-sm md:text-base"
        >
          Get In Touch
        </button>
        </a>

      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
