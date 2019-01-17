<template>
  <v-container fluid>
    <v-layout row wrap>


      <form  @submit.prevent="handleSubmit" method="post" enctype="multipart/form-data">

        <v-flex>
          <v-text-field
            name="name"
            label="name"
            id="name"
            type="name"
            v-model="pet.name"
            required></v-text-field>
        </v-flex>

        <v-flex>
          <v-text-field
            name="specie"
            label="specie"
            id="specie"
            type="specie"
            v-model="pet.specie"
            required></v-text-field>
        </v-flex>

        <v-flex>
          <v-text-field
            name="status"
            label="status"
            id="status"
            type="status"
            v-model="pet.status"
            required></v-text-field>
        </v-flex>


        <v-flex xs12 class="text-xs-center text-sm-center text-md-center text-lg-center">
          <img :src="imageUrl" height="150" v-if="imageUrl"/>
          <v-text-field label="Select Image" @click='pickFile' v-model='imageName' prepend-icon='attach_file'></v-text-field>
          <input type="file" style="display: none" ref="image" accept="image/*" @change="onFilePicked">
        </v-flex>

        <v-flex class="text-xs-center" mt-5>
          <v-btn color="primary" type="submit">Create</v-btn>
        </v-flex>

      </form>

    </v-layout>
  </v-container>
</template>


<script>

  import { mapState, mapActions } from 'vuex'

  export default {
      data () {
          return {
            pet:{
              name: '',
              specie: '',
              status: ''
            },
            imageName: '',
            imageUrl: '',
            imageFile: ''
          }
      },
      computed: {

      },
      methods: {
        pickFile () {
            this.$refs.image.click ()
        },
    		onFilePicked (e) {
    			const files = e.target.files
    			if(files[0] !== undefined) {
    				this.imageName = files[0].name
    				if(this.imageName.lastIndexOf('.') <= 0) {
    					return
    				}
    				const fr = new FileReader ()
    				fr.readAsDataURL(files[0])
    				fr.addEventListener('load', () => {
    					this.imageUrl = fr.result
    					this.imageFile = files[0]
    				})
    			} else {
    				this.imageName = ''
    				this.imageFile = ''
    				this.imageUrl = ''
    			}
    		},
        handleSubmit(e) {
            //this.register(this.user);
        }
      }
  };

</script>
