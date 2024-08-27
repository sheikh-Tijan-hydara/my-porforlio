<script setup>
import Tabs from "primevue/tabs";
import TabList from "primevue/tablist";
import Tab from "primevue/tab";
import TabPanels from "primevue/tabpanels";
import TabPanel from "primevue/tabpanel";
import Card from "primevue/card";
import Avatar from 'primevue/avatar';
</script>

<template>
  <div
    class="w-full h-auto lg:h-[60vh] lg:px-24 px-4 py-6 md:py-8 flex flex-col justify-center text-white bg-neutral-950"
  >
    <h2 class="lg:text-5xl text-3xl font-bold pb-2 mb-8 text-left">
      Testimonials
    </h2>
    <Card class="w-full h-auto rounded-lg bg-neutral-800">
      <template #content>
        <div class="flex flex-wrap">
          <Tabs value="0">
            <TabList>
              <Tab value="0">
                <Avatar image="/fatou.jpeg" class="mr-2 ring-4" size="xlarge" shape="circle" />
              </Tab>
              <Tab value="1">
                <Avatar image="/fatou.jpeg" class="mr-2 ring-4" size="xlarge" shape="circle" />
              </Tab>
              <Tab value="2">
                <Avatar image="/fatou.jpeg" class="mr-2  ring-4" size="xlarge" shape="circle" />
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel value="0">
                <p class="m-0 italic">
                  I have had the pleasure of working closely with Sheikh Tijan
                  on several and I am impressed by his talent and dedication as
                  both a frontend developer and designer. <br/>His ability to
                  seamlessly blend aesthetic design with functional and
                  responsive code is truly exceptional. I also admire his skills
                  in taking up latest technologies, problem solving and teamwork
                </p>
                <p class="mt-4"><span class="font-bold ">Fatou Gaye</span>, CEO  Wolurek</p>
              </TabPanel>
              <TabPanel value="1">
                <p class="m-0">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt. Consectetur, adipisci velit, sed quia non numquam
                  eius modi.
                </p>
              </TabPanel>
              <TabPanel value="2">
                <p class="m-0">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores et quas molestias excepturi sint occaecati cupiditate
                  non provident, similique sunt in culpa qui officia deserunt
                  mollitia animi, id est laborum et dolorum fuga. Et harum
                  quidem rerum facilis est et expedita distinctio. Nam libero
                  tempore, cum soluta nobis est eligendi optio cumque nihil
                  impedit quo minus.
                </p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </template>
    </Card>
  </div>
</template>
