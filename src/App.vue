<template>
  <img :src="getLogo()" @click="toggleLogo">
</template>

<script>
export default {
  data() {
    return {
      logoInvert: false
    };
  },
  methods: {
    toggleLogo() {
      this.logoInvert = !this.logoInvert;
    },
    getLogo() {
      const fileName = this.logoInvert ? "logo-invert" : "logo";
      return require(`./assets/${fileName}.png`);
    }
  }
};
</script>
