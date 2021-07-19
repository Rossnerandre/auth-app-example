<template>
  <div class="navbar">
    <div class="logo">
      <!-- COLOCAR LOGO DA EMPRESA -->
      <div class="empresa">Corretor Maurilio</div>
    </div>
    <div class="navitems">
      <ul>
        <li class="nav-link">
          <router-link to="/dashboard">
            <i class="bi bi-speedometer"></i>
            <span class="title">Dashboard</span></router-link
          >
        </li>
        <li class="nav-subtitle">
          <span>Proprietários</span>
        </li>
        <li>
          <router-link to="/proprietarios">
            <i class="bi bi-person"></i>
            <span class="title">Proprietários</span></router-link
          >
        </li>
        <li class="nav-subtitle">
          <span>Imóveis</span>
        </li>
        <li>
          <router-link to="/imoveis">
            <i class="bi bi-building"></i>
            <span class="title">Imoveis</span></router-link
          >
        </li>
        <li>
          <router-link to="/caracteristicas">
            <i class="bi bi-bug"></i>
            <span class="title">Caracteristicas</span></router-link
          >
        </li>
        <li>
          <router-link to="/tipo">
            <i class="bi bi-bug"></i>
            <span class="title">Tipo</span></router-link
          >
        </li>
        <li class="nav-subtitle">
          <span>BUSCAS</span>
        </li>
        <li>
          <router-link to="/busca">
            <i class="bi bi-search"></i
            ><span class="title">Busca</span></router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.navbar {
  width: 300px;
  height: 100%;
  background: #333;
  transition: 0.5s;
  position: fixed;
  left: 0;
  top: 0;
  color: #fff;
  scrollbar-color: #0a6aa6 #0a2558;
  scrollbar-width: thin;
  overflow: hidden !important;
}
.navbar:hover {
  overflow-y: auto !important;
}
.navbar .logo {
  display: flex;
  width: 300px;
  height: 61px;
  align-items: center;
  padding: 2px 0 2px 0.1rem;
  border-bottom: 1px solid #fff;
}
.navbar .logo img {
  width: 55px;
  height: 55px;
  margin-right: 5px;
  border-radius: 50%;
  object-fit: cover;
}
.navbar .logo a {
  text-decoration: none;
  color: #fff;
  font-size: 2.3rem;
}
.navbar .navitems {
  margin-top: 2rem;
  position: absolute;
}
.navbar .navitems ul {
  list-style: none;
  line-height: 2;
}
.navbar .navitems ul li {
  width: 300px;
  position: relative;
  transition: box-shadow 0.5s;
}
.navbar .navitems ul li:hover,
.navbar .navitems ul li:focus {
  box-shadow: inset 19rem 0 0 0.01px #111;
  border-radius: 0 50px 50px 0 !important;
}
.navbar .navitems ul li a {
  position: relative;
  width: 100%;
  display: flex;
  text-decoration: none;
  color: #fff;
  align-items: center;
}
.navbar .navitems ul li a i {
  position: relative;
  display: block;
  padding: 0 1rem 0 1.5rem;
  font-size: 1.3rem;
}
.navbar .navitems ul li a .title {
  font-size: 1rem;
}
.navbar .navitems ul .router-link-active::before {
  width: 18%;
  height: 100%;
  position: absolute;
  content: "";
  background: #555;
  border-radius: 0px 50px 50px 0px;
}
.navbar .navitems ul .nav-subtitle {
  margin: 1rem 0 1rem 1.5rem;
}
.navbar .navitems ul .nav-subtitle:hover {
  box-shadow: none !important;
}
</style>
