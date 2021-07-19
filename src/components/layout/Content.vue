<template>
  <div class="main">
    <p>{{ user.name }}</p>
  </div>
</template>
<script>
export default {
  props: ["user"],
};
</script>
<style lang="scss">
.main {
  position: absolute;
  background: #ccc;
  right: 0;
  width: calc(100% - 300px);
  height: 100%;
}
</style>
