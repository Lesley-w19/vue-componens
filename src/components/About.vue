<script>
import HeadingVue from "./Heading.vue";

export default {
  name: "AboutPage",
  components: {
    HeadingVue,
  },
};
</script>

<template>
  <div class="about-container">
    <HeadingVue title="About Page" />
  </div>
</template>

<style lang="css">
.about-container {
  padding: 40px 30px;
  text-align: center;
}
</style>
