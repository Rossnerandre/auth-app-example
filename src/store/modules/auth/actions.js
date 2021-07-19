import axios from 'axios'

export default {
  async login(context, payload) {
    try {
      const response = await axios
        .post(
          "http://auth-api-example.test/api/login",
          {
            email: payload.email,
            password: payload.password,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );

      localStorage.setItem('token', response.data.token);
      context.commit('setUser', {
        token: response.data.token
      });

    } catch (err) {
      throw err;
    }
  },

  async auth(context) {
    const tokenLocal = localStorage.getItem('token');
    try {
      if (tokenLocal) {
        context.commit('setUser', {
          token: tokenLocal
        });
        const response = await axios
          .get("http://auth-api-example.test/api/users", {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: `Bearer ${tokenLocal}`,
            },
          });
        return response.data[0][0];
      }
    } catch (err) {
      if (err.message === 'Request failed with status code 401') {
        context.dispatch('refresh')
      }
      throw err.message
    }
  },
  async refresh() {
    const tokenLocal = localStorage.getItem('token');
    try {
      const response = await axios
        .post(
          "http://auth-api-example.test/api/refresh",
          null,
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: `Bearer ${tokenLocal}`
            },
          }
        );
      localStorage.setItem('token', response.data.refresh_token);
    } catch (err) {
      localStorage.removeItem('token');
    }
  }
}
