<template>
  <v-container fluid>
    <v-layout row wrap>

      <v-flex xs12 class="text-xs-center" mt-5>
        <h1>Pets Shelter App</h1>
      </v-flex>
      <v-flex xs12 sm6 offset-sm3 mt-3>
        <blockquote class="blockquote text-xs-center">
          Help our Pets <br>
          Be a good person!
        </blockquote>
      </v-flex>


      <v-flex >
          <v-card>
            <v-container fluid grid-list-sm>
              <v-layout row wrap>
                <v-flex v-for="(data,index) in products" :key="index" xs12 sm6 md3 order-md1 order-sm1 class="text-xs-center">
                  <img :src="data.image" class="img-fluid">
                  <h3 @click="goTodetail(data.productId)" >{{data.productTitle}}</h3>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
      </v-flex>

    </v-layout>
  </v-container>
</template>


<!--
<script>

export default {
}
</script>-->


<script>
export default {
  name: 'home',
  data () {
    return {
      title: 'Home',
      products:[
      {
        productTitle:"ABCN",
        image       : require('../assets/images/product1.png'),
        productId:1
      },
      {
        productTitle:"KARMA",
        image       : require('../assets/images/product2.png'),
        productId:2
      },
      {
        productTitle:"Tino",
        image       : require('../assets/images/product3.png'),
        productId:3
      },
      {
        productTitle:"EFG",
        image       : require('../assets/images/product4.png'),
        productId:4
      },
      {
        productTitle:"MLI",
        image       : require('../assets/images/product5.png'),
        productId:5
      },
      {
        productTitle:"Banans",
        image       : require('../assets/images/product6.png'),
        productId:6
      },
      {
        productTitle:"ABCN",
        image       : require('../assets/images/product1.png'),
        productId:7
      },
      {
        productTitle:"KARMA",
        image       : require('../assets/images/product2.png'),
        productId:8
      },
      {
        productTitle:"Tino",
        image       : require('../assets/images/product3.png'),
        productId:9
      },
      {
        productTitle:"EFG",
        image       : require('../assets/images/product4.png'),
        productId:10
      },
      {
        productTitle:"MLI",
        image       : require('../assets/images/product5.png'),
        productId:11
      },
      {
        productTitle:"Banans",
        image       : require('../assets/images/product6.png'),
        productId:12
      },
      {
        productTitle:"KARMA",
        image       : require('../assets/images/product2.png'),
        productId:13
      },
      {
        productTitle:"Tino",
        image       : require('../assets/images/product3.png'),
        productId:14
      },
      {
        productTitle:"EFG",
        image       : require('../assets/images/product4.png'),
        productId:15
      },
      {
        productTitle:"MLI",
        image       : require('../assets/images/product5.png'),
        productId:16
      },
      {
        productTitle:"Banans",
        image       : require('../assets/images/product6.png'),
        productId:17
      },
      {
        productTitle:"ABCN",
        image       : require('../assets/images/product1.png'),
        productId:18
      },
      {
        productTitle:"KARMA",
        image       : require('../assets/images/product2.png'),
        productId:19
      }
      ]
    }
  },
  methods:{
    goTodetail(prodId) {
      let proId=prodId;
      this.$router.push({name:'details',params:{Pid:proId}});
    }
  }
}
</script>

<style scoped>
.row img{
  max-height: 9em;
  width: 100%;
}
.row h3{
  cursor:pointer;
}
</style>
