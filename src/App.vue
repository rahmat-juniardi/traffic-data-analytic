<script lang="ts">
import { defineAsyncComponent } from "vue";
import { Component, Vue } from "vue-facing-decorator";

@Component
export default class App extends Vue {
  get isLoggedIn() {
    return this.$store.state.auth.loggedIn;
  }

  get mainComponent() {
    return this.isLoggedIn
        ? defineAsyncComponent(() => import("./pages/Layout.vue"))
        : defineAsyncComponent(() => import("./pages/Login.vue"));
  }

  mounted() {
    this.$store.dispatch("initAuth");
  }

  notify(title: string, text: string, type: string, duration: number = 800) {
    this.$notify({ type, title, text, duration });
  }
}
</script>

<template>
  <notifications position="top right" />
  <component :is="mainComponent" />
</template>
