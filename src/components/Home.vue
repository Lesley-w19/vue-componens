<script>
import ChildVue from "./Child.vue";
import BlogPage from "./Blog.vue";
import ContactPage from "./Contact.vue";
import AboutPage from "./About.vue";
import HeadingVue from "./Heading.vue";

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
      selectedComponent: "BlogPage",
      active: false,
    };
  },
  props: {
    title: String,
    topics: Array,
  },
  components: {
    ChildVue,
    BlogPage,
    ContactPage,
    AboutPage,
    HeadingVue,
  },
};
</script>

<template>
  <div class="component-wrapper">
    <HeadingVue v-bind:title="title" />
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
        @click="selectedComponent = 'ChildVue'"
        class="btn btn-about"
        :class="{ active: 'active-btn' }"
      >
        Topics section
      </button>
      <button
        @click="selectedComponent = 'BlogPage'"
        class="btn btn-about"
        :class="{ active: 'active-btn' }"
      >
        Blog section
      </button>
      <button
        @click="
          selectedComponent = 'ContactPage';
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
  <ChildVue
        v-for="(topic, index) in subTopics"
        :key="topic.id"
        :index="index"
        :topicsArray="subTopics.map((tp) => tp.name)"
      />
</div>
      
    </div>
  </div>
</template>

<style lang="sass">
@import "./style.scss"
</style>
