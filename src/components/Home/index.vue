<template>
    <!-- <v-layout >
        <nav class="navbar navbar-default">
        <div class="container">
            <div class="navbar-header"><a class="navbar-brand" href="#"><i class="glyphicon glyphicon-phone"></i>Mobile App</a><button class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navcol-1"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button></div>
            <div
                class="collapse navbar-collapse" id="navcol-1">
                <ul class="nav navbar-nav navbar-right">
                    <li class="active" role="presentation"><a href="#">First Item</a></li>
                    <li role="presentation"><a href="#">Second Item</a></li>
                    <li role="presentation"><a href="#">Third Item</a></li>
                </ul>
        </div>
        </div>
    </nav>
    <div class="jumbotron hero">
        <div class="container">
            <div class="row">
                <div class="col-md-4 col-md-push-7 phone-preview">
                    <div class="iphone-mockup"><img src="../../assets/images/iphone.svg" class="device">
                        <div class="screen"></div>
                    </div>
                </div>
                <div class="col-md-6 col-md-pull-3 get-it">
                    <p>Using cutting edge texhnologies, to create food and plants for the wild live and community we love..</p>
                    <p><a class="btn btn-primary btn-lg" role="button" href="#"><i class="fa fa-apple"></i> Check OUt our Progress</a><a class="btn btn-success btn-lg" role="button" href="#"><i class="fa fa-google"></i> Post aout your experience</a></p>
                </div>
            </div>
        </div>
    </div>
    <section class="testimonials">
        <h2 class="text-center">People Love It!</h2>
        <blockquote>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <footer>Famous tech website</footer>
        </blockquote>
    </section>
    <section class="features">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <h2>Fantastic Features</h2>
                    <p>Morbi non mauris massa. Duis elit mauris, malesuada nec suscipit ac, bibendum sed augue. Maecenas condimentum magna gravida, laoreet nunc sed, euismod sem. </p>
                </div>
                <div class="col-md-6">
                    <div class="row icon-features">
                        <div class="col-xs-4 icon-feature"><i class="glyphicon glyphicon-cloud"></i>
                            <p>Cloud-ready </p>
                        </div>
                        <div class="col-xs-4 icon-feature"><i class="glyphicon glyphicon-piggy-bank"></i>
                            <p>Saves You Money</p>
                        </div>
                        <div class="col-xs-4 icon-feature"><i class="glyphicon glyphicon-fire"></i>
                            <p>Fire Proof</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <script src="assets/js/jquery.min.js"></script>
    <script src="assets/bootstrap/js/bootstrap.min.js"></script> -->
<v-layout  class="home" :style="{backgroundImage: imgStyle}">
        <v-card class="home__content" style="font-family: 'Gentium Basic', serif;">
            <v-card-text>
                <p class="text-xs-center display-2">
                    A rural list to provide and offer day gig services, Support your community, and Work locally! With or without internet. 
                </p> <hr>
                 <p class="text-xs-center display-2 red "> TEXT **HELLO** or **Hey Earl** to (254)400-2317 to Post or View the most recent posting within a zip code.
                </p><hr>
                <p class="text-xs-center display-2">
                Will Be Advertising and Getting Users On The Site In The Summer of 2018</p>
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
                <v-btn large dark class="purple accent-3" slot="button" @click="onClickStartBtn('app-about')">
                    About The Creator
                </v-btn>
                <v-btn large dark class="cyan accent-3" slot="button" @click="onClickStartBtn('app-Terms')">
                    Terms of Service
                </v-btn>
                </div>
            </v-card-text>
        </v-card>
        <!-- <v-footer app>
    <v-spacer></v-spacer>
    © {{ new Date().getFullYear() }}
  </v-footer>
    </div>
        <v-footer app>
    Terms and Conditions Buttons    © {{ new Date().getFullYear() }}
  </v-footer> -->
</v-layout>
</template>

<script>
import workersImg from '../../assets/images/workers.jpg';
import signUpModal from '../Authenticate/formModal.vue';
import phoneImg from '../../assets/images/iphone.svg';
import About from '../About/index.vue';

export default {
    components: {
        appModal: signUpModal,
    },
    data() {
        return {
            landingImg: workersImg,
            iphoneImg: phoneImg,
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
            'url(${landingImg})'
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
html{
        background-color: #4A95D1;

}
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


