<template>
    <div>
    <Head></Head>
        <div>
            活动ID为 {{this.$route.params.id}}
        </div>

    </div>
</template>

<script>
import Head from '@/components/Head.vue'
export default {
    name:'Activities',
    data(){
        return{

        }
    },
    components:{
        Head

    },
    methods:{
        async getDetails(){
            this.axios.get('http://localhost'+'/question/'+this.$route.params.id,{
            }).then(res => {
                this.res=res.data
                // let indexActData = res.data.extend.page.list
                console.log(res)
                // this.indexActData = indexActData
            })
        }

    },
    created() {
        this.getDetails()
    }

}

</script>