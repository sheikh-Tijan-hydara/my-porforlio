<script setup>
import "primeicons/primeicons.css";

import { ref, onMounted, onBeforeUnmount } from "vue";

const handleDownloadResume = () => {
  window.open("/resume.pdf", "_blank");
};

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
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

const timelineAlign = ref("left");

const mobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

let autoPlayInterval = null;

const changeTestimonial = (index) => {
  currentIndex.value = index;
  resetAutoPlay();
};

const nextTestimonial = () => {
  currentIndex.value = (currentIndex.value + 1) % testimonials.value.length;
  resetAutoPlay();
};

const previousTestimonial = () => {
  currentIndex.value =
    currentIndex.value === 0
      ? testimonials.value.length - 1
      : currentIndex.value - 1;
  resetAutoPlay();
};

const resetAutoPlay = () => {
  if (autoPlayInterval) {
    clearInterval(autoPlayInterval);
  }
  startAutoPlay();
};

const startAutoPlay = () => {
  autoPlayInterval = setInterval(() => {
    nextTestimonial();
  }, 5000);
};
const closeMobileMenu = () => {
  mobileMenuOpen.value = false;
};
const updateTimelineAlign = () => {
  if (window.innerWidth >= 1024) {
    timelineAlign.value = "alternate";
  } else {
    timelineAlign.value = "left";
  }
};

const testimonials = [
  {
    id: 0,
    avatar: "/fatou.jpeg",
    content: `
      I have had the pleasure of working closely with Sheikh Tijan
      and I am impressed by his talent and dedication as
      both a frontend developer and designer. His ability to
      seamlessly blend aesthetic design with functional and
      responsive code is truly exceptional. I also admire his skills
      in taking up latest technologies, problem-solving and teamwork.
    `,
    name: "Fatou Gaye",
    title: "Developer, Writemedia",
  },
  {
    id: 1,
    avatar: "/fabala.jpeg",
    content: `
      Sheikh Tijan is an exceptional developer and designer. 
      His attention to detail and problem-solving skills are unmatched. 
      He consistently delivers high-quality work and is always willing 
      to go the extra mile to meet project requirements. 
      I highly recommend working with him.
    `,
    name: "Fabala Dibbasy",
    title: "Developer, Primeforge",
  },
  {
    id: 2,
    avatar: "/amadu.jpg",
    content: `
      Sheikh Tijan is a very talented developer and designer. He is
      very passionate about his work and always eager to learn new
      things. He is a great team player and always ready to help
      others. I have had the pleasure of working with him on
      several projects and I am always impressed by his work.
    `,
    name: "Amadu Jallow",
    title: "Backend Developer, Nafa financial services",
  },
];

const currentIndex = ref(0);
let intervalId = null;

const startSlideshow = () => {
  intervalId = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % testimonials.length;
  }, 10000);
};

const stopSlideshow = () => {
  clearInterval(intervalId);
};
const isVisible = ref(false);
const scrollY = ref(0);

const handleScroll = () => {
  scrollY.value = window.scrollY;
};

const techStack = [
  {
    name: "JavaScript",
    icon: "pi pi-code",
    color: "#F7DF1E",
    bgColor: "bg-yellow-400/10",
  },
  {
    name: "Nuxt.js",
    icon: "pi pi-desktop",
    color: "#336791",
    bgColor: "bg-green-400/10",
  },
  {
    name: "Vue.js",
    icon: "pi pi-desktop",
    color: "#4FC08D",
    bgColor: "bg-green-400/10",
  },
  {
    name: "React Js",
    icon: "pi pi-desktop",
    color: "#61DAFB",
    bgColor: "bg-blue-400/10",
  },
  {
    name: "C# .NET",
    icon: "pi pi-server",
    color: "#339933",
    bgColor: "bg-green-500/10",
  },
  {
    name: "Flutter",
    icon: "pi pi-mobile",
    color: "#3776AB",
    bgColor: "bg-blue-500/10",
  },
  {
    name: "Database",
    icon: "pi pi-database",
    color: "#336791",
    bgColor: "bg-indigo-400/10",
  },
];

const skills = [
  { name: "Frontend Development", level: 95 },
  { name: "Backend Development", level: 50 },
  { name: "UI/UX Design", level: 95 },
  { name: "DevOps & Deployment", level: 50 },
];

onMounted(() => {
  updateTimelineAlign();
  window.addEventListener("resize", updateTimelineAlign);
  startSlideshow();
  setTimeout(() => {
    isVisible.value = true;
  }, 100);
  window.addEventListener("scroll", handleScroll);
  const handleEscape = (e) => {
    if (e.key === "Escape") {
      mobileMenuOpen.value = false;
    }
  };
  startAutoPlay();
  document.addEventListener("keydown", handleEscape);

  onUnmounted(() => {
    document.removeEventListener("keydown", handleEscape);
    window.removeEventListener("scroll", handleScroll);
    if (autoPlayInterval) {
      clearInterval(autoPlayInterval);
    }
  });
});

onBeforeUnmount(() => {
  stopSlideshow();
  window.removeEventListener("resize", updateTimelineAlign);
});
</script>

