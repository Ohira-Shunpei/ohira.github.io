<template>
  <v-container fluid fill-height class="login">
    SAKURA
  <v-form recontainerf="checkForm">
    <v-row>
        <v-text-field
        v-model="email"
        label="Email"
        ></v-text-field>
        <v-text-field
        v-model="password"
        label="Password"
        ></v-text-field>
        <v-btn class="mr-4" @click="signUp">新規登録</v-btn>
    </v-row>
    <v-row>
        <v-text-field
        v-model="email"
        label="Email"
        ></v-text-field>
        <v-text-field
        v-model="password"
        label="Password"
        ></v-text-field>
        <v-btn class="mr-4" @click="signIn">ログイン</v-btn>
    </v-row>
  </v-form>
  </v-container>
</template>


<script>
import axios from "axios";
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      title: "",
      content: "",
      tasks: [],
      comment: "",
      posts: [],
      user: {}
    };
  },
  methods: {
    signUp() {
      axios
        .post("http://localhost:3000/v1/auth", {
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          localStorage.setItem(
            "access-token",
            response.headers["access-token"]
          );
          localStorage.setItem("client", response.headers["client"]);
          localStorage.setItem("uid", response.headers["uid"]);
          this.user = {
            uid: response.headers["uid"],
            "access-token": response.headers["access-token"],
            client: response.headers["client"],
          },
          console.log(this.user),
          this.$store.dispatch('userLogin', this.user)
        });
           this.$store.commit('setMessage', {
          status: false,
        })

        this.$router.push({name: 'Home'})
      
    },
    signIn() {
      console.log(this.email);
      console.log(this.password);
      axios
        .post("http://localhost:3000/v1/auth/sign_in", {
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          console.log(response);
          localStorage.setItem(
            "access-token",
            response.headers["access-token"]
          );
          localStorage.setItem("client", response.headers["client"]);
          localStorage.setItem("uid", response.headers["uid"]);
          this.user = {
            uid: response.headers["uid"],
            "access-token": response.headers["access-token"],
            client: response.headers["client"],
          },
          console.log(this.user),
          this.$store.dispatch('userLogin', this.user)
          this.$store.commit('setMessage', {
          status: false,
        })
          if (this.email == response.headers["uid"]){
            this.$router.push({name: 'Home'})
          }
        });    
    },
    
  },
};
</script>

<style  lang="scss" scoped>
.login {
  font-family: "Arial Rounded MT Bold", "Helvetica Rounded", Arial, sans-serif;
  text-transform: uppercase;
  display: block;
  font-size: 92px;
  color: #f1ebe5;
  text-shadow: 0 8px 9px #c4b59d, 0px -2px 1px #fff;
  font-weight: bold;
  letter-spacing: -4px;
  text-align: center;
  background: linear-gradient(to bottom, #ece4d9 0%,#FF99CC 100%);
  position: absolute;
  padding: 300px 300px;
  top: 45%;
  left: 50%;
  transform: translate(-50%,-50%);
  border-radius: 20px;
}
</style>
