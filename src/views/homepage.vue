<template> 
<div>
  <div class="container">
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100" src="https://cdn.tgdd.vn/2022/04/banner/A73-720-220-720x220-2.png" alt="First slide">
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="https://cdn.tgdd.vn/2022/04/banner/reno7-720-220-720x220-3.png" alt="Second slide">
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="https://cdn.tgdd.vn/2022/04/banner/720-220-720x220-157.png" alt="Third slide">
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>

    
    </div>

  </div>

  <div class="space container">
    <div class="title ">
      <h4>SẢN PHẨM MỚI</h4>
    </div>
    <div class="container-pd container">
      {{getContactAPI10()}}
      <Card class="card" v-for="item in product.list " :key='item.name' :product='item'/>
    </div>
    

  </div>
  <div class="space container">
    <div class="title ">
      <h4>SẢN PHẨM NỔI BẬT</h4>
    </div>
    <div class="container-pd container">
      <Card class="card" v-for="item in product.list " :key='item.name' :product='item'/>
    </div>
    

  </div>
  <div class="space container">
    <div class="title ">
      <h4>SẢN PHẨM SIÊU KHUYẾN MÃI</h4>
    </div>
    <div class="container-pd container">
      <Card class="card" v-for="item in product.list " :key='item.name' :product='item'/>
    </div>
    

  </div>
  
  

  
</div>
</template>
<script>
    // import { userStore } from '@/stores/userStore.js'
    import API from '@/services/index.js'
    import { productStore } from '@/stores/productStore.js'
    import Card from '@/components/card.vue'
    export default {
        setup(){
            const product = productStore()
            return{product}
        },
        components:{
          Card,
        },
        methods:{
            getContactAPI(){
                API('get','/',null)
                .then((res)=>{
                    this.product.list=res.data
                }).catch((err)=>{
                    console.log(err.response.data)
                })
            },
            getContactAPI10(){
                API('get','/impressiveproduct',null)
                .then((res)=>{
                    this.product.list=res.data
                }).catch((err)=>{
                    console.log(err.response.data)
                })
            }
        }
    }
</script>
<style scoped>

  .container-pd{
    /* display: flex;
    flex-wrap: wrap; */
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 1%;
    background-color: #FFC107;
    align-items: center;
    justify-items: center;
    /* padding: 10px; */
  }
  .title{
    background-color: #FFC107;
    margin-bottom: -0.5%;
    height: 40px;
    text-align: center;
  }
  .space{
    margin-top: 1%;
    margin-bottom: 1%;
    background-color: #FFC107;
    border-radius: 15px;
    
  }
  .card{
    height: 95%;
    widows: 100%;
  }
  h4{
    /* padding: 5px; */
    min-width: 25%;
    margin:0 auto;
    background-color: #343a40;
    border-bottom-left-radius: 45px;
    border-bottom-right-radius: 45px;
    color: white;
    max-width: 40%;
    font-size: 135%;
  }
  .brand{
    height: 20%;
    background-color: #343a40;
  }
</style>