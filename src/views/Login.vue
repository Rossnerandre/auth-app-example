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
      <button>Login</button>
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
          })
          .catch((err) => {
            console.log("asduhasduhdas" + err.message);
          });
      } catch (error) {}

      // const response = test
      //   .then((result) => {
      //     console.log(result);
      //   })
      //   .catch((err) => {
      //     console.log("asduhasduhdas" + err.message);
      //   });
      // console.log(response);
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
  justify-items: center;
  align-items: center;
  height: 100vh;
  background: rgb(107, 107, 207);
}
form {
  width: 350px;
  padding: 0.5rem;
  background: #ccc;
  box-shadow: 0px 0px 0px 5px #000;
  // inset 0px 10px 10px -5px rgba($color: #000000, $alpha: 0.5),
  // inset 0px -10px 10px -5px rgba($color: #000000, $alpha: 0.5);
  // -webkit-box-shadow: 0px 0px 0px 5px #a0a0a0, inset 0px 10px 27px -8px #141414,
  //   inset 0px -10px 27px -8px #141414, 11px 5px 15px 5px rgba(0, 0, 0, 0);
  // box-shadow: 0px 0px 0px 5px #a0a0a0, inset 0px 10px 27px -8px #141414,
  //   inset 0px -10px 27px -8px #a31925, 11px 5px 15px 5px rgba(0, 0, 0, 0);

  border-radius: 8px;

  .form-group {
    display: flex;
    padding: 0.5rem 0;
    flex-direction: column;
    label {
      font-size: 1.4rem;
      color: #000;
    }
    .form-control {
      margin: 0.5rem 0;
      font-size: 1.25rem;
    }
  }
  button {
    font-size: 1.5rem;
    padding: 0.3rem;
  }
}
</style>
