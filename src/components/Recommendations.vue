<script setup>
import Tabs from "primevue/tabs";
import TabList from "primevue/tablist";
import Tab from "primevue/tab";
import TabPanels from "primevue/tabpanels";
import TabPanel from "primevue/tabpanel";
import Card from "primevue/card";
</script>

<template>
     <div class="w-full h-auto lg:h-[60vh] lg:px-24 px-4 py-6 md:py-8 flex flex-col justify-center text-white bg-neutral-950">
       <h2 class="lg:text-5xl text-3xl font-bold pb-2 mb-8 text-left">
         Testimonials
       </h2>
       <Card class="w-full h-auto rounded-lg bg-neutral-800 ">
         <template #content>
          <div class="flex flex-wrap">
           <Tabs value="0">
             <!-- Tab List -->
             <TabList class="flex flex-col lg:flex-row gap-6 lg:gap-4">
               <!-- Tab 1 -->
               <Tab
                 value="0"
                 as="div"
                 class="flex items-center gap-4 p-4 cursor-pointer rounded-lg bg-black hover:bg-neutral-800 transition duration-300"
               >
                 <div class="flex items-center gap-4">
                   <img
                     src="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
                     alt="Ryan Dansie"
                     class="w-10 h-10 lg:w-24 lg:h-24 rounded-full"
                   />
                   <span class="text-lg lg:text-2xl font-bold whitespace-nowrap">
                     Ryan Dansie
                   </span>
                 </div>
               </Tab>
               <!-- Tab 2 -->
               <Tab
                 value="1"
                 as="div"
                 class="flex items-center gap-4 p-4 cursor-pointer rounded-lg bg-black hover:bg-neutral-800 transition duration-300"
               >
                 <div class="flex items-center gap-4">
                   <img
                     src="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
                     alt="Fatou Gaye"
                     class="w-10 h-10 lg:w-24 lg:h-24 rounded-full"
                   />
                   <span class="text-lg lg:text-2xl font-bold whitespace-nowrap">
                     Fatou Gaye
                   </span>
                 </div>
               </Tab>
               <!-- Tab 3 -->
               <Tab v-slot="slotProps" value="2" asChild>
                 <div
                   :class="[
                     'flex items-center gap-4 lg:p-4 cursor-pointer rounded-lg bg-black hover:bg-neutral-800 transition duration-300',
                     slotProps.class,
                   ]"
                   @click="slotProps.onClick"
                   v-bind="slotProps.a11yAttrs"
                 >
                   <div class="flex items-center gap-4">
                     <img
                       src="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
                       alt="Amadu Jallow"
                       class="w-10 h-10 lg:w-24 lg:h-24 rounded-full"
                     />
                     <span class="text-lg lg:text-2xl font-bold whitespace-nowrap">
                       Amadu Jallow
                     </span>
                   </div>
                 </div>
               </Tab>
             </TabList>
             <!-- Tab Panels -->
             <TabPanels class="mt-6">
               <!-- Panel 1 -->
               <TabPanel value="0" as="p" class="text-base lg:text-lg italic">
                 <p class="px-4 lg:px-24 text-xl lg:text-2xl">
                   "I have had the pleasure of working closely with Sheikh Tijan
                   on several projects, and I am impressed by his talent and
                   dedication as both a frontend developer and designer. His
                   ability to seamlessly blend aesthetic design with functional and
                   responsive code is truly exceptional. I also admire his skills
                   in adopting the latest technologies, problem-solving, and
                   teamwork."
                 </p>
               </TabPanel>
               <!-- Panel 2 -->
               <TabPanel value="1" as="p" class="text-base lg:text-lg italic">
                 <p class="px-4 lg:px-24 text-xl lg:text-2xl">
                   "I have had the pleasure of working closely with Sheikh Tijan
                   on several projects, and I am impressed by his talent and
                   dedication as both a frontend developer and designer. His
                   ability to seamlessly blend aesthetic design with functional and
                   responsive code is truly exceptional. I also admire his skills
                   in adopting the latest technologies, problem-solving, and
                   teamwork."
                 </p>
               </TabPanel>
               <!-- Panel 3 -->
               <TabPanel value="2" as="p" class="text-base lg:text-lg italic">
                 <p class="px-4 lg:px-24 text-xl lg:text-2xl">
                   "I have had the pleasure of working closely with Sheikh Tijan
                   on several projects, and I am impressed by his talent and
                   dedication as both a frontend developer and designer. His
                   ability to seamlessly blend aesthetic design with functional and
                   responsive code is truly exceptional. I also admire his skills
                   in adopting the latest technologies, problem-solving, and
                   teamwork."
                 </p>
               </TabPanel>
             </TabPanels>
           </Tabs>
          </div>
         </template>
       </Card>
     </div>
   </template>
   
