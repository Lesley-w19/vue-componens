<script>
import HeadingVue from "./Heading.vue";
import buttonHelper from "./Buttons.vue";
export default {
  name: "BlogPage",
  components: {
    HeadingVue,
    "button-helper": buttonHelper,
  },
};
</script>

<template>
  <div class="blog-container">
    <HeadingVue title="Slot implementation" :class="white" />

    <!-- implementation of slots -->
    <div id="buttons-wrapper">
      <button-helper>
        <button type="button" class="Red">Red</button>
        <button type="button" class="Green">Green</button>
        <button type="button" class="Blue">Blue</button>
      </button-helper>
    </div>
  </div>
</template>

<style lang="css">
.blog-container {
  padding: 40px 30px;

  text-align: center;
}
.white {
  color: #fff;
}
.Red {
  width: 120px;
  height: 50px;
  margin: 50px;
  padding: 10px;
  background-color: red;
  border: none;
  text-align: center;
  cursor: pointer;
}
.Green {
  width: 120px;
  height: 50px;
  margin: 50px;
  padding: 10px;
  background-color: Green;
  border: none;

  text-align: center;
  cursor: pointer;
}
.Blue {
  width: 120px;
  height: 50px;
  margin: 50px;
  padding: 10px;
  background-color: blue;
  border: none;
  text-align: center;
  cursor: pointer;
}
button {
  transition: all 0.4s ease-in-out;
}
button:hover {
  color: #fff;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.221);
  border-radius: 10px;
}
</style>
