<template>
<div class="bg" >
    <div class="container form">
            <!-- Pills navs -->
    <ul class="nav nav-pills nav-justified mb-3 margin" id="ex1" role="tablist">
  <li class="nav-item" role="presentation">
    <router-link to="/Loginform" class="nav-link active" >Đăng nhập</router-link>
  </li>
  <li class="nav-item" role="presentation">
    <router-link to ="/Registerform" class="nav-link">Đăng ký</router-link>
  </li>
</ul>
<!-- Pills navs -->

<!-- Pills content -->
<div class="tab-content">
  <div class="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
    <div>
      <div class="text-center mb-3">
        <p>Đăng nhập với:</p>
        <button type="button" class="btn btn-link btn-floating mx-1">
          <i class="fab fa-facebook-f"></i>
        </button>

        <button type="button" class="btn btn-link btn-floating mx-1">
          <i class="fab fa-google"></i>
        </button>

        <button type="button" class="btn btn-link btn-floating mx-1">
          <i class="fab fa-twitter"></i>
        </button>

        <button type="button" class="btn btn-link btn-floating mx-1">
          <i class="fab fa-github"></i>
        </button>
      </div>

      <p class="text-center">Hoặc:</p>
      <router-view></router-view>
    </div>
  </div>
</div>
<!-- Pills content -->
    </div>
</div>
</template>
<script>
import API from '@/services/index.js'
import { userStore } from '@/stores/userStore.js'
export default {
    data(){
        return{
            profile:{username:"",password:""}
        }
    },
    setup(){
            const user = userStore()
            return{user}
        },
    methods:{
        loginform(){
        API('post','/login',this.profile)
        .then((res)=>{
            this.user.info= res.data
            this.$router.push('/')
            console.log(this.user.info)
        }).catch((err)=>{
            console.log(err)
            })
        }
    }
    }
</script>
<style>
    .form{
        width:50%;
        margin-top: 5%;
        margin-bottom: 5%;
        border: solid;
        border-radius: 15px;
    }
    .margin{
        margin-top: 5%;
    }

</style>