<template>
    <div>
        <!-- Email input -->
      <div class="form-outline mb-4">
        <input v-model="profile.username" type="text" id="loginName" class="form-control" />
        <label class="form-label" for="loginName">Tên tài khoản</label>
      </div>

      <!-- Password input -->
      <div class="form-outline mb-4">
        <input v-model="profile.password" type="password" id="loginPassword" class="form-control" />
        <label class="form-label" for="loginPassword">Mật khẩu</label>
      </div>

      <!-- 2 column grid layout -->
      <div class="row mb-4">
        <div class="col-md-6 d-flex justify-content-center">
          <!-- Checkbox -->
          <div class="form-check mb-3 mb-md-0">
            <input class="form-check-input" type="checkbox" value="" id="loginCheck" checked />
            <label class="form-check-label" for="loginCheck"> Lưu tài khoản </label>
          </div>
        </div>

        <div class="col-md-6 d-flex justify-content-center">
          <!-- Simple link -->
          <a href="#!">Quên mật khẩu?</a>
        </div>
      </div>

      <!-- Submit button -->
      <button @click='loginform()' class="btn btn-primary btn-block mb-4">Đăng nhập</button>

      <!-- Register buttons -->
      <div class="text-center">
        <p>Chưa có tài khoản? <a href="#!">Đăng ký</a></p>
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
