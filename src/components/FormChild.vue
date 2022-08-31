<template>
  <div class="field">
    <div class="control">
      <input
        class="input"
        type="text"
        placeholder="Enter your profession"
        @input="info"
      />
    </div>
  </div>
</template>


<script>
export default {
  methods: {
    info(event) {
      //emit event - name, description
      this.$emit("addInfo", event.target.value);
    },
  },
};
</script>
