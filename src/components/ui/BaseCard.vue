<template>
  <div :class="[col]">
    <div class="cabecalho" :class="[color]">
      <h1><slot name="cabecalho"></slot></h1>
    </div>
    <div class="card-body">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: ["col", "color"],
};
</script>
<style lang="scss" scoped>
.cabecalho {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 8px 8px 0 0;
  padding: 0.25rem 1rem;
}
.card-body {
  padding: 0.5rem 0.75rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background: #ddd;
}
</style>