<template>
  <div class="w-full flex flex-col bg-neutral-900">
    <header
      class="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-20">
          <!-- Logo Section -->
          <div class="flex-shrink-0">
            <NuxtLink to="/" class="block">
              <img
                src="/portfolio.png"
                alt="Portfolio Logo"
                class="h-16 w-24 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
              />
            </NuxtLink>
          </div>

          <!-- Desktop Navigation -->
          <nav class="hidden lg:flex items-center space-x-8">
            <NuxtLink
              to="#about"
              class="relative text-white font-semibold text-lg tracking-wide hover:text-green-400 transition-colors duration-300 group"
              @click="scrollToSection('about')"
            >
              ABOUT ME
              <span
                class="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300"
              ></span>
            </NuxtLink>

            <NuxtLink
              to="#experience"
              class="relative text-white font-semibold text-lg tracking-wide hover:text-green-400 transition-colors duration-300 group"
              @click="scrollToSection('experience')"
            >
              EXPERIENCE
              <span
                class="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300"
              ></span>
            </NuxtLink>

            <NuxtLink
              to="#projects"
              class="relative text-white font-semibold text-lg tracking-wide hover:text-green-400 transition-colors duration-300 group"
              @click="scrollToSection('projects')"
            >
              PROJECTS
              <span
                class="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300"
              ></span>
            </NuxtLink>
          </nav>

          <!-- Desktop Social Links -->
          <div class="hidden lg:flex items-center space-x-4">
            <a
              href="https://www.linkedin.com/in/sheikh-tijan-hydara-60602621a/"
              target="_blank"
              rel="noopener noreferrer"
              class="text-white hover:text-green-400 transition-colors duration-300 p-2 rounded-full hover:bg-gray-800"
            >
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                />
              </svg>
            </a>

            <a
              href="https://github.com/sheikh-Tijan-hydara"
              target="_blank"
              rel="noopener noreferrer"
              class="text-white hover:text-green-400 transition-colors duration-300 p-2 rounded-full hover:bg-gray-800"
            >
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                />
              </svg>
            </a>
          </div>

          <!-- Mobile Menu Button -->
          <div class="lg:hidden">
            <button
              @click="toggleMobileMenu"
              class="text-white hover:text-green-400 transition-colors duration-300 p-2 rounded-lg hover:bg-gray-800"
            >
              <svg
                v-if="!mobileMenuOpen"
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
              <svg
                v-else
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile Menu -->
      <Transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 transform -translate-y-2"
        enter-to-class="opacity-100 transform translate-y-0"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 transform translate-y-0"
        leave-to-class="opacity-0 transform -translate-y-2"
      >
        <div
          v-if="mobileMenuOpen"
          class="lg:hidden bg-black/98 backdrop-blur-sm border-t border-gray-800"
        >
          <div class="px-4 py-6 space-y-4">
            <nav class="space-y-6">
              <NuxtLink
                to="#about"
                @click="closeMobileMenu"
                class="block text-white font-semibold text-xl tracking-wide hover:text-green-400 transition-colors duration-300 py-2 border-b border-gray-800 hover:border-green-400"
              >
                ABOUT ME
              </NuxtLink>

              <NuxtLink
                to="#experience"
                @click="closeMobileMenu"
                class="block text-white font-semibold text-xl tracking-wide hover:text-green-400 transition-colors duration-300 py-2 border-b border-gray-800 hover:border-green-400"
              >
                EXPERIENCE
              </NuxtLink>

              <NuxtLink
                to="#projects"
                @click="closeMobileMenu"
                class="block text-white font-semibold text-xl tracking-wide hover:text-green-400 transition-colors duration-300 py-2 border-b border-gray-800 hover:border-green-400"
              >
                PROJECTS
              </NuxtLink>
            </nav>

            <!-- Mobile Social Links -->
            <div
              class="flex justify-center space-x-8 pt-6 border-t border-gray-800"
            >
              <a
                href="https://www.linkedin.com/in/sheikh-tijan-hydara-60602621a/"
                target="_blank"
                rel="noopener noreferrer"
                class="text-white hover:text-green-400 transition-colors duration-300 p-3 rounded-full hover:bg-gray-800"
              >
                <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                  />
                </svg>
              </a>

              <a
                href="https://github.com/sheikh-Tijan-hydara"
                target="_blank"
                rel="noopener noreferrer"
                class="text-white hover:text-green-400 transition-colors duration-300 p-3 rounded-full hover:bg-gray-800"
              >
                <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </Transition>
    </header>
    <section class="relative w-full h-screen overflow-hidden">
      <!-- Animated Background with Parallax Effect -->
      <div
        class="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-110 transition-transform duration-[10s] ease-out"
        :style="{
          backgroundImage: 'url(/background.jpg)',
          transform: `scale(1.1) translateY(${scrollY * 0.5}px)`,
        }"
      ></div>

      <!-- Animated Overlay with Gradient -->
      <div
        class="absolute inset-0 bg-gradient-to-br from-black/80 via-neutral-900/70 to-black/90"
      ></div>

      <!-- Floating Particles Background -->
      <div class="absolute inset-0 overflow-hidden">
        <div
          v-for="i in 50"
          :key="i"
          class="absolute w-1 h-1 bg-green-400/30 rounded-full animate-pulse"
          :style="{
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
            animationDelay: Math.random() * 3 + 's',
            animationDuration: Math.random() * 3 + 2 + 's',
          }"
        ></div>
      </div>

      <!-- Animated Social Links -->
      <div
        class="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 hidden lg:flex flex-col gap-8 z-20"
        :class="{ 'animate-slideInLeft': isVisible }"
      >
        <a
          href="https://www.linkedin.com/in/sheikh-tijan-hydara-60602621a/"
          target="_blank"
          rel="noopener noreferrer"
          class="group relative p-4 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:border-green-400/50 transition-all duration-500 hover:scale-110 hover:rotate-12"
        >
          <svg
            class="w-8 h-8 text-white group-hover:text-green-400 transition-colors duration-300"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
            />
          </svg>
          <div
            class="absolute inset-0 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          ></div>
        </a>

        <a
          href="https://github.com/sheikh-Tijan-hydara"
          target="_blank"
          rel="noopener noreferrer"
          class="group relative p-4 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:border-green-400/50 transition-all duration-500 hover:scale-110 hover:rotate-12"
        >
          <svg
            class="w-8 h-8 text-white group-hover:text-green-400 transition-colors duration-300"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
            />
          </svg>
          <div
            class="absolute inset-0 bg-gradient-to-r from-green-400/20 to-purple-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          ></div>
        </a>

        <a
          href="https://twitter.com/your-twitter"
          target="_blank"
          rel="noopener noreferrer"
          class="group relative p-4 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:border-green-400/50 transition-all duration-500 hover:scale-110 hover:rotate-12"
        >
          <svg
            class="w-8 h-8 text-white group-hover:text-green-400 transition-colors duration-300"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
            />
          </svg>
          <div
            class="absolute inset-0 bg-gradient-to-r from-green-400/20 to-cyan-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          ></div>
        </a>
      </div>

      <!-- Main Content -->
      <div class="relative z-10 h-full flex items-center justify-center">
        <div class="text-center px-4 md:px-8 max-w-6xl mx-auto">
          <!-- Animated Title -->
          <div class="mb-8 space-y-4">
            <h1
              class="text-4xl md:text-6xl lg:text-8xl font-bold leading-tight text-white"
              :class="{ 'animate-slideInUp': isVisible }"
            >
              <span class="inline-block" style="animation-delay: 0.2s">If</span>
              <span class="inline-block ml-4" style="animation-delay: 0.4s"
                >you</span
              >
              <span class="inline-block ml-4" style="animation-delay: 0.6s"
                >can</span
              >
              <span class="inline-block ml-4" style="animation-delay: 0.8s"
                >imagine</span
              >
              <span class="inline-block ml-4" style="animation-delay: 1s"
                >it</span
              >
              <br />
              <span
                class="inline-block text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-500 to-teal-400 animate-pulse"
                style="animation-delay: 1.2s"
              >
                I can build it.
              </span>
            </h1>
          </div>

          <!-- Animated Subtitle -->
          <p
            class="text-lg md:text-xl lg:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
            :class="{ 'animate-slideInUp': isVisible }"
            style="animation-delay: 1.4s"
          >
            Turning your
            <span class="text-green-400 font-semibold">vision</span> into a
            <span class="text-green-400 font-semibold">digital experience</span
            >.
          </p>

          <!-- Animated Buttons -->
          <div
            class="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8"
            :class="{ 'animate-slideInUp': isVisible }"
            style="animation-delay: 1.6s"
          >
            <button
              @click="handleDownloadResume"
              type="button"
              class="group relative px-8 py-4 bg-transparent border-2 border-green-400 text-green-400 font-bold text-lg rounded-full overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(74,222,128,0.3)]"
            >
              <span
                class="relative z-10 transition-colors duration-300 group-hover:text-black"
              >
                Download Resume
              </span>
              <div
                class="absolute inset-0 bg-green-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"
              ></div>
            </button>

            <a
              href="https://www.linkedin.com/in/sheikh-tijan-hydara-60602621a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                type="button"
                class="group relative px-8 py-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white font-bold text-lg rounded-full overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(74,222,128,0.4)]"
              >
                <span class="relative z-10">Get In Touch</span>
                <div
                  class="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500"
                ></div>
              </button>
            </a>
          </div>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div
        class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        :class="{ 'animate-bounce': isVisible }"
        style="animation-delay: 2s"
      >
        <div
          class="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <div
            class="w-1 h-3 bg-green-400 rounded-full mt-2 animate-pulse"
          ></div>
        </div>
      </div>
    </section>
    <div id="about">
      <section
        class="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden"
      >
        <!-- Animated Background Elements -->
        <div class="absolute inset-0">
          <!-- Floating Orbs -->
          <div
            class="absolute top-20 left-10 w-72 h-72 bg-green-400/10 rounded-full blur-3xl animate-pulse"
          ></div>
          <div
            class="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse"
            style="animation-delay: 1s"
          ></div>
          <div
            class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-400/10 rounded-full blur-3xl animate-pulse"
            style="animation-delay: 2s"
          ></div>

          <!-- Grid Pattern -->
          <div class="absolute inset-0 opacity-5">
            <div class="grid grid-cols-12 gap-4 h-full">
              <div v-for="i in 144" :key="i" class="bg-white/10 h-full"></div>
            </div>
          </div>
        </div>

        <div class="relative z-10 container mx-auto px-4 py-20">
          <div class="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
            <!-- Left Column - Profile Image & Info -->
            <div
              class="space-y-8"
              :class="{ 'animate-slideInLeft': isVisible }"
            >
              <!-- Profile Image Container -->
              <div class="relative group">
                <div
                  class="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"
                ></div>
                <div
                  class="relative bg-black/20 backdrop-blur-sm rounded-3xl p-8 transform -rotate-3 group-hover:-rotate-6 transition-transform duration-500 border border-white/10"
                >
                  <div class="relative overflow-hidden rounded-2xl">
                    <img
                      src="/public/myPicture2.jpeg"
                      alt="Sheikh Tijan"
                      class="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div
                      class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Right Column - About Content -->
            <div
              class="space-y-8"
              :class="{ 'animate-slideInRight': isVisible }"
            >
              <!-- Section Header -->
              <div class="space-y-4">
                <div
                  class="inline-flex items-center gap-2 bg-green-400/10 text-green-400 px-4 py-2 rounded-full text-sm font-medium border border-green-400/20"
                >
                  <span
                    class="w-2 h-2 bg-green-400 rounded-full animate-pulse"
                  ></span>
                  <span class="text-2xl">About Me</span>
                </div>
                <h2
                  class="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
                >
                  Hi there, I'm
                  <span
                    class="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400"
                  >
                    Sheikh Tijan
                  </span>
                  <span class="inline-block animate-bounce ml-2">👋</span>
                </h2>
              </div>

              <!-- Main Description -->
              <div
                class="space-y-6"
                style="animation-delay: 0.3s"
                :class="{ 'animate-slideInRight': isVisible }"
              >
                <p class="text-lg md:text-xl text-gray-300 leading-relaxed">
                  I'm a
                  <span class="text-green-400 font-semibold"
                    >passionate software developer</span
                  >
                  who transforms ideas into reality through code. I specialize
                  in building scalable, efficient applications with expertise in
                  both front-end and back-end development.
                </p>

                <p class="text-lg text-gray-400 leading-relaxed">
                  I thrive on
                  <span class="text-blue-400 font-semibold"
                    >problem-solving</span
                  >
                  and collaboration, constantly exploring new technologies to
                  enhance my skills. Let's create something amazing together!
                </p>
              </div>

              <!-- Skills Progress -->
              <div
                class="space-y-4"
                style="animation-delay: 0.6s"
                :class="{ 'animate-slideInRight': isVisible }"
              >
                <h3 class="text-xl font-semibold text-white mb-6">
                  Core Expertise
                </h3>
                <div
                  v-for="skill in skills"
                  :key="skill.name"
                  class="space-y-2"
                >
                  <div class="flex justify-between items-center">
                    <span class="text-gray-300 font-medium">{{
                      skill.name
                    }}</span>
                    <span class="text-green-400 text-sm"
                      >{{ skill.level }}%</span
                    >
                  </div>
                  <div class="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      class="h-full bg-gradient-to-r from-green-400 to-blue-400 rounded-full transition-all duration-1000 ease-out"
                      :style="{ width: isVisible ? skill.level + '%' : '0%' }"
                    ></div>
                  </div>
                </div>
              </div>

              <!-- Quick Stats -->
              <div
                class="grid grid-cols-2 gap-6"
                style="animation-delay: 0.3s"
                :class="{ 'animate-slideInLeft': isVisible }"
              >
                <div
                  class="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-green-400/30 transition-all duration-300 group"
                >
                  <div
                    class="text-3xl font-bold text-green-400 mb-2 group-hover:scale-110 transition-transform duration-300"
                  >
                    3+
                  </div>
                  <div class="text-gray-300 text-sm">Years Experience</div>
                </div>
                <div
                  class="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-blue-400/30 transition-all duration-300 group"
                >
                  <div
                    class="text-3xl font-bold text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300"
                  >
                    20+
                  </div>
                  <div class="text-gray-300 text-sm">Projects Completed</div>
                </div>
              </div>

              <!-- Tech Stack Icons -->
              <div
                class="flex flex-wrap gap-4"
                style="animation-delay: 0.6s"
                :class="{ 'animate-slideInLeft': isVisible }"
              >
                <div
                  v-for="tech in techStack"
                  :key="tech.name"
                  class="group relative bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-green-400/30 transition-all duration-300 hover:scale-110"
                >
                  <div
                    class="w-10 h-10 rounded-lg flex items-center justify-center"
                    :class="tech.bgColor"
                  >
                    <i
                      :class="tech.icon"
                      class="text-2xl"
                      :style="{ color: tech.color }"
                    ></i>
                  </div>
                  <div
                    class="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/80 backdrop-blur-sm px-3 py-1 rounded-lg text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap"
                  >
                    {{ tech.name }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

       
      </section>
    </div>
    <section
      class="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-blue-900 py-20"
    >
      <div class="container mx-auto px-6 lg:px-8">
        <!-- Header -->
        <div class="text-center mb-20">
          <h1 class="text-5xl lg:text-7xl font-bold text-white mb-6">
            My
            <span
              class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400"
              >Education</span
            >
          </h1>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Academic journey and achievements that shaped my career in
            technology
          </p>
        </div>

        <!-- Education Cards -->
        <div
          class="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20"
        >
          <div class="group">
            <div
              class="bg-white/10 backdrop-blur-lg rounded-3xl p-10 shadow-2xl border border-white/20 hover:bg-white/15 hover:border-emerald-400/50 transition-all duration-500 h-full"
            >
              <div class="flex items-center mb-6">
                <div
                  class="w-20 h-20 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300"
                >
                  <Icon
                    name="ph:graduation-cap-bold"
                    class="text-3xl text-white"
                  />
                </div>
                <div>
                  <h3 class="text-3xl font-bold text-white mb-2">
                    Senior Secondary School Certificate
                  </h3>
                </div>
              </div>

              <div class="space-y-4">
                <div class="flex items-center space-x-3 text-gray-300">
                  <Icon
                    name="ph:building-bold"
                    class="text-lg text-emerald-400"
                  />
                  <span class="text-lg">Farafenni Senior Secondary School</span>
                </div>
                <div class="flex items-center space-x-3 text-gray-300">
                  <Icon
                    name="ph:calendar-bold"
                    class="text-lg text-emerald-400"
                  />
                  <span class="text-lg">2016 - 2019</span>
                </div>
              </div>

              <p class="text-gray-300 leading-relaxed mt-6 mb-6">
                Completed secondary education with a focus on science and
                mathematics. Developed foundational skills in problem-solving,
                critical thinking, and analytical reasoning.
              </p>
            </div>
          </div>
          <div class="group">
            <div
              class="bg-white/10 backdrop-blur-lg rounded-3xl p-10 shadow-2xl border border-white/20 hover:bg-white/15 hover:border-emerald-400/50 transition-all duration-500 h-full"
            >
              <div class="flex items-center mb-6">
                <div
                  class="w-20 h-20 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300"
                >
                  <Icon
                    name="ph:graduation-cap-bold"
                    class="text-3xl text-white"
                  />
                </div>
                <div>
                  <h3 class="text-3xl font-bold text-white mb-2">
                    Fundamentals Of Web Development
                  </h3>
                  <p class="text-emerald-300 text-lg">Free Code Camp</p>
                </div>
              </div>

              <div class="space-y-4">
                <div class="flex items-center space-x-3 text-gray-300">
                  <Icon
                    name="ph:building-bold"
                    class="text-lg text-emerald-400"
                  />
                  <span class="text-lg">Self Thought</span>
                </div>
              </div>

              <p class="text-gray-300 leading-relaxed mt-6 mb-6">
                Comprehensive course covering HTML, CSS, JavaScript, and modern
                web development practices. Focused on building responsive,
                accessible, and user-friendly web applications.
              </p>

              <div class="flex flex-wrap gap-3">
                <span
                  class="px-4 py-2 bg-emerald-500/20 text-emerald-300 rounded-full text-sm font-medium"
                  >HTML</span
                >
                <span
                  class="px-4 py-2 bg-emerald-500/20 text-emerald-300 rounded-full text-sm font-medium"
                  >CSS</span
                >
                <span
                  class="px-4 py-2 bg-emerald-500/20 text-emerald-300 rounded-full text-sm font-medium"
                  >JavaScript</span
                >
              </div>
            </div>
          </div>
          <!-- Bachelor's Degree -->
          <div class="group">
            <div
              class="bg-white/10 backdrop-blur-lg rounded-3xl p-10 shadow-2xl border border-white/20 hover:bg-white/15 hover:border-emerald-400/50 transition-all duration-500 h-full"
            >
              <div class="flex items-center mb-6">
                <div
                  class="w-20 h-20 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300"
                >
                  <Icon
                    name="ph:graduation-cap-bold"
                    class="text-3xl text-white"
                  />
                </div>
                <div>
                  <h3 class="text-3xl font-bold text-white mb-2">
                    Bachelor's Degree
                  </h3>
                  <p class="text-emerald-300 text-lg">
                    Bachelor's Of Science In Computer Science
                  </p>
                </div>
              </div>

              <div class="space-y-4">
                <div class="flex items-center space-x-3 text-gray-300">
                  <Icon
                    name="ph:building-bold"
                    class="text-lg text-emerald-400"
                  />
                  <span class="text-lg">University of The Gambia</span>
                </div>
                <div class="flex items-center space-x-3 text-gray-300">
                  <Icon
                    name="ph:calendar-bold"
                    class="text-lg text-emerald-400"
                  />
                  <span class="text-lg">2019 - 2024</span>
                </div>
              </div>

              <p class="text-gray-300 leading-relaxed mt-6 mb-6">
                Comprehensive program covering core computer science principles,
                software development, and advanced programming techniques.
                Emphasized practical skills through projects and collaborative
                learning.
              </p>

              <div class="flex flex-wrap gap-3">
                <span
                  class="px-4 py-2 bg-emerald-500/20 text-emerald-300 rounded-full text-sm font-medium"
                  >Programming</span
                >
                <span
                  class="px-4 py-2 bg-emerald-500/20 text-emerald-300 rounded-full text-sm font-medium"
                  >Data Structures</span
                >
                <span
                  class="px-4 py-2 bg-emerald-500/20 text-emerald-300 rounded-full text-sm font-medium"
                  >Algorithms</span
                >
                <span
                  class="px-4 py-2 bg-emerald-500/20 text-emerald-300 rounded-full text-sm font-medium"
                  >Software Engineering</span
                >
              </div>
            </div>
          </div>

          <!-- Exchange Program -->
          <div class="group">
            <div
              class="bg-white/10 backdrop-blur-lg rounded-3xl p-10 shadow-2xl border border-white/20 hover:bg-white/15 hover:border-cyan-400/50 transition-all duration-500 h-full"
            >
              <div class="flex items-center mb-6">
                <div
                  class="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300"
                >
                  <Icon name="ph:airplane-bold" class="text-3xl text-white" />
                </div>
                <div>
                  <h3 class="text-3xl font-bold text-white mb-2">
                    Exchange Program
                  </h3>
                  <p class="text-cyan-300 text-lg">Erasmus Student Exchange</p>
                </div>
              </div>

              <div class="space-y-4">
                <div class="flex items-center space-x-3 text-gray-300">
                  <Icon name="ph:building-bold" class="text-lg text-cyan-400" />
                  <span class="text-lg">Universidad de Jaén, Spain</span>
                </div>
                <div class="flex items-center space-x-3 text-gray-300">
                  <Icon name="ph:calendar-bold" class="text-lg text-cyan-400" />
                  <span class="text-lg">2023 - 2024</span>
                </div>
              </div>

              <p class="text-gray-300 leading-relaxed mt-6 mb-6">
                Participated in an international exchange program, enhancing my
                cultural understanding and technical skills through exposure to
                diverse educational environments and collaborative projects with
                peers from different backgrounds.
              </p>

              <div class="flex flex-wrap gap-3">
                <span
                  class="px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-full text-sm font-medium"
                  >Cultural Exchange</span
                >
                <span
                  class="px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-full text-sm font-medium"
                  >International Experience</span
                >
                <span
                  class="px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-full text-sm font-medium"
                  >Spanish Language</span
                >
                <span
                  class="px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-full text-sm font-medium"
                  >Global Perspective</span
                >
              </div>
            </div>
          </div>
        </div>

        <!-- Statistics Section -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <div
            class="text-center bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 hover:border-emerald-400/50 transition-all duration-300"
          >
            <div
              class="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 mb-3"
            >
              16
            </div>
            <div class="text-gray-300 font-medium">Years of Study</div>
          </div>
          <div
            class="text-center bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 hover:border-cyan-400/50 transition-all duration-300"
          >
            <div
              class="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-3"
            >
              2
            </div>
            <div class="text-gray-300 font-medium">Countries</div>
          </div>
          <div
            class="text-center bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 hover:border-purple-400/50 transition-all duration-300"
          >
            <div
              class="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-3"
            >
              1
            </div>
            <div class="text-gray-300 font-medium">Degree Earned</div>
          </div>
          <div
            class="text-center bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 hover:border-indigo-400/50 transition-all duration-300"
          >
            <div
              class="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mb-3"
            >
              ∞
            </div>
            <div class="text-gray-300 font-medium">Learning Journey</div>
          </div>
        </div>
      </div>
    </section>
    <div id="experience">
      <section
        class="min-h-screen bg-gradient-to-br from-neutral-900 via-gray-900 to-black py-20 relative overflow-hidden"
      >
        <!-- Background Animation -->
        <div class="absolute inset-0 overflow-hidden">
          <div
            class="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-emerald-500/10 to-transparent rounded-full blur-3xl animate-pulse"
          ></div>
          <div
            class="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-cyan-500/10 to-transparent rounded-full blur-3xl animate-pulse delay-1000"
          ></div>
        </div>

        <div class="container mx-auto px-6 lg:px-8 relative z-10">
          <!-- Header -->
          <div class="text-center mb-20">
            <h1
              class="text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in-up"
            >
              My
              <span
                class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400"
                >Experience</span
              >
            </h1>
            <p
              class="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200"
            >
              Professional journey and milestones that define my career path
            </p>
          </div>

          <!-- Experience Cards -->
          <div class="max-w-6xl mx-auto space-y-8">
            <!-- Experience Item 1 -->
            <div class="group animate-slide-in-left delay-300">
              <div
                class="flex flex-col lg:flex-row items-center lg:items-start gap-8"
              >
                <!-- Timeline Connector -->
                <div class="hidden lg:flex flex-col items-center">
                  <div
                    class="w-6 h-6 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full group-hover:scale-150 transition-transform duration-500 shadow-lg"
                  ></div>
                  <div
                    class="w-0.5 h-32 bg-gradient-to-b from-emerald-500 to-cyan-500 opacity-30 mt-4"
                  ></div>
                </div>

                <!-- Content Card -->
                <div
                  class="flex-1 bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:bg-white/10 hover:border-emerald-400/50 transition-all duration-500 group-hover:translate-x-4 group-hover:shadow-2xl"
                >
                  <div class="flex flex-col lg:flex-row lg:items-start gap-6">
                    <div class="flex-shrink-0">
                      <div
                        class="w-16 h-16 bg-white rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500"
                      >
                        <img
                          src="/nafa.png"
                          alt="Company Logo"
                          class="w-16 h-16 object-contain"
                        />
                      </div>
                    </div>
                    <div class="flex-1">
                      <div
                        class="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4"
                      >
                        <h3
                          class="text-2xl lg:text-3xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300"
                        >
                          Frontend Developer
                        </h3>
                        <span
                          class="text-emerald-400 font-semibold text-lg mt-2 lg:mt-0"
                          >Dec 2024 - Present</span
                        >
                      </div>
                      <p class="text-xl text-gray-300 mb-4 font-medium">
                        Nafa Financial Services
                      </p>
                      <p class="text-gray-400 leading-relaxed mb-6">
                        Leading the frontend development of the web applications
                        of the company, creating responsive and user-friendly
                        web applications using modern frameworks and
                        technologies. Focused on enhancing user experience and
                        performance optimization.
                      </p>
                      <div class="flex flex-wrap gap-3">
                        <span
                          class="px-4 py-2 bg-emerald-500/20 text-emerald-300 rounded-full text-sm font-medium"
                          >Nuxt js</span
                        >
                        <span
                          class="px-4 py-2 bg-emerald-500/20 text-emerald-300 rounded-full text-sm font-medium"
                          >Vue.js</span
                        >
                        <span
                          class="px-4 py-2 bg-emerald-500/20 text-emerald-300 rounded-full text-sm font-medium"
                          >TypeScript</span
                        >
                        <span
                          class="px-4 py-2 bg-emerald-500/20 text-emerald-300 rounded-full text-sm font-medium"
                          >Graphql Client</span
                        >
                        <span
                          class="px-4 py-2 bg-emerald-500/20 text-emerald-300 rounded-full text-sm font-medium"
                          >Canva</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Experience Item 2 -->
            <div class="group animate-slide-in-right delay-500">
              <div
                class="flex flex-col lg:flex-row items-center lg:items-start gap-8"
              >
                <!-- Timeline Connector -->
                <div class="hidden lg:flex flex-col items-center">
                  <div
                    class="w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full group-hover:scale-150 transition-transform duration-500 shadow-lg"
                  ></div>
                  <div
                    class="w-0.5 h-32 bg-gradient-to-b from-cyan-500 to-blue-500 opacity-30 mt-4"
                  ></div>
                </div>

                <!-- Content Card -->
                <div
                  class="flex-1 bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-500 group-hover:translate-x-4 group-hover:shadow-2xl"
                >
                  <div class="flex flex-col lg:flex-row lg:items-start gap-6">
                    <div class="flex-shrink-0">
                      <div
                        class="w-16 h-16 bg-white rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500"
                      >
                        <img
                          src="/writemedia.png"
                          alt="Company Logo"
                          class="w-16 h-18 object-contain"
                        />
                      </div>
                    </div>
                    <div class="flex-1">
                      <div
                        class="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4"
                      >
                        <h3
                          class="text-2xl lg:text-3xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300"
                        >
                          Front end Developer
                        </h3>
                        <span
                          class="text-cyan-400 font-semibold text-lg mt-2 lg:mt-0"
                          >Apr 2023 - Apr 2025</span
                        >
                      </div>
                      <p class="text-xl text-gray-300 mb-4 font-medium">
                        Writemedia Solutions Limited
                      </p>
                      <p class="text-gray-400 leading-relaxed mb-6">
                        Developed and maintained the front-end of various web
                        applications and mobile application, focusing on
                        performance, accessibility, and user experience.
                        Collaborated with designers and backend developers to
                        create seamless and efficient web and mobile solutions.
                      </p>
                      <div class="flex flex-wrap gap-3">
                        <span
                          class="px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-full text-sm font-medium"
                          >JavaScript</span
                        >
                        <span
                          class="px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-full text-sm font-medium"
                          >Node.js</span
                        >
                        <span
                          class="px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-full text-sm font-medium"
                          >Vue js</span
                        >
                        <span
                          class="px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-full text-sm font-medium"
                          >Nuxt js</span
                        >
                        <span
                          class="px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-full text-sm font-medium"
                          >Next js</span
                        >
                        <span
                          class="px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-full text-sm font-medium"
                          >Flutter</span
                        >

                        <span
                          class="px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-full text-sm font-medium"
                          >Tailwind CSS</span
                        >
                        <span
                          class="px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-full text-sm font-medium"
                          >Figma</span
                        >
                        <span
                          class="px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-full text-sm font-medium"
                          >Stripe Integeration</span
                        >
                        <span
                          class="px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-full text-sm font-medium"
                          >Google maps
                        </span>

                        <span
                          class="px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-full text-sm font-medium"
                          >Scrum</span
                        >
                        <span
                          class="px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-full text-sm font-medium"
                          >Agile Method</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Experience Item 3 -->
            <div class="group animate-slide-in-left delay-700">
              <div
                class="flex flex-col lg:flex-row items-center lg:items-start gap-8"
              >
                <!-- Timeline Connector -->
                <div class="hidden lg:flex flex-col items-center">
                  <div
                    class="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full group-hover:scale-150 transition-transform duration-500 shadow-lg"
                  ></div>
                  <div
                    class="w-0.5 h-32 bg-gradient-to-b from-purple-500 to-pink-500 opacity-30 mt-4"
                  ></div>
                </div>

                <!-- Content Card -->
                <div
                  class="flex-1 bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:bg-white/10 hover:border-purple-400/50 transition-all duration-500 group-hover:translate-x-4 group-hover:shadow-2xl"
                >
                  <div class="flex flex-col lg:flex-row lg:items-start gap-6">
                    <div class="flex-shrink-0">
                      <div
                        class="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500"
                      >
                        <Icon
                          name="ph:rocket-bold"
                          class="text-2xl text-white"
                        />
                      </div>
                    </div>
                    <div class="flex-1">
                      <div
                        class="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4"
                      >
                        <h3
                          class="text-2xl lg:text-3xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300"
                        >
                          Front end Developer Intern
                        </h3>
                        <span
                          class="text-purple-400 font-semibold text-lg mt-2 lg:mt-0"
                          >Dec 2022 - Mar 2023</span
                        >
                      </div>
                      <p class="text-xl text-gray-300 mb-4 font-medium">
                        Locumator
                      </p>
                      <p class="text-gray-400 leading-relaxed mb-6">
                        Assisted in the development of web applications,
                        focusing on frontend technologies. Gained practical
                        experience in coding, debugging, and collaborating with
                        a team of developers to deliver high-quality software
                        solutions.
                      </p>
                      <div class="flex flex-wrap gap-3">
                        <span
                          class="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium"
                          >HTML/CSS</span
                        >
                        <span
                          class="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium"
                          >JavaScript</span
                        >
                        <span
                          class="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium"
                          >Git</span
                        >
                        <span
                          class="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium"
                          >Learning</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Experience Item 4 -->
            <div class="group animate-slide-in-right delay-900">
              <div
                class="flex flex-col lg:flex-row items-center lg:items-start gap-8"
              >
                <!-- Timeline Connector -->
                <div class="hidden lg:flex flex-col items-center">
                  <div
                    class="w-6 h-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-full group-hover:scale-150 transition-transform duration-500 shadow-lg"
                  ></div>
                </div>

                <!-- Content Card -->
                <div
                  class="flex-1 bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:bg-white/10 hover:border-orange-400/50 transition-all duration-500 group-hover:translate-x-4 group-hover:shadow-2xl"
                >
                  <div class="flex flex-col lg:flex-row lg:items-start gap-6">
                    <div class="flex-shrink-0">
                      <div
                        class="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500"
                      >
                        <Icon
                          name="ph:student-bold"
                          class="text-2xl text-white"
                        />
                      </div>
                    </div>
                    <div class="flex-1">
                      <div
                        class="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4"
                      >
                        <h3
                          class="text-2xl lg:text-3xl font-bold text-white group-hover:text-orange-400 transition-colors duration-300"
                        >
                          Secretary General
                        </h3>
                        <span
                          class="text-orange-400 font-semibold text-lg mt-2 lg:mt-0"
                          >2022 - 2023</span
                        >
                      </div>
                      <p class="text-xl text-gray-300 mb-4 font-medium">
                        University of The Gambia, Information Technology
                        Communication Students' Association
                      </p>
                      <p class="text-gray-400 leading-relaxed mb-6">
                        Gain leadership experience by serving as the Secretary
                        General of the Information Technology Communication
                        Students' Association at the University of The Gambia.
                        Organized events, managed communications, and
                        collaborated with fellow students to enhance the
                        academic and professional development of IT students.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="group animate-slide-in-right delay-900">
              <div
                class="flex flex-col lg:flex-row items-center lg:items-start gap-8"
              >
                <!-- Timeline Connector -->
                <div class="hidden lg:flex flex-col items-center">
                  <div
                    class="w-6 h-6 bg-gradient-to-r from-blue-500 to-green-500 rounded-full group-hover:scale-150 transition-transform duration-500 shadow-lg"
                  ></div>
                </div>

                <!-- Content Card -->
                <div
                  class="flex-1 bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:bg-white/10 hover:border-blue-400/50 transition-all duration-500 group-hover:translate-x-4 group-hover:shadow-2xl"
                >
                  <div class="flex flex-col lg:flex-row lg:items-start gap-6">
                    <div class="flex-shrink-0">
                      <div
                        class="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500"
                      >
                        <Icon
                          name="ph:student-bold"
                          class="text-2xl text-white"
                        />
                      </div>
                    </div>
                    <div class="flex-1">
                      <div
                        class="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4"
                      >
                        <h3
                          class="text-2xl lg:text-3xl font-bold text-white group-hover:text-orange-400 transition-colors duration-300"
                        >
                          Web Development Turtor
                        </h3>
                        <span
                          class="text-orange-400 font-semibold text-lg mt-2 lg:mt-0"
                          >August 2022</span
                        >
                      </div>
                      <p class="text-xl text-gray-300 mb-4 font-medium">
                        University of The Gambia, Information Technology
                        Communication Students' Association Summer Bootcamp
                      </p>
                      <p class="text-gray-400 leading-relaxed mb-6">
                        Served as a web development tutor during the Information
                        Technology Communication Students' Association Summer
                        Bootcamp at the University of The Gambia. Guided
                        students in learning web development fundamentals,
                        including HTML, CSS, and JavaScript, fostering their
                        skills and confidence in building web applications.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Stats Section -->
          <div
            class="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto mt-20 animate-fade-in-up delay-1000"
          >
            <div
              class="text-center bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:bg-white/10 hover:border-emerald-400/50 transition-all duration-300"
            >
              <div
                class="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 mb-3"
              >
                3+
              </div>
              <div class="text-gray-300 font-medium">Years Experience</div>
            </div>
            <div
              class="text-center bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300"
            >
              <div
                class="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-3"
              >
                20+
              </div>
              <div class="text-gray-300 font-medium">Projects Completed</div>
            </div>
            <div
              class="text-center bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:bg-white/10 hover:border-purple-400/50 transition-all duration-300"
            >
              <div
                class="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-3"
              >
                3
              </div>
              <div class="text-gray-300 font-medium">Companies</div>
            </div>
            <div
              class="text-center bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:bg-white/10 hover:border-orange-400/50 transition-all duration-300"
            >
              <div
                class="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400 mb-3"
              >
                ∞
              </div>
              <div class="text-gray-300 font-medium">Learning Never Stops</div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div id="projects">
      <div
        class="w-full min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900 relative overflow-hidden"
      >
        <!-- Animated Background Elements -->
        <div class="absolute inset-0 overflow-hidden">
          <div
            class="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"
          ></div>
          <div
            class="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"
          ></div>
          <div
            class="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"
          ></div>
        </div>

        <!-- Grid Pattern Overlay -->
        <div class="absolute inset-0 bg-grid-pattern opacity-10"></div>

        <div class="relative z-10 container mx-auto px-4 py-16">
          <!-- Section Header -->
          <div class="text-center mb-16 animate-fade-in-up">
            <h2
              class="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
            >
              Featured Projects
            </h2>
            <p class="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Discover my most impactful and innovative solutions crafted with
              cutting-edge technologies
            </p>
            <div
              class="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mt-8 rounded-full"
            ></div>
          </div>

          <!-- Projects Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            <!-- Project 1: Agrify -->
            <div class="project-card group" v-motion-slide-visible-once-bottom>
              <NuxtLink
                to="https://agrify.wales/"
                target="_blank"
                class="block h-full"
              >
                <div
                  class="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 h-full border border-gray-700 hover:border-purple-400 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
                >
                  <!-- Project Image -->
                  <div class="relative mb-6 overflow-hidden rounded-2xl">
                    <img
                      src="/public/agrify.jpg"
                      alt="Agrify Project"
                      class="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div
                      class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent group-hover:from-purple-900/50 transition-all duration-500"
                    ></div>
                  </div>

                  <!-- Project Content -->
                  <div class="space-y-4">
                    <h3
                      class="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300"
                    >
                      Agrify
                    </h3>

                    <p class="text-gray-300 text-sm leading-relaxed">
                      Simplify agricultural event management. Manage exhibitors,
                      scheduling, attendees, and event entry with ease.
                    </p>

                    <!-- Tech Stack -->
                    <div class="flex flex-wrap gap-2">
                      <span
                        class="px-3 py-1 text-xs bg-gradient-to-r from-green-600 to-green-500 text-white rounded-full font-medium"
                      >
                        Nuxt.js
                      </span>
                      <span
                        class="px-3 py-1 text-xs bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full font-medium"
                      >
                        Tailwind
                      </span>
                      <span
                        class="px-3 py-1 text-xs bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-full font-medium"
                      >
                        TypeScript
                      </span>
                      <span
                        class="px-3 py-1 text-xs bg-gradient-to-r from-yellow-600 to-yellow-500 text-white rounded-full font-medium"
                      >
                        Node.js
                      </span>
                    </div>
                  </div>

                  <!-- Hover Effect Arrow -->
                  <div
                    class="absolute top-6 right-6 w-8 h-8 bg-white/10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300"
                  >
                    <svg
                      class="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 17l9.2-9.2M17 17V7H7"
                      ></path>
                    </svg>
                  </div>
                </div>
              </NuxtLink>
            </div>

            <!-- Project 2: Swatch Editor -->
            <div
              class="project-card group"
              v-motion-slide-visible-once-bottom
              :delay="200"
            >
              <NuxtLink
                to="https://www.swatcheditor.com/"
                target="_blank"
                class="block h-full"
              >
                <div
                  class="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 h-full border border-gray-700 hover:border-cyan-400 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
                >
                  <div class="relative mb-6 overflow-hidden rounded-2xl">
                    <img
                      src="/public/swatch.jpg"
                      alt="Swatch Editor Project"
                      class="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div
                      class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent group-hover:from-cyan-900/50 transition-all duration-500"
                    ></div>
                  </div>

                  <div class="space-y-4">
                    <h3
                      class="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300"
                    >
                      Swatch Editor
                    </h3>

                    <p class="text-gray-300 text-sm leading-relaxed">
                      A realtime editing tool for the print design and textile
                      manufacturing industry.
                    </p>

                    <div class="flex flex-wrap gap-2">
                      <span
                        class="px-3 py-1 text-xs bg-gradient-to-r from-gray-600 to-gray-500 text-white rounded-full font-medium"
                      >
                        Next.js
                      </span>
                      <span
                        class="px-3 py-1 text-xs bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full font-medium"
                      >
                        Tailwind
                      </span>
                      <span
                        class="px-3 py-1 text-xs bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-full font-medium"
                      >
                        TypeScript
                      </span>
                      <span
                        class="px-3 py-1 text-xs bg-gradient-to-r from-orange-600 to-orange-500 text-white rounded-full font-medium"
                      >
                        Three.js
                      </span>
                    </div>
                  </div>

                  <div
                    class="absolute top-6 right-6 w-8 h-8 bg-white/10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300"
                  >
                    <svg
                      class="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 17l9.2-9.2M17 17V7H7"
                      ></path>
                    </svg>
                  </div>
                </div>
              </NuxtLink>
            </div>

            <!-- Project 3: The Development Wheel -->
            <div
              class="project-card group"
              v-motion-slide-visible-once-bottom
              :delay="400"
            >
              <NuxtLink
                to="https://thedevelopmentwheel.co.uk/"
                target="_blank"
                class="block h-full"
              >
                <div
                  class="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 h-full border border-gray-700 hover:border-pink-400 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/25"
                >
                  <div class="relative mb-6 overflow-hidden rounded-2xl">
                    <img
                      src="/public/wheel.jpg"
                      alt="The Development Wheel Project"
                      class="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div
                      class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent group-hover:from-pink-900/50 transition-all duration-500"
                    ></div>
                  </div>

                  <div class="space-y-4">
                    <h3
                      class="text-2xl font-bold text-white group-hover:text-pink-300 transition-colors duration-300"
                    >
                      The Development Wheel
                    </h3>

                    <p class="text-gray-300 text-sm leading-relaxed">
                      Provides your management team and colleagues a clear route
                      map to your objectives.
                    </p>

                    <div class="flex flex-wrap gap-2">
                      <span
                        class="px-3 py-1 text-xs bg-gradient-to-r from-green-600 to-green-500 text-white rounded-full font-medium"
                      >
                        Nuxt.js
                      </span>
                      <span
                        class="px-3 py-1 text-xs bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full font-medium"
                      >
                        Tailwind
                      </span>
                      <span
                        class="px-3 py-1 text-xs bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-full font-medium"
                      >
                        TypeScript
                      </span>
                      <span
                        class="px-3 py-1 text-xs bg-gradient-to-r from-indigo-600 to-indigo-500 text-white rounded-full font-medium"
                      >
                        PrimeVue
                      </span>
                    </div>
                  </div>

                  <div
                    class="absolute top-6 right-6 w-8 h-8 bg-white/10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300"
                  >
                    <svg
                      class="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 17l9.2-9.2M17 17V7H7"
                      ></path>
                    </svg>
                  </div>
                </div>
              </NuxtLink>
            </div>

            <!-- Project 4: Techknital -->
            <div
              class="project-card group"
              v-motion-slide-visible-once-bottom
              :delay="600"
            >
              <div
                class="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 h-full border border-gray-700 hover:border-emerald-400 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/25"
              >
                <div class="relative mb-6 overflow-hidden rounded-2xl">
                  <img
                    src="/public/techknital.jpg"
                    alt="Techknital Project"
                    class="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div
                    class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent group-hover:from-emerald-900/50 transition-all duration-500"
                  ></div>
                </div>

                <div class="space-y-4">
                  <h3
                    class="text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors duration-300"
                  >
                    Techknital
                  </h3>

                  <p class="text-gray-300 text-sm leading-relaxed">
                    An inventory database system for a fabric company to track
                    products, customers, deliveries, costs, and sales.
                  </p>

                  <div class="flex flex-wrap gap-2">
                    <span
                      class="px-3 py-1 text-xs bg-gradient-to-r from-green-600 to-green-500 text-white rounded-full font-medium"
                    >
                      Vue.js
                    </span>
                    <span
                      class="px-3 py-1 text-xs bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full font-medium"
                    >
                      Tailwind
                    </span>
                    <span
                      class="px-3 py-1 text-xs bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-full font-medium"
                    >
                      TypeScript
                    </span>
                    <span
                      class="px-3 py-1 text-xs bg-gradient-to-r from-indigo-600 to-indigo-500 text-white rounded-full font-medium"
                    >
                      PrimeVue
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Project 5: Barki Neneh -->
            <div
              class="project-card group"
              v-motion-slide-visible-once-bottom
              :delay="800"
            >
              <NuxtLink
                to="https://barki-neneh-site.vercel.app/"
                target="_blank"
                class="block h-full"
              >
                <div
                  class="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 h-full border border-gray-700 hover:border-yellow-400 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/25"
                >
                  <div class="relative mb-6 overflow-hidden rounded-2xl">
                    <img
                      src="/public/brakineneh.png"
                      alt="Barki Neneh Business Website"
                      class="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div
                      class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent group-hover:from-yellow-900/50 transition-all duration-500"
                    ></div>
                  </div>

                  <div class="space-y-4">
                    <h3
                      class="text-2xl font-bold text-white group-hover:text-yellow-300 transition-colors duration-300"
                    >
                      Barki Neneh Business
                    </h3>

                    <p class="text-gray-300 text-sm leading-relaxed">
                      A website showcasing the details and list of products and
                      services offered by Braki Neneh Business.
                    </p>

                    <div class="flex flex-wrap gap-2">
                      <span
                        class="px-3 py-1 text-xs bg-gradient-to-r from-gray-600 to-gray-500 text-white rounded-full font-medium"
                      >
                        Next.js
                      </span>
                      <span
                        class="px-3 py-1 text-xs bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full font-medium"
                      >
                        Tailwind
                      </span>
                      <span
                        class="px-3 py-1 text-xs bg-gradient-to-r from-slate-600 to-slate-500 text-white rounded-full font-medium"
                      >
                        Shadcn UI
                      </span>
                    </div>
                  </div>

                  <div
                    class="absolute top-6 right-6 w-8 h-8 bg-white/10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300"
                  >
                    <svg
                      class="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 17l9.2-9.2M17 17V7H7"
                      ></path>
                    </svg>
                  </div>
                </div>
              </NuxtLink>
            </div>

            <!-- Project 6: Famsa Gambia -->
            <div
              class="project-card group"
              v-motion-slide-visible-once-bottom
              :delay="1000"
            >
              <NuxtLink
                to="https://famsa-web-project.vercel.app/"
                target="_blank"
                class="block h-full"
              >
                <div
                  class="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 h-full border border-gray-700 hover:border-red-400 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25"
                >
                  <div class="relative mb-6 overflow-hidden rounded-2xl">
                    <img
                      src="/public/famsaga.png"
                      alt="Famsa Gambia Project"
                      class="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div
                      class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent group-hover:from-red-900/50 transition-all duration-500"
                    ></div>
                  </div>

                  <div class="space-y-4">
                    <h3
                      class="text-2xl font-bold text-white group-hover:text-red-300 transition-colors duration-300"
                    >
                      Famsa Gambia
                    </h3>

                    <p class="text-gray-300 text-sm leading-relaxed">
                      Website for THE FEDERATION OF AFRICAN MEDICAL STUDENTS
                      ASSOCIATION CONFERENCES 2023 hosted by UNIGAMSA.
                    </p>

                    <div class="flex flex-wrap gap-2">
                      <span
                        class="px-3 py-1 text-xs bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full font-medium"
                      >
                        React.js
                      </span>
                      <span
                        class="px-3 py-1 text-xs bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full font-medium"
                      >
                        Tailwind
                      </span>
                    </div>
                  </div>

                  <div
                    class="absolute top-6 right-6 w-8 h-8 bg-white/10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300"
                  >
                    <svg
                      class="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 17l9.2-9.2M17 17V7H7"
                      ></path>
                    </svg>
                  </div>
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="" id="recommendations">
      <div
        class="relative w-full bg-gradient-to-br from-neutral-900 via-gray-900 to-slate-900 overflow-hidden"
      >
        <!-- Background Elements -->
        <div class="absolute inset-0">
          <div
            class="absolute top-10 left-10 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"
          ></div>
          <div
            class="absolute top-20 right-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"
          ></div>
          <div
            class="absolute -bottom-8 left-20 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"
          ></div>
        </div>

        <!-- Floating particles -->
        <div class="absolute inset-0 overflow-hidden">
          <div
            v-for="n in 50"
            :key="n"
            class="absolute w-1 h-1 bg-white rounded-full opacity-30 animate-float"
            :style="{
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animationDelay: Math.random() * 10 + 's',
              animationDuration: Math.random() * 10 + 10 + 's',
            }"
          ></div>
        </div>

        <div
          class="relative z-10 w-full h-full lg:px-24 px-4 py-16 flex flex-col items-center justify-center"
        >
          <!-- Title with entrance animation -->
          <div class="text-center mb-16">
            <h2
              class="lg:text-6xl text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-green-400 to-blue-400 mb-4 animate-fade-in-up"
            >
              What People Say
            </h2>
            <div
              class="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto rounded-full animate-fade-in-up animation-delay-300"
            ></div>
          </div>

          <!-- Main testimonial container -->
          <div class="relative w-full max-w-4xl mx-auto">
            <!-- Testimonial Card -->
            <div class="relative group">
              <div
                class="absolute -inset-1 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"
              ></div>

              <div
                class="relative bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-slate-700/50 shadow-2xl"
              >
                <!-- Quote icon -->
                <div
                  class="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-green-400 to-pink-400 rounded-full flex items-center justify-center shadow-lg"
                >
                  <svg
                    class="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"
                    />
                  </svg>
                </div>

                <div
                  class="flex flex-col lg:flex-row items-center lg:items-start gap-8"
                >
                  <!-- Avatar Section -->
                  <div
                    class="relative flex-shrink-0 animate-fade-in-up animation-delay-500"
                  >
                    <div
                      class="absolute -inset-2 bg-gradient-to-r from-green-400 to-blue-400 rounded-full animate-pulse"
                    ></div>
                    <img
                      :src="testimonials[currentIndex].avatar"
                      :alt="testimonials[currentIndex].name"
                      class="relative w-24 h-24 lg:w-32 lg:h-32 rounded-full object-cover border-4 border-white shadow-xl transform group-hover:scale-105 transition-transform duration-300"
                    />
                    <div
                      class="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center"
                    >
                      <svg
                        class="w-4 h-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>

                  <!-- Content Section -->
                  <div
                    class="flex-1 text-center lg:text-left animate-fade-in-up animation-delay-700"
                  >
                    <div class="mb-6">
                      <p
                        class="text-lg lg:text-xl text-gray-100 leading-relaxed italic font-light"
                        v-html="testimonials[currentIndex].content"
                        :key="currentIndex"
                      ></p>
                    </div>

                    <div class="space-y-2">
                      <h3
                        class="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white"
                      >
                        {{ testimonials[currentIndex].name }}
                      </h3>
                      <p class="text-gray-400 text-base">
                        {{ testimonials[currentIndex].title }}
                      </p>

                      <!-- Rating Stars -->
                      <div class="flex justify-center lg:justify-start mt-4">
                        <div class="flex space-x-1">
                          <svg
                            v-for="star in 5"
                            :key="star"
                            class="w-5 h-5 text-yellow-400 fill-current animate-star-glow"
                            :style="{ animationDelay: star * 100 + 'ms' }"
                          >
                            <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Navigation Dots -->
            <div class="flex justify-center mt-8 space-x-3">
              <button
                v-for="(testimonial, index) in testimonials"
                :key="index"
                @click="changeTestimonial(index)"
                :class="{
                  'bg-gradient-to-r from-green-400 to-blue-400 scale-125':
                    currentIndex === index,
                  'bg-gray-500 hover:bg-gray-400': currentIndex !== index,
                }"
                class="w-3 h-3 rounded-full transition-all duration-300 ease-in-out transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-slate-800"
              ></button>
            </div>

            <!-- Navigation Arrows -->
            <button
              @click="previousTestimonial"
              class="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-16 w-12 h-12 bg-slate-800/80 hover:bg-slate-700 rounded-full border border-slate-600 flex items-center justify-center transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-400 group"
            >
              <svg
                class="w-6 h-6 text-gray-400 group-hover:text-white transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
            </button>

            <button
              @click="nextTestimonial"
              class="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-16 w-12 h-12 bg-slate-800/80 hover:bg-slate-700 rounded-full border border-slate-600 flex items-center justify-center transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-400 group"
            >
              <svg
                class="w-6 h-6 text-gray-400 group-hover:text-white transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </button>
          </div>

          <!-- Auto-play progress bar -->
          <div class="w-full max-w-sm mx-auto mt-8">
            <div class="h-1 bg-gray-700 rounded-full overflow-hidden">
              <div
                class="h-full bg-gradient-to-r from-green-400 to-blue-400 rounded-full animate-progress"
                :key="currentIndex"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer
      class="relative bg-gradient-to-r from-slate-900 via-green-900 to-slate-900 overflow-hidden"
    >
      <!-- Background Effects -->
      <div class="absolute inset-0">
        <div
          class="absolute top-0 left-0 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"
        ></div>
        <div
          class="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse animation-delay-2000"
        ></div>
      </div>

      <!-- Animated Border -->
      <div
        class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-shimmer"
      ></div>

      <div class="relative z-10 lg:px-24 px-4 py-12">
        <div class="max-w-6xl mx-auto">
          <!-- Main Footer Content -->
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <!-- Copyright & Brand -->
            <div class="flex flex-col items-center lg:items-start space-y-4">
              <div class="text-center lg:text-left">
                <h3
                  class="text-2xl font-bold text-white bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 mb-2"
                >
                  Sheikh Tijan Hydara
                </h3>
                <p class="text-gray-400 text-sm">
                  Software Developer & UI/UX Designer
                </p>
              </div>
              <div class="flex items-center space-x-2 text-gray-400">
                <div
                  class="w-2 h-2 bg-green-500 rounded-full animate-pulse"
                ></div>
                <span class="text-lg font-medium">&copy; {{ new Date().getFullYear() }}</span>
                <div
                  class="w-2 h-2 bg-blue-500 rounded-full animate-pulse animation-delay-1000"
                ></div>
              </div>
            </div>

            <!-- Get In Touch -->
            <div class="flex flex-col items-center space-y-4">
              <div class="text-center">
                <h4
                  class="text-xl font-semibold text-white mb-2 animate-fade-in-up"
                >
                  GET IN TOUCH
                </h4>
                <p class="text-gray-400 text-sm">
                  Let's build something amazing together
                </p>
              </div>
              <div class="flex items-center space-x-1">
                <div
                  class="w-8 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-pulse"
                ></div>
                <div
                  class="w-2 h-2 bg-purple-500 rounded-full animate-bounce"
                ></div>
                <div
                  class="w-8 h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent animate-pulse"
                ></div>
              </div>
            </div>

            <!-- Social Links -->
            <div class="flex flex-col items-center lg:items-end space-y-4">
              <h4 class="text-lg font-semibold text-gray-300">
                Connect With Me
              </h4>
              <div class="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/sheikh-tijan-hydara-60602621a/"
                  target="_blank"
                  class="group relative p-3 rounded-full bg-slate-800/50 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-110"
                >
                  <i
                    class="pi pi-linkedin text-2xl text-gray-400 group-hover:text-blue-500 transition-colors duration-300"
                  ></i>
                  <div
                    class="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    LinkedIn
                  </div>
                </a>

                <a
                  href="https://github.com/sheikh-Tijan-hydara"
                  target="_blank"
                  class="group relative p-3 rounded-full bg-slate-800/50 border border-slate-700 hover:border-gray-400 transition-all duration-300 hover:shadow-lg hover:shadow-gray-500/25 hover:scale-110"
                >
                  <i
                    class="pi pi-github text-2xl text-gray-400 group-hover:text-white transition-colors duration-300"
                  ></i>
                  <div
                    class="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    GitHub
                  </div>
                </a>

                <a
                  href="https://twitter.com/your-twitter"
                  target="_blank"
                  class="group relative p-3 rounded-full bg-slate-800/50 border border-slate-700 hover:border-sky-500 transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/25 hover:scale-110"
                >
                  <i
                    class="pi pi-twitter text-2xl text-gray-400 group-hover:text-sky-500 transition-colors duration-300"
                  ></i>
                  <div
                    class="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    Twitter
                  </div>
                </a>
              </div>
            </div>
          </div>

          <!-- Divider -->
          <div class="relative my-8">
            <div class="absolute inset-0 flex items-center" aria-hidden="true">
              <div class="w-full border-t border-slate-700"></div>
            </div>
            <div class="relative flex justify-center">
              <span
                class="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 px-4 text-sm text-gray-400"
              >
                
              </span>
            </div>
          </div>

          <!-- Bottom Section -->
          <div
            class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          >
            <div class="text-gray-400 text-sm">
              <p>All rights reserved. Built with Vue.js & Tailwind CSS</p>
            </div>

            <div class="flex items-center space-x-4 text-sm text-gray-400">
              <a
                href="#"
                class="hover:text-purple-400 transition-colors duration-300"
                >Privacy Policy</a
              >
              <span>•</span>
              <a
                href="#"
                class="hover:text-purple-400 transition-colors duration-300"
                >Terms of Service</a
              >
              <span>•</span>
              <a
                href="#"
                class="hover:text-purple-400 transition-colors duration-300"
                >Contact</a
              >
            </div>
          </div>

          <!-- Scroll to Top Button -->
          <div class="absolute bottom-4 right-4">
            <button
              @click="scrollToTop"
              class="group p-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-purple-500/25"
            >
              <svg
                class="w-5 h-5 text-white group-hover:animate-bounce"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Floating Elements -->
      <div
        class="absolute bottom-10 left-10 w-4 h-4 bg-purple-500 rounded-full animate-ping opacity-20"
      ></div>
      <div
        class="absolute top-10 right-20 w-2 h-2 bg-pink-500 rounded-full animate-ping opacity-30 animation-delay-2000"
      ></div>
      <div
        class="absolute bottom-20 right-10 w-3 h-3 bg-blue-500 rounded-full animate-ping opacity-25 animation-delay-4000"
      ></div>
    </footer>
  </div>
