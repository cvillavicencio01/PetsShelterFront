<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 class="text-xs-center" mt-5>


        <div class="details">
      		<div class="container">
      			<div class="row">
      				<div class="col-md-12" v-for="(animal,index) in animals" :key="index">
      					<div v-if="proId == animal.imageId">
      						<h1>{{animal.animalTitle}}</h1>
      						<img :src="animal.image" class="img-fluid">
      					</div>
      				</div>
      			</div>
      		</div>
      	</div>


      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
	export default{
		name:'details',
		data(){
			return{
				proId:this.$route.params.Pid,
				title:"details",
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
		}
	}
</script>
