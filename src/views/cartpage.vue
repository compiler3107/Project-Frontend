<template>
<div>
  <div class="cart_section">
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-10 offset-lg-1">
                <div class="cart_container">
                    <div class="cart_title">Giỏ hàng<small>  </small></div>
                    <!-- Danh sach san pham -->
                    <div v-if="user.info !== null" >
                        <div class="cart_items">
                        <ul class="cart_list" v-for='product in user.info.cart'>
                            <li class="cart_item clearfix">
                                <div class="cart_item_image"><img :src="product.item.image" class="img-sm"/></div>
                                <div class="cart_item_info d-flex flex-md-row flex-column justify-content-between">
                                    <div class="cart_item_name cart_info_col">
                                        <div class="cart_item_title">Tên</div>
                                        <div class="cart_item_text">{{product.item.name}}</div>
                                    </div>
                                    <div class="cart_item_color cart_info_col">
                                        <div class="cart_item_title">Thương hiệu</div>
                                        <div class="cart_item_text"><span style="background-color:#999999;">{{product.item.brand}}</span></div>
                                    </div>
                                    <div class="cart_item_price cart_info_col">
                                        <div class="cart_item_title">Giá tiền</div>
                                        <div class="cart_item_text">{{formatPrice(product.item.price)}}</div>
                                    </div>
                                    <div class="cart_item_price cart_info_col">
                                        <div class="cart_item_title">Giá khuyến mãi</div>
                                        <div class="cart_item_text">{{formatPrice(product.item.newprice)}}</div>
                                    </div>
                                    <span class="btn btn-danger" data-abc="true"  @click='deleteItemInCart(product.item)'>Xóa</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    </div>
                    <div class="order_total">
                        <div class="order_total_content text-md-right">
                            <div class="order_total_title">Tổng thanh toán:</div>
                            <div class="order_total_amount">{{totalPay}} {{formatPrice(countPay)}}</div>
                        </div>
                    </div>
                    <div class="cart_buttons"><router-link to = "/"> <button type="button" class="button cart_button_clear">Trở lại xem sản phẩm</button></router-link> <button type="button" class="button cart_button_checkout">Thanh toán</button> </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>

</template>
<script>
	import { userStore } from '@/stores/userStore.js'
	import { productStore } from '@/stores/productStore.js'
	import API from '@/services/index.js'
	export default {
		data(){
			return{
                countPay: 0,
				pay : 0,
			}
		},
		setup(){
			const user = userStore()
			const product = productStore()
			return { user ,product}
		},
		methods:{
			deleteItemInCart(item){
				if(!this.user.info){
					console.log("Vui long dang nhap")
				}else{
					const { _id } = this.user.info
					API('put',`/cart/delete/${_id}`, {item})
					.then((res)=>{
						// console.log(res.data)
						this.user.info = res.data
					}).catch((err)=>{
						console.log(err)
					})
				}
			},
            selectProduct(id){
                const {profile} = this.user
                for( var i = 0;i<profile.cart.length; i++){
                    if(profile.cart[i].item._id === id){
                        if(profile.cart[i].checkBuy === true){
                            this.user.profile.cart[i].checkBuy = false
                        }
                        if(profile.cart[i].checkBuy === false){
                            this.user.profile.cart[i].checkBuy = true
                        }
                    }
                }
            },
            formatPrice : (pri) => {
                return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(pri)
            }
	        // formatPrice : (pri)=>{
            //     const price =  pri.toLocaleString('de-DE', {
            //     style: 'currency',
            //     currency: 'VND',
            //     maximumFractionDigits: 0
            //     });
            //     return price
            // }
        },
                
		computed:{
			totalPay(){
				if(!this.user.info){
					this.pay = 0
                    this.countPay = 0
				}else{
                    const { cart } = this.user.info
                    this.pay = 0
					for (var i = 0; i < cart.length; i++) {
                        
                            if(cart[i].checkBuy === true){
                                if(cart[i].item.newprice === null){
                                     this.pay += cart[i].item.price
                                }
                                else{
                                    this.pay += cart[i].item.newprice
                                }
                               
                            }
                        
					}
                    this.countPay = this.pay
                    console.log(this.countPay)
				}
			}
		}
	}
</script>
<style>
  * {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -webkit-text-shadow: rgba(0, 0, 0, .01) 0 0 1px;
    text-shadow: rgba(0, 0, 0, .01) 0 0 1px
}

body {
    font-family: 'Rubik', sans-serif;
    font-size: 14px;
    font-weight: 400;
    background: #E0E0E0;
    color: #000000
}

ul {
    list-style: none;
    margin-bottom: 0px
}

.button {
    display: inline-block;
    background: #0e8ce4;
    border-radius: 5px;
    height: 48px;
    -webkit-transition: all 200ms ease;
    -moz-transition: all 200ms ease;
    -ms-transition: all 200ms ease;
    -o-transition: all 200ms ease;
    transition: all 200ms ease
}

.button a {
    display: block;
    font-size: 18px;
    font-weight: 400;
    line-height: 48px;
    color: #FFFFFF;
    padding-left: 35px;
    padding-right: 35px
}

.button:hover {
    opacity: 0.8
}

.cart_section {
    width: 100%;
    padding-top: 93px;
    padding-bottom: 111px
}

.cart_title {
    font-size: 30px;
    font-weight: 500
}

.cart_items {
    margin-top: 8px
}

.cart_list {
    border: solid 1px #e8e8e8;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
    background-color: #fff
}

.cart_item {
    width: 100%;
    padding: 15px;
    padding-right: 46px
}

.cart_item_image {
    width: 133px;
    height: 133px;
    float: left
}

.cart_item_image img {
    max-width: 100%
}

.cart_item_info {
    width: calc(100% - 133px);
    float: left;
    padding-top: 18px
}

.cart_item_name {
    margin-left: 7.53%
}

.cart_item_title {
    font-size: 14px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.5)
}

.cart_item_text {
    font-size: 18px;
    margin-top: 35px
}

.cart_item_text span {
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-right: 11px;
    -webkit-transform: translateY(4px);
    -moz-transform: translateY(4px);
    -ms-transform: translateY(4px);
    -o-transform: translateY(4px);
    transform: translateY(4px)
}

.cart_item_price {
    text-align: right
}

.cart_item_total {
    text-align: right
}

.order_total {
    width: 100%;
    height: 60px;
    margin-top: 30px;
    border: solid 1px #e8e8e8;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
    padding-right: 46px;
    padding-left: 15px;
    background-color: #fff
}

.order_total_title {
    display: inline-block;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.5);
    line-height: 60px
}

.order_total_amount {
    display: inline-block;
    font-size: 18px;
    font-weight: 500;
    margin-left: 26px;
    line-height: 60px
}

.cart_buttons {
    margin-top: 60px;
    text-align: right
}

.cart_button_clear {
    display: inline-block;
    border: none;
    font-size: 18px;
    font-weight: 400;
    line-height: 48px;
    color: rgba(0, 0, 0, 0.5);
    background: #FFFFFF;
    border: solid 1px #b2b2b2;
    padding-left: 35px;
    padding-right: 35px;
    outline: none;
    cursor: pointer;
    margin-right: 26px
}

.cart_button_clear:hover {
    border-color: #0e8ce4;
    color: #0e8ce4
}

.cart_button_checkout {
    display: inline-block;
    border: none;
    font-size: 18px;
    font-weight: 400;
    line-height: 48px;
    color: #FFFFFF;
    padding-left: 35px;
    padding-right: 35px;
    outline: none;
    cursor: pointer;
    vertical-align: top
}
</style>