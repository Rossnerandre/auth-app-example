<template>
  <spinner v-if="loading" />
  <div class="display-flex">
    <div><sidebar /></div>
    <div>
      <conteudo-base :user="user">
        <template v-slot:header> <h1>Proprietários</h1> </template>
        <button>Add proprietario</button>
        
      </conteudo-base>
    </div>
  </div>
</template>
<script>
export default {
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

.table {
  border: 1px solid;
}
</style>
