<script>
import HeadingVue from "./Heading.vue";
export default {
  name: "ContactPage",
  data() {
    return {
      form: {
        name: "",
        comments: "",
      },
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
  },
};
</script>

<template>
  <div class="contact-container">
    <HeadingVue title="Contact Page" />

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
  </div>
</template>

<style lang="css">
.contact-container {
  padding: 40px 30px;

  text-align: center;
}
ul {
  list-style: none;
  margin-top: 20px;
}
input {
  margin: 5px auto;
  padding: 10px 20px;
}
li {
  margin-bottom: 20px;
  text-transform: capitalize;
}
</style>
