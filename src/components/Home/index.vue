<template>
    <v-layout class="home" :style="{backgroundImage: imgStyle}">
        <v-card class="home__content">
            <v-card-text>
                <p class="text-xs-center display-2">
                    A rural list to provide and offer day gig services, Support your community, and Work locally! With or without internet. TEXT **HELLO** or **Hey Earl** to (254)400-2317 to Post or View the most recent posting within a zip code.
                </p>
                <div class="text-xs-center">
                    <v-btn large dark class="orange darken-4 home__button" @click="onClickStartBtn('app-job-board')">
                        Current List
                    </v-btn>
                </div>
                <div class="text-xs-center">
                    <app-modal :register="register" :onConfirm="onConfirmModal">
                        <v-btn large dark class="red darken-4 button" slot="button">
                            Sign Up
                        </v-btn>
                    </app-modal>

                    <app-modal :isLogin="true" :login="login" :onConfirm="() => onConfirmModal(true)">
                        <v-btn large dark class="green darken-4 button" slot="button">
                            Login
                        </v-btn>
                    </app-modal>
                    <v-alert 
                    success 
                    :value="alert" 
                    transition="scale-transition"
                    >
                        {{ alertMessage }}
                    </v-alert>
                </div>
                <div class="text-xs-center">
                <v-btn large dark class="purple accent-3" slot="button" @click="onClickStartBtn('app-About')">
                    About The Creator
                </v-btn>
                <v-btn large dark class="cyan accent-3" slot="button" @click="onClickStartBtn('app-Terms')">
                    Terms of Service
                </v-btn>
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
    data() {
        return {
            landingImg: workersImg,
            alert: false,
            alertMessage: ''
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
    }, 
    methods: {
        onConfirmModal(isLogin) {
            this.alert = true;
            this.alertMessage = isLogin ? 'You have successfully logged in!' : 'You have successfully registered!'
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
    max-height: 62vh;
    background-color: rgba(255, 255, 255, 0.5) !important;
}
</style>


