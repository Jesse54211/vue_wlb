<template>
    <div>
        <Head></Head>
        <div class="center"></div>
    </div>

</template>
<script>
    import Head from '@/components/Head.vue'
    export default {
        name: 'Publish',
        data(){
            return{
                indexActData:{}
            }
        },
        components: {
            Head
        },
        created() {
            // this.getHomeData()
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
<style scoped>
.center{
    width: 1000px;
    height: 1600px;
    margin: 0 auto;
}

</style>
