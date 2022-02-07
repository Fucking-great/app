<template>
    <div id="app">
        <Header/>
        <!--        显示路由组件-->
        <router-view></router-view>
        <Footer v-show="$route.meta.show"></Footer>
    </div>
</template>

<script>
    import Header from "@/components/Header";
    import Footer from "@/components/Footer";

    export default {
        name: 'App',
        components: {
            Header,
            Footer
        },
        mounted () {
            // 通知vuex发起请求，获取数据，储存于仓库中
            this.$store.dispatch('categoryList');
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        /*text-align: center;*/
        /*color: #2c3e50;*/
        /*margin-top: 60px;*/
    }
</style>
