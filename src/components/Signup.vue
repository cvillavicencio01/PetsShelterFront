<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 class="text-xs-center" mt-5>
        <h1>Sign Up</h1>
      </v-flex>
      <v-flex xs12 sm6 offset-sm3 mt-3>

        <form @submit.prevent="handleSubmit">
          <v-layout column>
            <v-flex>
              <v-text-field
                name="name"
                label="Name"
                id="name"
                type="name"
                v-model="user.firstName"
                required></v-text-field>
            </v-flex>

            <v-flex>
              <v-text-field
                name="lastname"
                label="Lastname"
                id="lastname"
                type="lastname"
                v-model="user.lastName"
                required></v-text-field>
            </v-flex>


            <v-flex>
              <v-text-field
                name="username"
                label="Username"
                id="username"
                type="username"
                v-model="user.username"
                required></v-text-field>
            </v-flex>

            <v-flex>
              <v-text-field
                name="email"
                label="Email"
                id="email"
                type="email"
                v-model = "user.email"
                required></v-text-field>
            </v-flex>

            <v-flex>
              <v-text-field
                name="password"
                label="Password"
                id="password"
                type="password"
                v-model="user.password"
                required></v-text-field>
            </v-flex>

            <v-flex>
              <v-text-field
                name="confirmPassword"
                label="Confirm Password"
                id="confirmPassword"
                v-model="confirmPassword"
                type="password"
                required
                ></v-text-field>

            </v-flex>
            <v-flex class="text-xs-center" mt-5>
              <v-btn color="primary" type="submit">Sign Up</v-btn>
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
              user: {
                  firstName: '',
                  lastName: '',
                  email: '',
                  username: '',
                  password: ''
              },
              submitted: false
          }
      },
      computed: {
          ...mapState('account', ['status'])
      },
      methods: {
          ...mapActions('account', ['register']),
          handleSubmit(e) {
              this.submitted = true;

                      this.register(this.user);
          }
      }
  };
</script>
