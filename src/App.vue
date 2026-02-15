<template>
  <MainLayout>

    <section class="relative">
      <Container>
        <HeroSection />
      </Container>
    </section>

    <Banner />

    <section class="relative">
      <Container>
        <CollectionFramer />
      </Container>
    </section>

    <section class="relative">
      <Container>
        <FaqSection />
      </Container>
    </section>

    <section class="relative">
      <Container>
        <TestimoniSection />
      </Container>
    </section>

    <section class="relative">
      <Container>
        <CtaSection />
      </Container>
    </section>
  </MainLayout>
</template>

<script setup lang="ts">
import Container from "./app/layout/Container.vue";
import MainLayout from "./app/layout/MainLayout.vue";
import Banner from "./features/banner/Banner.vue";
import CollectionFramer from "./features/collection/CollectionFramer.vue";
import CtaSection from "./features/cta/CtaSection.vue";
import FaqSection from "./features/faq/FaqSection.vue";
import HeroSection from "./features/hero/HeroSection.vue";
import TestimoniSection from "./features/testimoni/TestimoniSection.vue";
// import Hero from './features/hero/h.vue';
</script>

<style scoped></style>
