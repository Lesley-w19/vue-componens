<script>
import HeadingVue from "./Heading.vue";
import buttonHelper from "./ButtonsSlots.vue";
export default {
  name: "SlotPage",
  data() {
    return {
      imgDisplay: false,
      link: "https://images.pexels.com/photos/102061/pexels-photo-102061.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      other:
        "https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?auto=compress&cs=tinysrgb&w=800",
    };
  },
  components: {
    HeadingVue,
    "button-helper": buttonHelper,
  },
  methods: {
    showColor(color) {
      alert("Button is color: " + color);
    },
    showImg() {
      this.imgDisplay = !this.imgDisplay;
      console.log("Button is clicked");
    },
  },
};
</script>

<template>
  <div class="blog-container">
    <HeadingVue title="Slot implementation" />

    <div :slot="header">
      <img :src="link" alt="image" v-if="imgDisplay" />
      <img :src="other" alt="image" v-else />
      <div>
        <button class="btn btn-about" @click="showImg()">
          Toggle other image
        </button>
      </div>
    </div>
    <!-- implementation of slots -->
    <div id="buttons-wrapper">
      <button-helper>
        <button type="button" class="Red" @click="showColor('purple')">
          Purple
        </button>
        <button type="button" class="Green" @click="showColor('teal')">
          Teal
        </button>
        <button type="button" class="Blue" @click="showColor('lime')">
          Lime
        </button>
      </button-helper>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.blog-container {
  padding: 40px 30px;
  text-align: center;
}
img {
  width: 200px;
  height: 200px;
}
@mixin button($background) {
  width: 120px;
  height: 50px;
  margin: 50px;
  padding: 10px;
  background-color: $background;
  border: none;
  text-align: center;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
}

@mixin buttonHover {
  color: #fff;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.221);
  border-radius: 10px;
}
.Red {
  @include button(rgb(104, 20, 102));
}
.Green {
  @include button(rgb(20, 104, 101));
}
.Blue {
  @include button(rgb(174, 255, 0));
}
button:hover {
  @include buttonHover;
}
</style>
