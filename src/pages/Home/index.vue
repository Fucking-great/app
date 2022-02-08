<template>
    <div>
        <TypeNav/>
        <ListContainer/>
        <Recommend/>
        <Rank/>
        <Like/>
        <Floor  v-for="floor in floorList" :key="floor.id" :floor="floor"/>
        <Brand/>
    </div>
</template>

<script>
    import ListContainer from "@/pages/Home/LIstContainer";
    import Recommend from "@/pages/Home/Recommend";
    import Rank from "@/pages/Home/Rank";
    import Like from "@/pages/Home/Like";
    import Floor from "@/pages/Home/Floor";
    import Brand from "@/pages/Home/Brand";
    import {mapState} from 'vuex'
    export default {
        name: "Home",
        components: {
            Brand,
            Floor,
            Like,
            Rank,
            Recommend,
            ListContainer
        },
        mounted() {
            // 派发action: 通过Vuex发起ajax请求，将数据存储在仓库中
            this.$store.dispatch("getFloorList")
            console.log("this.$store", this.$store)
        },
        computed: {
            ...mapState({
                floorList:(state) => state.home.floorList
            })
        }
    }
</script>

<style scoped>

</style>