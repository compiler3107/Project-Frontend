<template>
<!-- Navbar -->
<nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
  <!-- Container wrapper -->
  <div class="container-fluid">
    <!-- Toggle button -->
    <a class="navbar-brand " style="color:#ffc107; text-decoration: double;" href="#">TaTshop
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    </a>

    <!-- Collapsible wrapper -->
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <!-- Navbar brand -->
      <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <router-link to="/" class="">
          <a class="nav-link" href="/">Trang chủ <span class="sr-only">(current)</span></a>
        </router-link>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Liên hệ</a>
      </li>
      <li class="nav-item dropdown">
        
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Thương hiệu
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <router-link class="dropdown-item" to ="/Brand/Vivo" >Vivo</router-link>
          <router-link class="dropdown-item" to ="/Brand/APPLE">Apple</router-link>
          <router-link class="dropdown-item" to ="/Brand/Oppo">Oppo</router-link>
          <router-link class="dropdown-item" to ="/Brand/Samsung">Samsung</router-link>
          <router-link class="dropdown-item" to ="/Brand/Realme">Realme</router-link>
          <router-link class="dropdown-item" to ="/Brand/Xiaomi">Xiaomi</router-link>
        </div>
      
      </li>
    </ul>

    <form class="form-inline my-0 my-lg-0">
      
      <input id="search-focus" type="search"  class="form-control search" />
        <button class="my-2 my-sm-0 btn btn-warning buttons" type="submit"><i class="fas fa-search "></i></button>
      
    </form>
      <!-- Left links -->
    </div>
    <!-- Collapsible wrapper -->
      
    <!-- Right elements -->
    <div class="d-flex align-items-center color right-element">
      <!-- Icon -->
      
      <router-link to="/Cart" class="text-reset me-3 " href="#">
        <i class="fas fa-shopping-cart color"></i>
      </router-link>

      
      
      <!-- Avatar -->
      <router-link to="/Login">
        <div class="dropdown item" >
        <div class="dropdown-toggle d-flex align-items-center hidden-arrow color" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         <!-- <img
            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
            class="rounded-circle dropdown-toggle d-flex align-items-center hidden-arrow color"
            height="25"
            alt="Black and White Portrait of a Man"
            loading="lazy"
          /> -->
          <i class="bi bi-person-circle"></i>
          </div>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">Đăng xuất</a>
            <a class="dropdown-item" href="#">Thông tin cá nhân</a>
            <a class="dropdown-item" href="#">Liên hệ</a>
        </div>
      </div>
      </router-link>
      <!-- Notifications -->
      <div class="item">
        <div class=" d-flex align-items-center " >
          <i class="fas fa-bell color"></i>
          <span class="badge rounded-pill badge-notification bg-danger">2</span>
        </div>
        
      </div>
      <div v-if="handelAdmin()" class="item">
        <router-link to ="/Addproduct">
        <div class=" d-flex align-items-center  color" >
          <i class="bi bi-bag-plus-fill"></i>
        </div>
        </router-link>

        
      </div>
    </div>
    <!-- Right elements -->
  </div>
  <!-- Container wrapper -->
</nav>
<!-- Navbar -->

</template>
<style>
  .search{
    border-radius: 15px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    display: relative;
  }
  .buttons{
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    margin-left: -2px;
  }
  .color{
    color: white;
    margin-left: 3%;
  }
  .item{
    margin-left: 25%;
  }
  .right-element{
    margin-right: 4%;
  }

  
</style>
<script>
  import API from '@/services/index.js'
  import { userStore } from '@/stores/userStore.js'
   export default {
        data(){
        return{
            
        }
    },
    setup(){
            const user = userStore()
            return{user}
        },
    methods:{
        handelAdmin(){
          if(this.user.info != null){
            return this.user.info.admin
          }
          return false
        }
    }
}

</script>