<template>
    <div>
    <Head></Head>
        <div class="center">
<!--            活动ID为 {{this.$route.params.id}}-->
            <div class="title"> {{DetailsAct.title}}  </div>
            <span class="actinfo">
                主办方: {{DetailsAct.user.name}} |
                发布于:{{DetailsAct.gmtModified}} |
                阅读数: {{DetailsAct.viewCount}} <br>
                <div style="padding-bottom: 5px"></div>
                活动时间: {{DetailsAct.starttime}} {{DetailsAct.deadline}} |
                活动预算: {{DetailsAct.abudget}} 元
            </span>
            <hr style='margin-top: 20px;margin-bottom: 20px;border: 0;border-top: 1px solid #eee;'>
            <Editor></Editor>
        </div>

    </div>
</template>
<script>
import Head from '@/components/Head.vue'
import Editor from '@/components/Editor.vue'
export default {
    name:'Activities',
    data(){
        return{
            DetailsAct:[]
        }
    },
    components:{
        Head,
        Editor
    },
    methods:{
        async getDetails(){
            this.axios.get('http://localhost/questionjson/'+this.$route.params.id,{
            }).then(res => {
                let DetailsAct =res.data.extend.question
                console.log(DetailsAct)
                this.DetailsAct = DetailsAct
            })
        }
    },
    created() {
        this.getDetails()
    }
}
</script>
<style scoped>
.center{
    width: 1000px;
    /*height: 800px;*/
    margin: 0 auto;
}
.title{
    padding: 50px 0px 10px 0px;
    font-size:25px;
    font-weight: 700;
}
.actinfo{
    color:green;
    font-size: 12px;
}
</style>