<template>
    <div class="center">
    <div class="recommendPage">
        <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide></swiper-slide>
            <swiper-slide></swiper-slide>
            <swiper-slide></swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
    </div>
    </div>
</template>

<script>
    // 引入插件
    import { swiper, swiperSlide } from "vue-awesome-swiper";
    import 'swiper/swiper-bundle.css';

    export default {
        components: {
            swiper,
            swiperSlide
        },
        data() {
            return {
                swiperOption: {
                    loop: true,
                    autoplay: {
                        delay: 3000,
                        stopOnLastSlide: false,
                        disableOnInteraction: false
                    },
                    // 显示分页
                    pagination: {
                        el: ".swiper-pagination",
                        clickable: true //允许分页点击跳转
                    },
                    // 设置点击箭头
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev"
                    }
                }
            };
        },
        computed: {
            swiper() {
                return this.$refs.mySwiper.swiper;
            }
        },
        mounted() {
            // current swiper instance
            // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
            console.log("this is current swiper instance object", this.swiper);
            // this.swiper.slideTo(3, 1000, false);
        }
    };
</script>
<style scoped >
    .center{
        width:1300px;
        padding-top: 20px;
        margin: 0 auto;
    }
    .recommendPage .swiper-container{
        position: relative;
        width: 100%;
        height: 360px;
    }
    .recommendPage .swiper-container .swiper-slide{
        width: 100%;
        line-height: 200px;
        background:url(http://47.100.224.112:8385/images/lbu.jpg) no-repeat;
        /*图片完全填充*/
        background-size: cover;
        color: #000;
        font-size: 16px;
        text-align: center;
        border-radius:15px;
    }
</style>

