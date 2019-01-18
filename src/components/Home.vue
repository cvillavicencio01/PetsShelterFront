<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 class="text-xs-center" mt-5>
        <h1>User's home page</h1>
        <h1>Hi {{account.user.firstName}}!</h1>
        <p>You're logged in!!</p>
      </v-flex>
      <v-flex xs12 class="text-xs-center" mt-3>
        <h3>Users from api:</h3>
        <p>This is a user's home page</p>
        <p>
            <v-btn color="primary" @click="logout">Logout</v-btn>
        </p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import { mapState, mapActions } from 'vuex'

  export default {
      computed: {
          ...mapState({ account: state => state.account} )
      },
      created () {
      },
      methods: {
          ...mapActions('users', {}),
          ...mapActions('account',['logout'])
      }
  };
</script>
