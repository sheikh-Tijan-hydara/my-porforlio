<script setup>
import CustomProgressBar from "./CustomProgressBar.vue";
</script>
<template>
  <div
    class="relative w-full lg:h-[90vh] h-auto flex items-center justify-center text-white bg-cover bg-center bg-no-repeat"
  >
    <div class="flex lg:flex-row flex-col gap-16 w-full px-8">
      <div class="flex flex-col gap-8 lg:w-1/2 w-full">
        <h2 class="lg:text-4xl text-2xl font-bold pb-2 lg:mb-4">SOFTWARE SKILLS</h2>
        <h4 class="text-xl font-semibold">WEB DESIGN</h4>
        <div class="flex flex-row gap-4 items-center w-full">
          <div class="flex lg:flex-row flex-col gap-4 justify-between lg:items-center w-full">
            <div class="flex flex-row gap-4 lg:w-1/4 items-center">
              <div class="border border-green-500 p-3 rounded">
                <font-awesome-icon icon="fa-brands fa-figma" class="text-3xl" />
              </div>
              <p class="text-2xl font-semibold">Figma</p>
            </div>
            <div class="lg:w-9/12">
                 <CustomProgressBar targetValue="70" />
            </div>
          </div>
        </div>
        <h4 class="text-xl font-semibold">WEB DEVELOPMENT</h4>

        <div class="flex flex-row gap-4 items-center w-full">
          <div class="flex lg:flex-row flex-col gap-4 justify-between lg:items-center w-full">
            <div class="flex flex-row gap-4 lg:w-1/4 items-center">
              <div class="border border-green-500 p-3 rounded">
                <font-awesome-icon icon="fa-brands fa-js" class="text-3xl" />
              </div>
              <p class="text-2xl font-semibold">JavaScript</p>
            </div>
            <div class="lg:w-9/12">
              <CustomProgressBar targetValue="95" />
            </div>
          </div>
        </div>
        <div class="flex flex-row gap-4 items-center w-full">
          <div class="flex lg:flex-row flex-col gap-4 justify-between lg:items-center w-full">
            <div class="flex flex-row gap-4 lg:w-1/4 items-center">
              <div class="border border-green-500 p-3 rounded">
                <font-awesome-icon icon="fa-brands fa-vuejs" class="text-3xl" />
              </div>
              <p class="text-2xl font-semibold">Vue js</p>
            </div>
            <div class="lg:w-9/12">
                 <CustomProgressBar targetValue="95" />
            </div>
          </div>
        </div>
        <div class="flex flex-row gap-4 items-center w-full">
          <div class="flex lg:flex-row flex-col gap-4 justify-between lg:items-center w-full">
            <div class="flex flex-row gap-4 lg:w-1/4 items-center">
              <div class="border border-green-500 p-3 rounded">
                <font-awesome-icon icon="fa-brands fa-react" class="text-3xl" />
              </div>
              <p class="text-2xl font-semibold">React js</p>
            </div>
            <div class="lg:w-9/12">
                     <CustomProgressBar targetValue="95" />
            </div>
          </div>
        </div>
        <div class="flex flex-row gap-4 items-center w-full">
          <div class="flex lg:flex-row flex-col gap-4 justify-between lg:items-center w-full">
            <div class="flex flex-row gap-4 lg:w-1/4 items-center">
              <div class="border border-green-500 p-3 rounded">
                <font-awesome-icon
                  icon="fa-solid fa-mobile-screen"
                  class="text-3xl"
                />
              </div>
              <p class="text-2xl font-semibold">React Native</p>
            </div>
            <div class="lg:w-9/12">
                     <CustomProgressBar targetValue="95" />
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-8 lg:w-1/2 w-full">
        <h2 class="lg:text-4xl text-2xl font-bold pb-2 lg:mb-4 hidden lg:block">PERSONAL SKILLS</h2>
        <div class="lg:flex flex-row gap-4 items-center w-full hidden">
          <div class="flex lg:flex-row flex-col gap-4 justify-between lg:items-center w-full">
            <div class="flex flex-row gap-4 lg:w-1/4 items-center">
              <div class="border border-green-500 p-3 rounded">
                <font-awesome-icon icon="fa-solid fa-pencil" class="text-3xl" />
              </div>
              <p class="text-2xl font-semibold">Creativity</p>
            </div>
            <div class="lg:w-9/12">
              <CustomProgressBar targetValue="100" />
            </div>
          </div>
        </div>
        <div class="lg:flex flex-row gap-4 items-center w-full hidden">
          <div class="flex lg:flex-row flex-col gap-4 justify-between lg:items-center w-full">
            <div class="flex flex-row gap-4 lg:w-1/4 items-center">
              <div class="border border-green-500 p-3 rounded">
                <font-awesome-icon icon="fa-solid fa-users" class="text-3xl" />
              </div>
              <p class="text-2xl font-semibold">Team Work</p>
            </div>
            <div class="lg:w-9/12">
                 <CustomProgressBar targetValue="100" />
            </div>
          </div>
        </div>
        <div class="lg:flex flex-row gap-4 items-center w-full hidden">
          <div class="flex lg:flex-row flex-col gap-4 justify-between lg:items-center w-full">
            <div class="flex flex-row gap-1 lg:w-1/4 items-center">
              <div class="border border-green-500 p-3 rounded">
                <font-awesome-icon icon="fa-solid fa-sitemap" class="text-3xl" />
              </div>
              <p class="text-2xl font-semibold">Organisation</p>
            </div>
            <div class="lg:w-9/12">
                     <CustomProgressBar targetValue="100" />
            </div>
          </div>
        </div>
        <div class="lg:flex flex-row gap-4 items-center w-full hidden">
          <div class="flex lg:flex-row flex-col gap-4 justify-between lg:items-center w-full">
            <div class="flex flex-row gap-1 lg:w-1/4 items-center">
              <div class="border border-green-500 p-3 rounded">
                <font-awesome-icon icon="fa-solid fa-person-chalkboard" class="text-3xl" />
              </div>
              <p class="text-2xl font-semibold">Presentation</p>
            </div>
            <div class="lg:w-9/12">
                         <CustomProgressBar targetValue="100" />
            </div>
          </div>
        </div>

        <h2 class="lg:text-4xl text-2xl font-bold  lg:mb-2 ">EDUCATION</h2>
        <div class="flex flex-row gap-4 items-center w-full">
          <div class="flex lg:flex-row flex-col gap-8 lg:items-center w-full">
            <div class="flex flex-row gap-2  items-center">
              <div class="border border-green-500 p-3 rounded">
                <font-awesome-icon icon="fa-solid fa-graduation-cap" class="text-3xl" />
              </div>
              <div class="flex flex-col">
              <p class="text-2xl font-semibold">Bachelors in computer science</p>
              <p class="text-lg ">University Of The Gambia</p>
            </div>
            </div>
          </div>
        </div>
        <div class="flex flex-row gap-4 items-center w-full mb-4 lg:mb-0">
          <div class="flex lg:flex-row flex-col gap-4 justify-between lg:items-center w-full">
            <div class="flex flex-row gap-2 items-center">
              <div class="border border-green-500 p-3 rounded">
                <font-awesome-icon icon="fa-solid fa-graduation-cap" class="text-3xl" />
              </div>
              <div class="flex flex-col">
              <p class="text-2xl font-semibold">Erasmus student exchange program</p>
              <p class="text-lg ">Universidad de Jaen</p>
            </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>
