<template>
  <div class="container vh-100">
    <h1>Nada para ver aqui</h1>
    <a href="/login">Click aqui para fazer o login</a>
  </div>
</template>
<script>
export default {};
</script>
<style scoped lang="scss">
.container {
  display: grid;
  justify-items: center;
  align-content: center;
  background: #ccc;
  grid-gap: 1rem;
}

a {
  padding: 1rem;
  background: rgb(26, 72, 156);
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
  &:hover {
    background: rgba(26, 72, 156, 0.9);
  }
}

.vh-100 {
  height: 100vh;
}
</style>
