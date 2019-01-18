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
                <v-flex v-for="(data,index) in animals" :key="index" xs12 sm5 md2 order-md1 order-sm1 class="text-xs-center">
                  <img :src="data.image" class="img-fluid">
                  <h3 @click="goTodetail(data.imageId)" >{{data.animalTitle}}</h3>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
      </v-flex>

    </v-layout>
  </v-container>
</template>





<script>
export default {
  name: 'home',
  data () {
    return {
      title: 'Home',
      animals:[
      {
        animalTitle:"ABCN",
        image       : require('../assets/images/picture1.jpg'),
        imageId:1
      },
      {
        animalTitle:"KARMA",
        image       : require('../assets/images/picture2.jpg'),
        imageId:2
      },
      {
        animalTitle:"Tino",
        image       : require('../assets/images/picture3.jpg'),
        imageId:3
      },
      {
        animalTitle:"EFG",
        image       : require('../assets/images/picture4.jpg'),
        imageId:4
      },
      {
        animalTitle:"MLI",
        image       : require('../assets/images/picture5.jpg'),
        imageId:5
      },
      {
        animalTitle:"Banans",
        image       : require('../assets/images/picture6.jpg'),
        imageId:6
      },
      {
        animalTitle:"ABCN",
        image       : require('../assets/images/picture7.jpg'),
        imageId:7
      },
      {
        animalTitle:"KARMA",
        image       : require('../assets/images/picture8.jpg'),
        imageId:8
      },
      {
        animalTitle:"Tino",
        image       : require('../assets/images/picture9.jpg'),
        imageId:9
      },
      {
        animalTitle:"EFG",
        image       : require('../assets/images/picture10.jpg'),
        imageId:10
      },
      {
        animalTitle:"MLI",
        image       : require('../assets/images/picture11.jpg'),
        imageId:11
      },
      {
        animalTitle:"Banans",
        image       : require('../assets/images/picture12.jpg'),
        imageId:12
      },
      {
        animalTitle:"KARMA",
        image       : require('../assets/images/picture13.jpg'),
        imageId:13
      },
      {
        animalTitle:"Tino",
        image       : require('../assets/images/picture14.jpg'),
        imageId:14
      },
      {
        animalTitle:"EFG",
        image       : require('../assets/images/picture15.jpg'),
        imageId:15
      },
      {
        animalTitle:"MLI",
        image       : require('../assets/images/picture16.jpg'),
        imageId:16
      },
      {
        animalTitle:"Banans",
        image       : require('../assets/images/picture17.jpg'),
        imageId:17
      },
      {
        animalTitle:"ABCN",
        image       : require('../assets/images/picture18.jpg'),
        imageId:18
      },
      {
        animalTitle:"KARMA",
        image       : require('../assets/images/picture19.jpg'),
        imageId:19
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

/* Set the size of the div element that contains the map */
#map {
 height: 400px;  /* The height is 400 pixels */
 width: 100%;  /* The width is the width of the web page */
}

.row img{
  max-height: 9em;
  width: 100%;
}
.row h3{
  cursor:pointer;
}
</style>
