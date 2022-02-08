<template>
    <div class="swiper-container" ref="floor1Swiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="carousel in list" :key="carousel.id">
                <img :src="carousel.imgUrl">
            </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>

        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
    </div>
</template>

<script>
    // 引入轮播
    import Swiper from 'swiper'

    export default {
        name: "Carousel",
        props: ['list'],
        created() {
            console.log(this.list)
        },
        watch: {
            list:{
                handler(){
                    this.$nextTick(() => {
                        new Swiper (this.$refs.floor1Swiper, {
                            loop: true, // 循环模式选项

                            // 如果需要分页器
                            pagination: {
                                el: '.swiper-pagination',
                                clickable :true,
                            },

                            // 如果需要前进后退按钮
                            navigation: {
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',
                            },

                            // 自动切换
                            autoplay: {
                                delay: 3000,
                                stopOnLastSlide: false,
                                disableOnInteraction: true,
                            },
                        })
                    })
                },
                // 立即监听，不管数据是否改变
                immediate: true
            }
        }
    }
</script>

<style scoped>

</style>