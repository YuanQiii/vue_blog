<template>
  <div class="nav">
    <slot />
  </div>
</template>

<script>
export default {
  name: "Guide"
};
</script>

<style scoped>

.nav {
  margin-top: 12px;
  padding: 24px;
  text-align: center;
  background-color: transparent;
}
</style>