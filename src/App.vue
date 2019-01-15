<template>
  <v-app>
    <v-navigation-drawer v-model="sidebar" app>
    </v-navigation-drawer>

    <v-toolbar app>
      <span class="hidden-sm-and-up">
            <v-toolbar-side-icon @click="sidebar = !sidebar">
            </v-toolbar-side-icon>
      </span>

      <v-toolbar-title class="headline text-uppercase">
        <span class="font-weight-light">{{ appTitle }}</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items>
      <v-btn flat>Link One</v-btn>
      <v-btn flat>Link Two</v-btn>
      <v-btn flat>Link Three</v-btn>
    </v-toolbar-items>

    </v-toolbar>

    <v-content>
      <router-view></router-view>
      <!--<HelloWorld/>-->
    </v-content>
  </v-app>
</template>

<script>


  export default {
    name: 'App',
    components: {
    },
    data () {
      return {
        appTitle: 'Awesome App',
        sidebar:false
      }
    }
  }


  /*import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
      //
    }
  }
}*/
</script>
