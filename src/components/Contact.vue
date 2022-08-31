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
      link: "https://images.pexels.com/photos/11035366/pexels-photo-11035366.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
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
.contact-info {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
img {
  width: 400px;
  height: 400px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
}
img:hover {
  box-shadow: 10px 10px 10px rgba(223, 14, 14, 0.679);
}
.form-info {
  text-align: start;
}
.form-info h2 {
  margin-bottom: 20px;
}
</style>
