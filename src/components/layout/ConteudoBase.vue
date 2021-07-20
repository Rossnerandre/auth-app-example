<template>
  <div class="main">
    <div class="topbar">
      <h3>{{ user.name }}</h3>
    </div>
    <div class="content">
      <header>
        <slot name="header" class="titulo">
          <h1>Colocar titulo</h1>
        </slot>
      </header>
      <div class="ondeeuto">
        <slot>Add conteudo todo</slot>
      </div>
    </div>
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
  width: calc(100% - 250px);
  height: 100%;
  .topbar {
    height: 60px;
    display: flex;
    justify-content: right;
    align-items: center;
    background: #333;
    h3 {
      padding-right: 1rem;
      color: #fff;
    }
  }
  .content {
    padding: 1rem;
    header {
      h1 {
        padding-bottom: 3rem;
      }
    }
  }
}
.ondeeuto {
  display: flex;
}
</style>
