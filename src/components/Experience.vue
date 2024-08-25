<script setup>
import Timeline from "primevue/timeline";

const experience = [
  {
    title: "Software Developer",
    company: "Writemedia Gambia Ltd",
    date: "April 2023 - Present",
    description:
      "Collaborate with cross-functional teams to identify and prioritise features and requirements. Design system prototypes with Figma. Develop and maintain the applications using Vue js, Nuxt js, Next js. Conduct code reviews and provide feedback to improve code quality using Bitbucket and Github. Conduct springplannings and spring reviews with the customer. Collaborate with project managers to manage project progress using Team Work Platform .",
  },
  {
    title: "Intern",
    company: "Locumator",
    date: "December 2022 - April 2023",
    description:
      "Collaborate with senior developer to identify and prioritise features and requirements. Design system prototypes with Figma. Develop and maintain the applications using React js, React Native , Next js. Joined Weekly project Update meetings",
  },
  {
    title: "Intern",
    company: "Hmz Enterprise",
    date: "February 2022 - March 2022",
    description:
      "Learned the basics of web development. Developed a simple website using HTML, CSS, and JavaScript. Learned how to use Git and Github. Learned how to use Figma to design system prototypes.",
  },
  {
     title: "Tutor",
     company: "University of The Gambia School of Information and Communication Technology",
     date: "August 2022 - September 2022",
     description:
       "Taught students the basics of web development. Developed a simple website using HTML, CSS, and JavaScript.",
  }
];


</script>

<template>
  <div
    class="w-full lg:px-24 px-8 py-6 md:py-8  h-auto flex flex-col  justify-center text-white bg-neutral-950"
  >
     <h2 class="lg:text-4xl text-2xl font-bold pb-2 mb-4">EXPERIENCE</h2>
    <Timeline :value="experience" align="alternate" class="customized-timeline">
      <template #marker="slotProps">
        <div class="border border-green-500 p-8 rounded-xl">
          <p class="font-bold lg:text-xl text-lg">{{ slotProps.item.title }}</p>
        </div>
      </template>
      <template #content="slotProps">
        <div class="p-4 flex flex-col gap-4 animate-bounce-twice">
          <h3 class="font-bold lg:text-2xl">{{ slotProps.item.company }}</h3>
          <p class="font-semibold lg:text-lg">{{ slotProps.item.date }}</p>
          <p class="lg:text-lg text-sm">{{ slotProps.item.description }}</p>
        </div>
      </template>
    </Timeline>
  </div>
</template>
