<template>
  <div id="app">
    <!-- <hello></hello> -->
    <main-guide />
    <br>
    <transition name="side" mode="out-in">
      <router-view class="router-view"/>
    </transition>
  </div>
</template>
<script>
import hello from "./views/Hello";
import MainGuide from "./components/guide/MainGuide";

export default {
  name: "App",
  components: {
    hello,
    MainGuide
  }
};
</script>
<style scoped>


.side-enter-active, .side-leave-active {
  transition: all .8s;
}

.side-enter, .side-leave-to {
  opacity: 0;
  transform: translateY(20%);
}


</style>
