<template>
    <v-layout class="home" :style="{backgroundImage: imgStyle}">
    </v-layout>
</template>

<script>
    import workersImg from '../../assets/images/workers.jpg';
    export default {
        data () {
            return {
                landingImg: workersImg
            }
        },
        computed: {
            imgStyle() {
                return `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${this.landingImg})`
            }
        }
    }
</script>

<style scoped>
    .home {
        background: no-repeat center center fixed;
        background-size: cover;
        width: 100vw;
        height: 100vh;
    }
</style>


