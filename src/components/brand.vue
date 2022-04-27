<template>
    
    <div>
        <div class="space container">
            <div class="title ">
                <h4>{{$route.params.slug}}</h4>{{getContactAPI()}}
            </div>
            <div class="container-pd container">
                <div  v-for='item in getProductFromParams'  :key='item.name'>
                    <Card class="card" v-if="item.brand===$route.params.slug" :product='item'/>
                    
                </div>
            </div>
        </div>
    </div>
    
</template>
<script>
import API from '@/services/index.js'
import { productStore } from "@/stores/productStore"
import Card from '@/components/card.vue'
export default{
    components:{
          Card,
        },
    setup() {
        const product = productStore()
        return{product}
    },
    methods:{
        getContactAPI(){
                API('get','/',null)
                .then((res)=>{
                    this.product.list=res.data
                }).catch((err)=>{
                    console.log(err.response.data)
                })
            }

        
    },
    computed:{
			getProductFromParams(){
				var items = []
				for (var i = 0; i < this.product.list.length; i++) {
					if (this.product.list[i].brand === this.$route.params.slug) {
						items.push(this.product.list[i])
					}
				}
				return items
			}
		}
    
}
</script>
<style>
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