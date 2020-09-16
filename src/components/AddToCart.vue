<template>
  <div class="addto-cart">
        <button href="#" class="btn btn-primary">Add to Cart</button>
  </div>
</template>

<script>
export default {
  name: "addto-cart",
  props: {
    id: String,
    name: String,
    price: String,
  },
  data(){
      return {
          prdId: this.id,
          prdName: this.name,
          prdPrice: this.price
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
