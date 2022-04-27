import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/homepage.vue";
import Products from "@/views/productspage.vue";
import Registerform from "@/components/registerform.vue";
import Addproduct from "@/views/addproductpage.vue";
import Loginform from "@/components/loginform.vue";
import Loginpage from "@/views/loginpage.vue";
import Cart from "@/views/cartpage.vue";
import Brand from "@/components/brand.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/Cart",
        name: "Cart",
        component: Cart,
    },
    {
        path: "/Products",
        name: "Products",
        component: Products,
    },
    
    
    {
        path: "/Addproduct",
        name: "Addproduct",
        component: Addproduct,
    },
    {
        path: "/Login",
        name: "Login",
        component: Loginpage,
        redirect: "/Loginform",
        children: [
			{
                path: "/Registerform",
                name: "Registerform",
                component: Registerform,
            },
            {
                path: "/Loginform",
                name: "Loginform",
                component: Loginform
            }

		],
    },
    {
        path: "/Brand/:slug",
        name: "Brand",
        component: Brand,
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;