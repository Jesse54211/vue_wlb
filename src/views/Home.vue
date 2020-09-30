<template>
  <div class="home">
    <Head></Head>
    <Nav></Nav>
    <Swiper></Swiper>
    <Tabs :indexActData="indexActData"></Tabs>

  </div>

</template>
<script>
import Head from '@/components/Head.vue'
import Nav from '@/components/Nav.vue'
import Swiper from '@/components/Swiper.vue'
import Tabs from '@/components/Tabs.vue'
export default {
  name: 'Home',
  data(){
    return{
      indexActData:{}
    }
  },
  components: {
    Head,
    Nav,
    Swiper,
    Tabs
  },
  created() {
    this.getHomeData()
  },
  methods:{
    async getHomeData(){
      this.axios.get('/api',{
        params:{
          pageSize: 18
        }
      }).then(res => {
        this.res=res.data
        let indexActData = res.data.extend.page.list
        // console.log(text)
        this.indexActData = indexActData
      })
    }
  }
}
</script>
