<script setup>
import Button from "primevue/button";
import Drawer from "primevue/drawer";
import { ref } from "vue";

const visible = ref(false);
</script>

<template>
  <div
    class="mx-auto w-full  lg:px-8 px-2 flex items-center justify-between lg:border lg:border-green-500 rounded-full "
  >
    <!-- Logo Section -->
    <div class="flex items-center">
      <img src="/portfolio.png" alt="Logo" class="h-24 w-32 object-cover" />
    </div>

    <!-- Navigation Section -->
    <nav class="space-x-8 text-xl font-bold text-white hidden lg:block">
      <a
        href="#about"
        class="hover:text-green-500 transition-colors duration-300"
      >
        ABOUT ME
    </a>
      <a
        href="#experience"
        class="hover:text-green-500 transition-colors duration-300"
      >
        EXPERIENCE
  </a>
      <a
        href="#projects"
        class="hover:text-green-500 transition-colors duration-300"
      >
        PROJECTS
</a>
    </nav>

    <!-- Mobile Navigation Section -->
    <div class="flex items-center space-x-4 lg:hidden">
      <Button icon="pi pi-bars" @click="visible = true" />

      <Drawer v-model:visible="visible">
        <template #container="{ closeCallback }">
          <div class="p-2 flex flex-col h-full">
            <div class="flex justify-end p-4">
              <Button
                icon="pi pi-times"
                @click="closeCallback"
                class="text-white"
              />
            </div>
            <nav class="flex flex-col space-y-12 text-xl px-2 font-bold text-white">
              <a
                href="#about"
                class="hover:text-green-500 transition-colors duration-300"
              >
                ABOUT ME
            </a>
              <a
                href="#experience"
                class="hover:text-green-500 transition-colors duration-300"
              >
                EXPERIENCE
          </a>
              <a
                href="#projects"
                class="hover:text-green-500 transition-colors duration-300"
              >
                PROJECTS
        </a>
            </nav>
            <div class="mt-auto flex justify-around py-4">

              <a
                href="https://www.linkedin.com/in/sheikh-tijan-hydara-60602621a/"
                target="_blank"
              >
                <i class="pi pi-linkedin" style="font-size: 3rem"></i>
              </a>
              <a href="https://github.com/sheikh-Tijan-hydara" target="_blank">
                <i class="pi pi-github" style="font-size: 3rem"></i>
              </a>
            </div>
          </div>
        </template>
      </Drawer>
    </div>
  </div>
</template>
