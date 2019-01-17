<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 class="text-xs-center" mt-5>


        <div class="details">
      		<div class="container">
      			<div class="row">
      				<div class="col-md-12" v-for="(product,index) in products" :key="index">
      					<div v-if="proId == product.productId">
      						<h1>{{product.productTitle}}</h1>
      						<img :src="product.image" class="img-fluid">
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
		}

	}
</script>
