<template>
    <v-layout class="home" :style="{backgroundImage: imgStyle}">
        <v-card class="home__content">
            <v-card-text>
                <p class="text-xs-center display-2">
                    This is local list to provide and offer day labor services, Support your community, and Work locally!
                    With or without internet, with or without a car
                </p>
                <div class="text-xs-center">
                    <v-btn large dark class="home__button" @click="onClickStartBtn('app-job-board')">
                        GET STARTED
                    </v-btn>
                </div>
                <div class="text-xs-center">
                    <v-btn large dark class="button" @click="onClickStartBtn('sign-up-modal')">
                        Sign Up
                    </v-btn>
                </div>
           </v-card-text>
        </v-card>
    </v-layout>
</template>

<script>
    import workersImg from '../../assets/images/workers.jpg';
    import signUpModal from '../Register/signUp.vue';

    export default {
        components: {
            signUpModal: signUpModal
        },
        data () {
            return {
                landingImg: workersImg,
            }
        },
        props: {
            onClickStartBtn: {
                type: Function
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
        justify-content: center;
    }

    .home__content {
        z-index: 2;
        color: white;
        align-self: center;
        max-height: 50vh;
        background-color: rgba(255, 255, 255, 0.5) !important;
    }


</style>


