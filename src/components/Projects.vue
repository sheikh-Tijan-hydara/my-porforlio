<script setup>
import Card from "primevue/card";
</script>

<template>
  <div class="w-full h-auto flex flex-col lg:p-4 p-2 text-white bg-neutral-950">
    <h2 class="lg:text-4xl text-2xl font-bold pb-2 mb-4">
      Top Featured Projects
    </h2>
    <div class="flex flex-wrap items-center justify-center gap-8">
      <a
        href="https://agrify.wales/"
        target="_blank"
        class="w-full lg:w-2/5 lg:h-[600px]"
      >
        <Card
          :pt="{
            root: {
              style: { background: '#262626', color: 'white' },
              class: 'bg-neutral-800',
            },
          }"
          :pt-options="{
            mergeSections: false,
            mergeProps: false,
          }"
          style=" overflow: hidden"
          class="h-full w-full rounded-lg bg-neutral-800 overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out"
        >
          <template #header>
            <img
              alt="user header"
              src="/public/agrify.jpg"
              class="lg:p-8 p-4 rounded w-full h-full"
            />
          </template>
          <template #title>
            <div class="flex flex-col">
              <h3 class="lg:font-bold text-3xl mb-4">Agrify</h3>
              <div class="flex flex-wrap gap-4">
                <p class="py-2 px-4 text-sm rounded-full bg-neutral-950">
                  Nuxt js
                </p>
                <p class="py-2 px-4 text-sm rounded-full bg-neutral-950">
                  Tailwindcss
                </p>
                <p class="py-2 px-4 text-sm rounded-full bg-neutral-950">
                  Typescript
                </p>
                <p class="py-2 px-4 text-sm rounded-full bg-neutral-950">
                  Nodejs
                </p>
              </div>
            </div>
          </template>
          <template #content>
            <p class="m-0">
              Agrify is a system that Simplify agricultural event management.
              Manage exhibitors, scheduling, attendees, and event entry with
              ease.
            </p>
          </template>
        </Card>
      </a>
      <a
        href="https://www.swatcheditor.com/"
        target="_blank"
        class="w-full lg:w-2/5 lg:h-[600px]"
      >
        <Card
          :pt="{
            root: {
              style: { background: '#262626', color: 'white' },
              class: 'bg-neutral-800',
            },
          }"
          :pt-options="{
            mergeSections: false,
            mergeProps: false,
          }"
          style=" overflow: hidden"
          class="h-full w-full rounded-lg bg-neutral-800 overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out"
        >
          <template #header>
            <img
              alt="user header"
              src="/public/swatch.jpg"
              class="lg:p-8 p-4 rounded w-full h-full"
            />
          </template>
          <template #title>
            <div class="flex flex-col">
              <h3 class="lg:font-bold text-3xl mb-4">Swatch Editor</h3>
              <div class="flex flex-wrap gap-4">
                <p class="py-2 px-4 text-sm rounded-full bg-neutral-950">
                  Next js
                </p>
                <p class="py-2 px-4 text-sm rounded-full bg-neutral-950">
                  Tailwindcss
                </p>
                <p class="py-2 px-4 text-sm rounded-full bg-neutral-950">
                  Typescript
                </p>
                <p class="py-2 px-4 text-sm rounded-full bg-neutral-950">
                  Threejs
                </p>
              </div>
            </div>
          </template>
          <template #content>
            <p class="m-0">
              swatcheditor is a realtime editing tool for the print design and
              textile manufacturing industry.
            </p>
          </template>
        </Card>
      </a>
      <a
        href="https://thedevelopmentwheel.co.uk/"
        target="_blank"
        class="w-full lg:w-2/5 lg:h-[600px]"
      >
        <Card
          :pt="{
            root: {
              style: { background: '#262626', color: 'white' },
              class: 'bg-neutral-800',
            },
          }"
          :pt-options="{
            mergeSections: false,
            mergeProps: false,
          }"
          style=" overflow: hidden"
          class="h-full w-full rounded-lg bg-neutral-800 overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out"
        >
          <template #header>
            <img
              alt="user header"
              src="/public/wheel.jpg"
              class="lg:p-8 p-4 rounded w-full h-full"
            />
          </template>
          <template #title>
            <div class="flex flex-col">
              <h3 class="lg:font-bold text-3xl mb-4">The Development Wheel</h3>
              <div class="flex flex-wrap gap-4">
                <p class="py-2 px-4 text-sm rounded-full bg-neutral-950">
                  Nuxt js
                </p>
                <p class="py-2 px-4 text-sm rounded-full bg-neutral-950">
                  Tailwindcss
                </p>
                <p class="py-2 px-4 text-sm rounded-full bg-neutral-950">
                  Typescript
                </p>
                <p class="py-2 px-4 text-sm rounded-full bg-neutral-950">
                  Primevue
                </p>
              </div>
            </div>
          </template>
          <template #content>
            <p class="m-0">
              The Wheel provides your management team and colleagues a clear
              route map to your objectives
            </p>
          </template>
        </Card>
      </a>
      <div class="w-full lg:w-2/5 lg:h-[600px]">
        <Card
          :pt="{
            root: {
              style: { background: '#262626', color: 'white' },
              class: 'bg-neutral-800',
            },
          }"
          :pt-options="{
            mergeSections: false,
            mergeProps: false,
          }"
          style=" overflow: hidden"
          class="h-full w-full rounded-lg bg-neutral-800 overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out"
        >
          <template #header>
            <img
              alt="user header"
              src="/public/techknital.jpg"
              class="lg:p-8 p-4 rounded w-full h-full"
            />
          </template>
          <template #title>
            <div class="flex flex-col">
              <h3 class="lg:font-bold text-3xl mb-4">Techknital</h3>
              <div class="flex flex-wrap gap-4">
                <p class="py-2 px-4 text-sm rounded-full bg-neutral-950">
                  Vue js
                </p>
                <p class="py-2 px-4 text-sm rounded-full bg-neutral-950">
                  Tailwindcss
                </p>
                <p class="py-2 px-4 text-sm rounded-full bg-neutral-950">
                  Typescript
                </p>
                <p class="py-2 px-4 text-sm rounded-full bg-neutral-950">
                  Primevue
                </p>
              </div>
            </div>
          </template>
          <template #content>
            <p class="m-0">
              An Inventory database system for a fabric company that allows them
              to keep track of their products, customers, deliveries, costs,
              sales, etc.
            </p>
          </template>
        </Card>
      </div>
      <a
        href="https://barki-neneh-site.vercel.app/"
        target="_blank"
        class="w-full lg:w-2/5 lg:h-[600px]"
      >
        <Card
          :pt="{
            root: {
              style: { background: '#262626', color: 'white' },
              class: 'bg-neutral-800',
            },
          }"
          :pt-options="{
            mergeSections: false,
            mergeProps: false,
          }"
          style=" overflow: hidden"
          class="h-full w-full rounded-lg bg-neutral-800 overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out"
        >
          <template #header>
            <img
              alt="user header"
              src="/public/brakineneh.png"
              class="lg:p-8 p-4 rounded w-full h-full"
            />
          </template>
          <template #title>
            <div class="flex flex-col">
              <h3 class="lg:font-bold text-3xl mb-4">
                Barki Neneh Business Website
              </h3>
              <div class="flex flex-wrap gap-4">
                <p class="py-2 px-4 text-sm rounded-full bg-neutral-950">
                  Next js
                </p>
                <p class="py-2 px-4 text-sm rounded-full bg-neutral-950">
                  Tailwindcss
                </p>
                <p class="py-2 px-4 text-sm rounded-full bg-neutral-950">
                  Shadcn UI
                </p>
              </div>
            </div>
          </template>
          <template #content>
            <p class="m-0">
              It's a website that shows the details and list of products and
              services offered by Braki Neneh Business.
            </p>
          </template>
        </Card>
      </a>
      <a
        href="https://famsa-web-project.vercel.app/"
        target="_blank"
        class="w-full lg:w-2/5 lg:h-[600px]"
      >
        <Card
          :pt="{
            root: {
              style: { background: '#262626', color: 'white' },
              class: 'bg-neutral-800',
            },
          }"
          :pt-options="{
            mergeSections: false,
            mergeProps: false,
          }"
          style=" overflow: hidden"
          class="h-full w-full rounded-lg bg-neutral-800 overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out"
        >
          <template #header>
            <img
              alt="user header"
              src="/public/famsaga.png"
              class="lg:p-8 p-4 rounded w-full h-full"
            />
          </template>
          <template #title>
            <div class="flex flex-col">
              <h3 class="lg:font-bold text-3xl mb-4">Famsa Gambia</h3>
              <div class="flex flex-wrap gap-4">
                <p class="py-2 px-4 text-sm rounded-full bg-neutral-950">
                  React js
                </p>
                <p class="py-2 px-4 text-sm rounded-full bg-neutral-950">
                  Tailwindcss
                </p>
              </div>
            </div>
          </template>
          <template #content>
            <p class="m-0">
              Website for THE FEDERATION OF AFRICAN MEDICAL STUDENTS ASSOCIATION
              CONFERENCES 2023 HOSTED BY THE UNIGAMSA.
            </p>
          </template>
        </Card>
      </a>
    </div>
  </div>
</template>
