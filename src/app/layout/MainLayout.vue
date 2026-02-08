<template>
  <!-- <div class="min-h-screen flex flex-col">
    <Navbar />
    <main class="flex-grow">
      <Banner/>
      <div class="mx-auto px-4 sm:px-10 lg:px-16">
        <slot />
      </div>
    </main>
    <Footer/>
    <NotFound/>
  </div> -->

  <div class="min-h-screen flex flex-col">
    <Navbar />

    <main class="flex-grow">
      <slot />
    </main>

    <Footer />
    <!-- <NotFound /> -->
  </div>
</template>

<script setup lang="ts">
import Footer from "./footer/Footer.vue";
import Navbar from "./navbar/Navbar.vue";
</script>
