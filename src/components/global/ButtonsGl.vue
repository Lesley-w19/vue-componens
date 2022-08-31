<script>
export default {
  data() {
    return {
      message: "This is a global message",
    };
  },
  methods: {
    success() {
      alert(this.message);
    },
  },
};
</script>
<template>
  <div>
    <button class="btn btn-color" @click="success(message)">
      Global button
    </button>
  </div>
</template>