</template>

<style>
/* ======================
   GLOBAL STYLES
   ====================== */
html {
  scroll-behavior: smooth;
}

/* ======================
   LAYOUT & COMPONENTS
   ====================== */
.round-corner {
  border-radius: 60px 8px 40px 60px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
}

.paragraph {
  line-height: 1.5;
}

.custom-avatar {
  width: 100px;
  height: 100px;
}

/* Glassmorphism effect */
.backdrop-blur-sm {
  backdrop-filter: blur(4px);
}

/* Grid background pattern */
.bg-grid-pattern {
  background-image: 
    linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
  background-size: 50px 50px;
}

/* ======================
   KEYFRAME ANIMATIONS
   ====================== */
@keyframes wave {
  0%, 60%, 100% { transform: rotate(0deg); }
  10%, 30% { transform: rotate(14deg); }
  20% { transform: rotate(-8deg); }
  40% { transform: rotate(-4deg); }
  50% { transform: rotate(10deg); }
}

@keyframes blob {
  0%, 100% { transform: translate(0px, 0px) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
}

@keyframes float {
  0%, 100% { 
    transform: translateY(0) scale(1);
    opacity: 0.3;
  }
  50% { 
    transform: translateY(-20px) scale(1.2);
    opacity: 0.8;
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}



@keyframes gradientShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

/* ======================
   ANIMATION CLASSES
   ====================== */
.wave-emoji {
  display: inline-block;
  animation: wave 1.5s infinite;
}

.animate-blob {
  animation: blob 7s infinite;
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
  opacity: 0;
}

.animate-slide-in-left {
  animation: slideInLeft 0.8s ease-out forwards;
  opacity: 0;
}

.animate-slide-in-right {
  animation: slideInRight 0.8s ease-out forwards;
  opacity: 0;
}

.animate-gradient {
  background-size: 200% 200%;
  animation: gradientShift 3s ease infinite;
}

.animate-shimmer {
  background: linear-gradient(90deg, transparent, rgba(147, 51, 234, 0.5), transparent);
  background-size: 200% 100%;
  animation: shimmer 3s ease-in-out infinite;
}

/* ======================
   ANIMATION DELAYS
   ====================== */
.delay-200 { animation-delay: 200ms; }
.delay-300 { animation-delay: 300ms; }
.delay-500 { animation-delay: 500ms; }
.delay-700 { animation-delay: 700ms; }
.delay-900 { animation-delay: 900ms; }
.delay-1000 { animation-delay: 1s; }
.animation-delay-2000 { animation-delay: 2s; }
.animation-delay-4000 { animation-delay: 4s; }

/* ======================
   PROJECT CARDS
   ====================== */
.project-card {
  animation: fadeInUp 0.8s ease-out forwards;
  opacity: 0;
}

.project-card:nth-child(1) { animation-delay: 0.1s; }
.project-card:nth-child(2) { animation-delay: 0.2s; }
.project-card:nth-child(3) { animation-delay: 0.3s; }
.project-card:nth-child(4) { animation-delay: 0.4s; }
.project-card:nth-child(5) { animation-delay: 0.5s; }
.project-card:nth-child(6) { animation-delay: 0.6s; }

/* ======================
   RESPONSIVE DESIGN
   ====================== */
@media screen and (max-width: 960px) {
  ::v-deep(.customized-timeline) {
    .p-timeline-event:nth-child(even) {
      flex-direction: row;
      
      .p-timeline-event-content {
        text-align: left;
      }
    }

    .p-timeline-event-opposite {
      flex: 0;
    }
  }
}
</style>
