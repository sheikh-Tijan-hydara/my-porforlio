<script setup></script>

<template>
     <div
       class="relative px-8 py-6  md:py-8 w-full lg:h-[60vh] h-[40vh] flex items-center justify-center text-white bg-cover bg-center bg-no-repeat"
       :style="{ backgroundImage: 'url(/about.jpg)', backgroundSize: 'cover' }"
     >
       <!-- Dark Overlay -->
       <div class="absolute inset-0 bg-black opacity-70"></div>
   
       <!-- Content Section -->
       <div class="z-10 text-center space-y-4 mx-auto lg:px-40 ">
         <h4 class="paragraph text-lg md:text-2xl lg:text-4xl font-bold tracking-wide text-slate-200">
           Hi there, I'm Sheikh Tijan <span class="wave-emoji">👋</span> - I’m a
           passionate software developer who transforms ideas into reality through
           code. I specialize in building scalable, efficient applications with
           expertise in both front-end and back-end development. <span class="hidden lg:block">I thrive on
           problem-solving and collaboration, constantly exploring new technologies
           to enhance my skills. Let’s create something amazing together! </span>
         </h4>
       </div>
     </div>
   </template>

<style scoped>
.paragraph {
  line-height: 1.5;
}
.wave-emoji {
  display: inline-block;
  animation: wave 1.5s infinite;
}

@keyframes wave {
  0% {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(14deg);
  }
  20% {
    transform: rotate(-8deg);
  }
  30% {
    transform: rotate(14deg);
  }
  40% {
    transform: rotate(-4deg);
  }
  50% {
    transform: rotate(10deg);
  }
  60% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
</style>
