<script>
export default {
  name: "HeaderComponent",
  props: {
    title: String,
  },
};
</script>

<template>
  <div class="header-wrapper">
    <h1>{{ title }}</h1>
  </div>
</template>

<style lang="scss">
@import "../assets/style.scss";

</style>
