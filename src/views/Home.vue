<template>
  <div class="home">
   <HelloWorld></HelloWorld>
   <Head></Head>
   <Nav></Nav>
    <Swiper></Swiper>
      <Tabs></Tabs>
  </div>

</template>
<script>
import HelloWorld from '@/components/HelloWorld.vue'
import Head from '@/components/Head.vue'
import Nav from '@/components/Nav.vue'
import Swiper from '@/components/Swiper.vue'
import Tabs from '@/components/Tabs.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Head,
    Nav,
    Swiper,
    Tabs
  }
}
</script>
