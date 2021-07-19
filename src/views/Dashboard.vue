<template>
  <spinner v-if="loading" />
  <div class="display-flex">
    <div><sidebar /></div>
    <div><content :user="user" /></div>
  </div>
  <!-- <div v-if="user">{{ user.id }}</div>
  <div v-if="user">{{ user.name }}</div>
  <div v-if="user">{{ user.email }}</div> -->
</template>
<script>
import Sidebar from "../components/layout/SideBar.vue";
import Content from "../components/layout/Content.vue";
import Spinner from "../components/modals/Spinner.vue";

export default {
  components: { Sidebar, Content, Spinner },

  data() {
    return {
      user: [],
      loading: false,
    };
  },
  methods: {
    async auth() {
      try {
        this.loading = true;
        this.user = await this.$store.dispatch("auth");
        this.loading = false;
      } catch (err) {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          this.$router.go("/dashboard");
        }, 3000);
        console.log(err);
      }
    },
  },
  mounted() {
    this.auth();
  },
};
</script>
<style lang="scss">
.display-flex {
  display: flex;
}
</style>
