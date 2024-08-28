<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import Card from "primevue/card";
import Avatar from "primevue/avatar";

const testimonials = [
  {
    id: 0,
    avatar: "/fatou.jpeg",
    content: `
      I have had the pleasure of working closely with Sheikh Tijan
      and I am impressed by his talent and dedication as
      both a frontend developer and designer. <br/>His ability to
      seamlessly blend aesthetic design with functional and
      responsive code is truly exceptional. I also admire his skills
      in taking up latest technologies, problem-solving and teamwork.
    `,
    name: "Fatou Gaye",
    title: "CEO, Wolurek",
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
    title: "Lead Developer, Writemedia Gambia",
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
    name: "Amadu Jallu",
    title: "Lead Backend Developer, Nafa Gambia",
  },
];

const currentIndex = ref(0);
let intervalId = null;

const startSlideshow = () => {
  intervalId = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % testimonials.length;
  }, 5000); // Change slide every 5 seconds
};

const stopSlideshow = () => {
  clearInterval(intervalId);
};

onMounted(() => {
  startSlideshow();
});

onBeforeUnmount(() => {
  stopSlideshow();
});
</script>

<template>
  <div
    class="w-full h-auto lg:h-[60vh] lg:px-24 px-4 py-6 md:py-8 flex flex-col items-center justify-center text-white bg-neutral-950"
  >
    <h2 class="lg:text-5xl text-3xl font-bold pb-2 mb-8 text-left">
      Testimonials
    </h2>
    <Card class="w-full lg:w-2/4 h-auto rounded-lg bg-neutral-800">
      <template #content>
        <div
          class="flex flex-col text-center items-center justify-center lg:px-16 py-8"
        >
          <div>
            <Avatar
              :image="testimonials[currentIndex].avatar"
              class="custom-avatar ring-4 mb-6"
              size="xlarge"
              shape="circle"
            />
          </div>
          <div>
            <p
              class="m-0 italic"
              v-html="testimonials[currentIndex].content"
            ></p>
            <p class="mt-4 mb-2">
              <span class="font-bold text-xl"
                >{{ testimonials[currentIndex].name }}
              </span>
            </p>
            <p class="text-base">{{ testimonials[currentIndex].title }}</p>
          </div>
        </div>
      </template>
    </Card>
    <!-- Pagination Dots -->
    <div class="flex items-center justify-center mt-4 space-x-2">
      <div 
        v-for="(testimonial, index) in testimonials" 
        :key="index" 
        @click="currentIndex = index" 
        :class="{'bg-white': currentIndex === index, 'bg-gray-500': currentIndex !== index}"
        class="w-3 h-3 rounded-full cursor-pointer transition-colors duration-300"
      ></div>
    </div>
  </div>
</template>
<style scoped>
.custom-avatar {
  width: 100px;
  height: 100px;
}
</style>
