<template>
  <div class="products" id="product-list">
      <div class="container">
          <h1 class="text-center p-5">Our Products List</h1>
          <div class="row">
              
            <div class="col-md-4" v-for="prod in products">
                <div class="card product-item">
                  <carousel :perPage="1">
                    <slide v-for="(image,index) in prod.images">
                      <img :src="image" class="card-img-top" alt="...">
                    </slide>
                  </carousel>
                      <div class="card-body">
                        <div class="d-flex justify-content-between">
                          <h5 class="card-title">{{prod.name}}</h5>
                          <h5 class="card-title">{{prod.price | currency}}</h5>
                        </div>
                          <p class="card-text" v-html="prod.description"></p>
                          <AddToCart 
                            :id="prod.id"
                            :price="prod.price"
                            :name="prod.name"
                            :image="getImage(prod.images)"
                            >
                          </AddToCart>
                      </div>
                  </div>
            </div>

          </div>
      </div>
    
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
import {db} from '../firebase';

export default {
  name: "product-list",
  props: {
    msg: String
  },
  components: {
    Carousel,
    Slide
  },
  data(){
    return {
        products: [],
     
    }
  },
  methods:{
    getImage(images){
      return images[0];
    }
  },
  firestore(){
      return {
        products: db.collection('products'),
      }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .products{
        margin-top: 7rem;
        background: #f2f2f2;
        padding-bottom: 3rem;
    }
</style>