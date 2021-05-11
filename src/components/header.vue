<template>
  <header>
    <v-app-bar
      app
      dark
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>サービス名</v-toolbar-title>
      <v-tabs
        dark
      >
        <v-tab
          v-for="(menuItem, index) in menuItems"
          :key="index"
          :to="menuItem.url"
        >
          {{ menuItem.name }}
        </v-tab>
        
      </v-tabs>
      
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      temporary
      fixed
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group>
          <v-list-item
            v-for="(menuItem, index) in menuItems"
            :key="index"
            :to="menuItem.url"
          >
            <v-list-item-title>{{ menuItem.name }}</v-list-item-title>
          </v-list-item>
          <v-list-item @click="out">
            <v-list-item-title>
             ログアウト
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </header>
</template>
 
<script>
import constants from '../common/constants'
import axios from "axios";

export default {
  name: 'AppHeader',
  data () {
    return {
      drawer: false,
      menuItems: constants.menuItems
    }
  },
  methods: {
    out() {
        console.log('aaaaaaaaaaa')
        axios
          .delete("http://localhost:3000/v1/auth/sign_out", {
            headers: {
           'access-token': localStorage.getItem('access-token'),
            uid: localStorage.getItem('uid'),
            client: localStorage.getItem('client'),
          },
          })
          .then((response) => {
            console.log(response);
            localStorage.removeItem("uid");
            localStorage.removeItem("access-token");
            localStorage.removeItem("client");
            console.log('ログアウト成功')
            this.$router.push({name: 'Login'})
          });
    }
  }
}
</script>
 
<style lang="scss" scoped>
.v-toolbar__title {
  overflow: visible !important;
  margin-right: 50px !important;
}
@import 'src/styles/common/_mixin.scss';

.v-app-bar__nav-icon {
  @include display_pc {
    display: none !important;
  }
}

.v-tabs {
  display: none;
 
  @include display_pc {
    display: block !important;
  }
}

</style>
 