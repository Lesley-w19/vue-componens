<script>
export default {
  name: "AboutComponent",
  props: ["topicsArray", "index"],
};
</script>

<template>

  <div class="about-wrapper">
    <div class="list-wrapper">
      <ul>
        <!-- <li>Sub topic name: {{ topics-array[index] }}</li> -->
        <li>{{ topicsArray[index] }}</li>
        <!-- <li>new things</li> -->
      </ul>
      <!-- <div>Index: {{ key }}</div> -->
      <!-- <div>Topics: {{ topics-array }}</div> -->
    </div>
  </div>
</template>

<style lang="scss">
@import "./style.scss";
</style>
