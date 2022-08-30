<script>
import HeadingVue from "./Heading.vue";
export default {
  name: "ContactPage",
  props: [
    // the types of props
    "title",
    "age",
    "isCompleted",
    "bookList",
    "author",
  ],
  components: {
    HeadingVue,
  },
};
</script>

<template>
  <div class="contact-container">
    <HeadingVue title="Contact Page" />
  </div>
</template>

<style lang="css">
.contact-container {
  padding: 40px 30px;

  text-align: center;
}
</style>
