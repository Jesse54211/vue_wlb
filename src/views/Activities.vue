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
    created() {
    }

}

</script>