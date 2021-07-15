<template>
  <div class="container">
    <form @submit.prevent="handleForm">
      <div class="form-group">
        <label>Email</label>
        <input type="email" class="form-control" v-model="email" />
      </div>
      <div class="form-group">
        <label>Password</label>
        <input type="password" class="form-control" v-model="password" />
      </div>
      <div class="form-group">
        <button>Login</button>
      </div>
    </form>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async handleForm() {
      try {
        await axios
          .post(
            "http://auth-api-example.test/api/login",
            {
              email: this.email,
              password: this.password,
            },
            {
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
              },
            }
          )
          .then((result) => {
            console.log(result);
            alert("Conexão efetuada token: " + result.data.token);
          })
          .catch((err) => {
            console.log(err.message);
            alert(err.message);
          });
      } catch (error) {}
    },
  },
};
</script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
}
.container {
  display: grid;
  justify-content: center;
  align-content: center;
  height: 100vh;
  background: #eee;
}
form {
  width: 350px;
  padding: 3rem 0.5rem;
  background: #ccc;
  box-shadow: 5px 5px 5px 5px #000;
  border-radius: 2px;

  .form-group {
    display: flex;
    padding: 0.5rem 0;
    flex-direction: column;
    label {
      font-size: 1rem;
      color: #222;
    }
    .form-control {
      margin: 0.5rem 0;
      font-size: 1.25rem;
      padding: 0.5rem;
      border-radius: 3px;
      border: none;
    }
  }
  button {
    font-size: 1.5rem;
    padding: 0.5rem 0;
    border: none;
    cursor: pointer;
    background: #0275d8;
    border-radius: 3px;
    color: #fff;
    &:hover {
      background: rgba($color: #0275d8, $alpha: 0.9);
    }
  }
}
</style>
