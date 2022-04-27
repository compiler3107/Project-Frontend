<template>
    <div>
        <!-- Name input -->
      <div class="form-outline mb-4">
        <input v-model="info.HoTen" type="text" id="registerName" class="form-control" />
        <label class="form-label" for="registerName">Họ và Tên</label>
      </div>

      <!-- Username input -->
      <div class="form-outline mb-4">
        <input v-model="info.username" type="text" id="registerUsername" class="form-control" />
        <label class="form-label" for="registerUsername">Tài khoản</label>
      </div>

      <!-- Email input -->
      <div class="form-outline mb-4">
        <input v-model="info.email" type="email" id="registerEmail" class="form-control" />
        <label class="form-label" for="registerEmail">Email</label>
      </div>
      <!-- Email address -->
      <div class="form-outline mb-4">
        <input v-model="info.address" type="text"  class="form-control" />
        <label class="form-label" >Địa chỉ</label>
      </div>
      <!-- Email address -->
      <div class="form-outline mb-4">
        <input v-model="info.phone" type="text"  class="form-control" />
        <label class="form-label" >Số điện thoại</label>
      </div>

      <div class="d-md-flex justify-content-start align-items-center mb-4 py-2">
        <label class="form-label" >Gender</label>

        <div class="form-check form-check-inline mb-0 me-4">
        
            <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="maleGender"
                value="false"
                v-model="info.gender"
                checked="checked"
            />
            <label class="form-check-label" for="femaleGender">Nữ</label>
        </div>

        <div class="form-check form-check-inline mb-0 me-4">
            <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="maleGender"
                value="true"
                v-model="info.gender"
            />
            <label class="form-check-label" for="maleGender">Nam</label>
        </div>

        </div>
      <!-- Password input -->
      <div class="form-outline mb-4">
        <input v-model="info.password" type="password" id="registerPassword" class="form-control" />
        <label class="form-label" for="registerPassword">Mật khẩu</label>
      </div>

      <!-- Repeat Password input -->
      <div class="form-outline mb-4">
        <input type="password" id="registerRepeatPassword" class="form-control" />
        <label class="form-label" for="registerRepeatPassword">Nhập lại mật khẩu</label>
      </div>
     <!-- Submit button -->
      <button @click='register()' class="btn btn-primary btn-block mb-3">Đăng ký</button>
    </div>
</template>

<script>
import API from '@/services/index.js'
import { userStore } from '@/stores/userStore.js'
export default {
    data(){
    
        return {
            info:{
                username: "",
                password:"",
                HoTen:"",
                email:"",
                address:"",
                phone:"",
                gender:true,
            }
        };
    },
    methods:{
        register(){
            const { username, password, HoTen, email, phone,address } = this.info
            if(!username || !password || !HoTen || !email || !phone || !address ){
                alert("Yêu cầu nhập đầy đủ thông tin")
                
            }
            
            else{
                    API('post','/register',this.info)
                    .then((res)=>{
                      alert("Đăng ký công")
                      this.$router.push('/login')
                }) 
                      .catch ((error)=>{
                        console.log(error);
                } )             
            }
    }
}}
</script>