<template>
    <div class="bg-image hover-zoom">
  <img class="card-img-top w-100" :src="item.image" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title"  >{{item.name}}</h5>
  </div>
  <ul class="" style="list-style: none;">
    <li class="price">{{item.price}} vnd</li>
    <li class="discount">{{item.discount}}</li>
    <li class="newprice">{{item.newprice}}</li>
  </ul>
  <div class="card-body">
    <router-link v-if="user.info === null" to="/login">
    
      <i  class="bi bi-cart card-link btn btn-dark"></i>
    </router-link>
    <i v-else @click="addproducttocart(item)" class="bi bi-cart card-link btn btn-dark"></i>
    <a href="#" class="card-link" style="margin-left:5%">Xem chi tiết</a>
  </div>
  
</div>
</template>
<script>
import API from '@/services/index.js'
import { userStore } from '@/stores/userStore.js'
  export default {
    props:['product'],
    data(){
      return{
        item: this.product,
      }
    },
    setup(){
            const user = userStore()
            return{user}
        },
    methods:{
        addproducttocart(item){
                if(!this.user.info){
                    alert("Đăng ký trước khi sử dụng")
                    this.$router.push('/login')
                }else{
                    const { _id,cart } = this.user.info
                    API('put',`/cart/${_id}`,{item})
                    .then((res)=>{
                        this.user.info = res.data
                        alert("Them thanh cong!",this.user.info)
                        localStorage.setItem('user', JSON.stringify(res.data));
                    }).catch((err)=>{
                        alert(err.response.data)
                    })                    
                }
    }
  }
  }
</script>
<style>

  .price{
     color: rgb(0, 0, 0);
    text-decoration-color: rgb(0, 0, 0);
  }
  .newprice{
   
    color: rgb(230, 0, 0);
  }
  .discount{
    color: rgb(62, 85, 157);
  }
</style>