<template>
    <v-layout class="home">
        <img :src="landingImg" alt="A group of workers" class="home__bg">
    </v-layout>
</template>

<script>
    import workersImg from '../../assets/images/workers.jpg';
    export default {
        data () {
            return {
                landingImg: workersImg
            }
        }
    }
</script>

<style scoped>
    .home__bg {
        margin-top: 64px;
        height: calc(100vh - 64px);
        width: 100vw
    }
</style>


