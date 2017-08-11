<template>
    <v-layout class="home" :style="{backgroundImage: imgStyle}">
        <v-card class="home__content">
            <v-card-text>
                <p class="text-xs-center display-2">
                    This is local list to provide and offer day labor services, Support your community, and Work locally!
                    With or without internet, with or without a car
                </p>
                <div class="text-xs-center">
                    <v-btn large dark class="cyan darken-4 home__button" @click="onClickStartBtn('app-job-board')">
                        Post List
                    </v-btn>
                </div>
                <div class="text-xs-center">
                    <app-modal :register="register">
                        <v-btn large dark class="red darken-4 button" slot="button">
                            Sign Up
                        </v-btn>
                    </app-modal>

                    <app-modal :isLogin="true" :login="login">
                        <v-btn large dark class="green darken-4 button" slot="button">
                            Login
                        </v-btn>
                    </app-modal>
                </div>
           </v-card-text>
        </v-card>
    </v-layout>
</template>

<script>
    import workersImg from '../../assets/images/workers.jpg';
    import signUpModal from '../Authenticate/formModal.vue';

    export default {
        components: {
            appModal: signUpModal,
        },
        data () {
            return {
                landingImg: workersImg,
            }
        },
        props: {
            onClickStartBtn: {
                type: Function
            },
            login: Function,
            register: Function,
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


