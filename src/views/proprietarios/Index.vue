<template>
  <spinner v-if="loading" />
  <div>
    <conteudo-base :user="user">
      <template v-slot:header> <h1>Proprietários</h1> </template>
      <div>
        <label for="" class="form-label">asdasd</label>
        <input type="text" class="" />
      </div>

      <base-card :col="'col-4'" :color="'black-dark'">
        <template v-slot:cabecalho> Novo proprietário </template>
        <div class="">
          <form action="" @submit.prevent="handleSubmit" class="">
            <div class="my-3 form-group">
              <label class="float-label">Nome</label>
              <input
                type="text"
                class="form-control"
                @focus="handle"
                @blur="handle2"
                v-model="proprietario.name"
              />
            </div>
            <div class="mt-4 form-group">
              <label class="float-label">Endereço</label>
              <input
                type="text"
                class="form-control"
                @focus="handle"
                @blur="handle2"
                v-model="proprietario.endereco"
              />
            </div>
            <div class="mt-4 form-group">
              <label class="float-label">CPF</label>
              <input
                type="text"
                class="form-control"
                @focus="handle"
                @blur="handle2"
                v-model="proprietario.cpf"
              />
            </div>
            <div class="mt-4 form-group">
              <label class="float-label">Email</label>
              <input
                type="text"
                class="form-control"
                @focus="handle"
                @blur="handle2"
                v-model="proprietario.email"
              />
            </div>
            <div class="mt-4 form-group">
              <label class="float-label">Telefone 1</label>
              <input
                type="text"
                class="form-control"
                @focus="handle"
                @blur="handle2"
                v-model="proprietario.telefone1"
              />
            </div>
            <div class="mt-4 form-group">
              <label class="float-label">Telefone 2</label>
              <input
                type="text"
                class="form-control"
                @focus="handle"
                @blur="handle2"
                v-model="proprietario.telefone2"
              />
            </div>
            <div class="mt-4 form-group">
              <label class="float-label">Telefone 3</label>
              <input
                type="text"
                class="form-control"
                @focus="handle"
                @blur="handle2"
                v-model="proprietario.telefone3"
              />
            </div>
            <base-button :color="'btn-primary-main'" class="my-3"
              >Salvar</base-button
            >
          </form>
        </div>
      </base-card>
      <base-card :col="'col-3'" :color="'black-main'">
        <template v-slot:cabecalho> TITULO </template>
        <div>CARD</div>
      </base-card>
      <base-card :col="'col-8'" :color="'black-light'">
        <template v-slot:cabecalho> TITULO </template>
        <div>CARD</div>
      </base-card>
      <base-card :col="'col-3'" :color="'success-dark'">
        <template v-slot:cabecalho> TITULO </template>
        <div>CARD</div>
      </base-card>
    </conteudo-base>
  </div>
</template>
<script>
import BaseButton from "../../components/ui/BaseButton.vue";
import BaseCard from "../../components/ui/BaseCard.vue";
export default {
  components: { BaseButton, BaseCard },
  data() {
    return {
      user: [],
      proprietario: {
        name: "",
        endereco: "",
        cpf: "",
        email: "",
        telefone1: "",
        telefone2: "",
        telefone3: "",
      },
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
    handle(e) {
      // e.target.previousElementSibling;
      const teste = e.target.previousElementSibling;
      // const teste = document.querySelector(".form-group");
      // console.log(teste);
      teste.style.marginTop = "-1.7rem";
    },
    handle2(e) {
      const teste = e.target.previousElementSibling;
      if (!e.target.value) {
        teste.style.marginTop = "0";
        console.log(e.target.value);
      }
    },
    handleSubmit() {
      console.log(this.proprietario.name);
      console.log(this.proprietario.endereco);
      console.log(this.proprietario.cpf);
      console.log(this.proprietario.email);
      console.log(this.proprietario.telefone1);
      console.log(this.proprietario.telefone2);
      console.log(this.proprietario.telefone3);
    },
  },
  mounted() {
    this.auth();
  },
};
</script>
<style lang="scss">
.form-group {
  position: relative;
}
.float-label {
  position: absolute;
  // margin-top: -1rem;
  // margin-top: 11px;
  top: 10px;
  left: 10px;
  font-size: 14px;
  color: #555;
}
.form-label {
  display: block;
  margin-bottom: 0.25rem !important;
}
.form-control {
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
</style>
