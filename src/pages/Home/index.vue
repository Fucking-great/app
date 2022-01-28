<template>
    <div>
        <TypeNav/>
        <ListContainer/>
        <Recommend/>
        <Rank/>
        <Like/>
        <Floor/>
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

    export default {
        name: "index",
        components: {
            Brand,
            Floor,
            Like,
            Rank,
            Recommend,
            ListContainer
        }
    }
</script>

<style scoped>

</style>