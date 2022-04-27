<script>
import Nav from '@/components/nav.vue'
import Footerpage from '@/components/footer.vue'
export default {
  components:{
    Nav,
    Footerpage,
  }
}
</script>

<template>
    
    <div>
      <Nav/>
    <router-view></router-view>
    <Footerpage/>
    </div>
</template>

<style>
.page {
    max-width: 400px;
    margin: auto;
}
</style>