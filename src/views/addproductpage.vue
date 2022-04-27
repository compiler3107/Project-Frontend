<template>
  <section class="h-100 h-custom" style="background-color: #EEE8AA;">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-8 col-xl-6">
        <div class="card rounded-3">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img3.webp" class="w-100" style="border-top-left-radius: .3rem; border-top-right-radius: .3rem;" alt="Sample photo">
          <div class="card-body p-4 p-md-5">
            <h3 class="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Thêm sản phẩm</h3>

            <div class="px-md-2">

              <div class="form-outline mb-4">
                <input v-model="info.name" name="name" type="text" id="form3Example1q" class="form-control" />
                <label class="form-label" for="form3Example1q">Tên sản phẩm</label>
              </div>
              <div class="form-outline mb-4">
               <input v-model="info.discount" name="discount" type="text" id="form3Example1q" class="form-control" />
                <label class="form-label" for="form3Example1q">Giảm giá</label>
              </div>
              <div class="row">
                <div class=" col-md-6 mb-4">
                  <input v-model="info.price" name="price" type="text" id="form3Example1q" class="form-control" />
                  <label class="form-label" for="form3Example1q">Giá tiền</label>
                </div>
                <div class="col-md-6 mb-4">
                  <input v-model="info.newprice" name="newprice" type="text" id="form3Example1q" class="form-control" />
                  <label class="form-label" for="form3Example1q">Giá sau giảm</label>
                </div>
              </div>
              
              <div class="form-outline mb-4">
                <input v-model="info.brand" name="brand"  type="text" id="form3Example1q" class="form-control" />
                <label class="form-label" for="form3Example1q">Thương hiệu</label>
              </div>
              <div class="form-outline mb-4">
                <input  name="image" type="file" id="form3Example1q" class="form-control" @change='previewFiles($event)' multiple/>
                <label class="form-label" for="form3Example1q">Hình ảnh</label>
              </div>
              <div class="form-outline mb-4">
                <input v-model="info.quanlity" name="quanlity" type="text" id="form3Example1q" class="form-control" />
                <label class="form-label" for="form3Example1q">Số lượng</label>
              </div>
              <div class="form-outline mb-4">
                <input v-model="info.discription" name="discription" type="text" id="form3Example1q" class="form-control" />
                <label class="form-label" for="form3Example1q">Mô tả chi tiết</label>
              </div>

              <button  class="btn btn-success btn-lg mb-1"  @click='create()'>Thêm</button>

            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
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
  data() {
        return {
            info:{
                name: "",
                price:"",
                newprice:"",
                discount:"",
                brand:"",
                quanlity:"",
                discription:"",
                image:""
            }
        };
    },
  methods:{
    create(){
            const { name, price, newprice, brand, quanlity,image,discount,discription } = this.info
            if(!name || !price || !brand || !quanlity || !discription || !image ){
                alert("Yêu cầu nhập đầy đủ thông tin")
                
            }
            
            else{
                    API('post','/admin',this.info)
                    .then((res)=>{
                      // this.product.list=res.data
                      alert("Thêm sản phẩm thành công")
                      this.$router.push('/')
                }) 
                      .catch ((error)=>{
                        console.log(error.response.data);
                }   )             
            }

            },
               previewFiles(event) {
                console.log(event.target.files[0]);
                console.log(event.target.files[0].value)
                
                this.info.image="/src/assets/image/"+event.target.files[0].name
            }
}
  }

</script>

<style>

</style>