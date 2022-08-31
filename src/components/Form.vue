<script>
import HeadingVue from "./Heading.vue";
import FormChild from "./FormChild.vue";
export default {
  name: "FormSection",
  data() {
    return {
      form: {
        name: "",
        comments: "",
      },
      link: "https://images.pexels.com/photos/11035366/pexels-photo-11035366.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      profession: "",
    };
  },
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
    FormChild,
  },
  methods: {
    submit() {
      alert("form submitted");
    },
    addChange(pr) {
      this.profession = pr;
    },
  },
};
</script>

<template>
  <div class="contact-container">
    <HeadingVue title="Form example" />
    <div class="contact-info">
      <div class="image-left">
        <img :src="link" alt="imagag" />
      </div>

      <div class="form-info">
        <h2>Enter information</h2>
        <section class="form">
          <div class="field">
            <div class="control">
              <input
                v-model="form.name"
                class="input"
                type="text"
                placeholder="Enter your name"
              />
            </div>
            <div class="control">
              <input
                v-model="form.comments"
                class="input"
                type="text"
                placeholder="Enter your comments"
              />
            </div>
            <button class="btn btn-color" v-on:click="submit()">Submit</button>
          </div>
        </section>
        <div class="column">
          <section class="section" id="results">
            <div class="box">
              <ul>
                <!-- loop through all the `form` properties and show their values -->
                <li v-for="(item, k) in form" :key="k">
                  <strong>{{ k }}:</strong> {{ item }}
                </li>
              </ul>
            </div>
          </section>
        </div>

        <div class="emit">
          <h5>Emitting information form file!</h5>
          <div class="column">
            <section class="section" id="results">
              <form-child @addInfo="addChange" />
              <div class="box">
                <ul>
                  <li>Profession: {{ profession }}</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "../assets/style.scss";
</style>
