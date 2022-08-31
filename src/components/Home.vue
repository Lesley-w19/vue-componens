<script>
import Topics from "./Topics.vue";
import Form from "./Form.vue";
import Heading from "./Heading.vue";
import Slot from "./Slot.vue";
import SlotChild from "./SlotChild.vue";

export default {
  name: "HomePage",

  data() {
    return {
      subTopics: [
        { name: "Reusing Components", id: 1 },
        { name: "Organising Componentsne", id: 9 },
        { name: "Components within component", id: 20 },
        { name: "Slots", id: 16 },
        { name: "Passing Data to Child Components with Props", id: 4 },
        { name: "Sending Messages to Parents with Events", id: 28 },
        { name: "A Single Root Element", id: 14 },
        { name: "Single File Components", id: 1 },
      ],
      selectedComponent: "Slot",
      active: false,
    };
  },
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  components: {
    SlotChild,
    Slot,
    Form,
    Topics,
    Heading,
  },
};
</script>

<template>
  <div class="component-wrapper">
    <Heading v-bind:title="title" />
    <div class="intro-wrapper">
      <h3>
        Vue JS is a single-page application framework written in JavaScript
        (SPAs). Components in Vue.js are Vue objects that can be reused and have
        custom HTML elements. Components can be reused as many times as desired
        or used as a child component in another component. We can use data,
        computed, watch, and methods in a Vue component.
      </h3>

      <a
        href="https://www.freecodecamp.org/news/vue-js-components-an-interactive-guide-1b8149ecc254"
        class="link-header"
      >
        <button class="btn btn-color">Read more</button>
      </a>
    </div>

    <div class="dynamic-components">
      <!-- <h2>About section</h2> -->
      <button
        @click="selectedComponent = 'SlotChild'"
        class="btn btn-about"
        :class="{ active: 'active-btn' }"
      >
        Topics section
      </button>
      <button
        @click="selectedComponent = 'Slot'"
        class="btn btn-about"
        :class="{ active: 'active-btn' }"
      >
        Slot section
      </button>
      <button
        @click="
          selectedComponent = 'Form';
          active = true;
        "
        class="btn btn-about"
        :class="{ active: 'active-btn' }"
      >
        Form section
      </button>
      <hr />

      <!-- Binding the current component to the property  -->
      <component :is="selectedComponent"></component>
    </div>

    <div class="sub-topics-child">
      <h3>The various sub-topics covered on VueJs Components include:</h3>
      <div class="sub-topics">
        <SlotChild
          v-for="(topic, index) in subTopics"
          :key="topic.id"
          :index="index"
          :topicsArray="subTopics.map((tp) => tp.name)"
        />
      </div>
    </div>
    <div class="global-button">
      <button-message />
    </div>
  </div>
</template>

<style lang="scss">
@import "../assets/style.scss";
</style>
