<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 class="text-xs-center" mt-5>
        <h1>Sign In</h1>
      </v-flex>
      <v-flex xs12 sm6 offset-sm3 mt-3>
        <form @submit.prevent="handleSubmit">
          <v-layout column>
            <v-flex>
              <v-text-field
                name="username"
                label="Username"
                id="username"
                type="username"
                v-model="username"
                required></v-text-field>
            </v-flex>
            <v-flex>
              <v-text-field
                name="password"
                label="Password"
                id="password"
                type="password"
                v-model="password"
                required></v-text-field>
            </v-flex>
            <v-flex class="text-xs-center" mt-5>
              <v-btn color="primary" type="submit">Sign In</v-btn>
            </v-flex>
          </v-layout>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

  import { mapState, mapActions } from 'vuex'

  export default {
      data () {
          return {
              username: '',
              password: '',
              submitted: false
          }
      },
      computed: {
          ...mapState('account', ['status'])
      },
      created () {
          //this.logout();
      },
      methods: {
          ...mapActions('account', ['login', 'logout']),
          handleSubmit (e) {
              this.submitted = true;
              const { username, password } = this;
              if (username && password) {
                  this.login({ username, password })
              }
          }
      }
  };

</script>
