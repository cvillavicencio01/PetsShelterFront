<template>
  <v-app>
    <v-navigation-drawer v-model="sidebar" app>
      <v-list>
        <v-list-tile
        v-for="item in menuItems"
        :key="item.title"
        :to="item.path">
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>{{ item.title }}</v-list-tile-content>
      </v-list-tile>
      <v-list-tile v-if="isAuthenticated" @click="logout">
  <v-list-tile-action>
    <v-icon>exit_to_app</v-icon>
  </v-list-tile-action>
  <v-list-tile-content>Sign Out</v-list-tile-content>
</v-list-tile>
    </v-list>
  </v-navigation-drawer>

  <v-toolbar app>
    <span class="hidden-sm-and-up">
      <v-toolbar-side-icon @click="sidebar = !sidebar">
      </v-toolbar-side-icon>
    </span>

    <v-toolbar-title class="headline text-uppercase">
      <router-link to="/" tag="span" style="cursor: pointer">
        {{ appTitle }}
      </router-link>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-toolbar-items class="hidden-xs-only">
      <v-btn flat v-for="item in menuItems" :key="item.title" :to="item.path">
        <v-icon left dark>{{ item.icon }}</v-icon>
        {{ item.title }}
      </v-btn>
      <v-btn flat v-if="isAuthenticated" @click="logout">
      <v-icon left>exit_to_app</v-icon>
        Sign Out
      </v-btn>
    </v-toolbar-items>

  </v-toolbar>

  <v-content>
    <div v-if="alert.message" :class="`alert ${alert.type}`">{{alert.message}}</div>
    <router-view></router-view>
  </v-content>

</v-app>
</template>

<script>

  import { mapState, mapActions } from 'vuex'

  export default {
      name: 'app',
      components: {
      },
      data () {
        return {
          appTitle: 'Pets Shelter',
          sidebar:false
        }
      },
      computed: {
          ...mapState({ alert: state => state.alert }),
          ...mapState('account', ['status']),
          isAuthenticated() {
            return this.status.loggedIn;
          },
          menuItems () {
            if (this.isAuthenticated) {
              return [
                { title: 'Home', path: '/', icon: 'home' },
                { title: 'Account', path: '/account', icon: 'account_box' }
              ]
            } else {
              return [
                { title: 'Home', path: '/', icon: 'home' },
                { title: 'Sign Up', path: '/signup', icon: 'face' },
                { title: 'Sign In', path: '/signin', icon: 'lock_open' }
              ]
            }
          }
      },
      methods: {
          ...mapActions({clearAlert: 'alert/clear'}),
          ...mapActions('account',['logout'])
      },
      watch: {
          $route (to, from){
              // clear alert on location change
              this.clearAlert();
          }
      }
  };

</script>
