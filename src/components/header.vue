<template>
    <div>
        <v-toolbar fixed class="blue lighten-1" dark style="font-family: 'Eczar', serif;">
       <v-toolbar-title @click="onClickitem('app-home')">{{title}}</v-toolbar-title>
       
        <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
    <v-btn flat @click="onClickItem('app-job-board')">List</v-btn>
      <v-btn flat @click="onClickitem('app-post')">Post</v-btn>
      <v-btn flat @click="onClickItem('app-about')">F.A.Q.</v-btn>
    </v-toolbar-items>
        </v-toolbar>
    </div>
    
</template>


<script>
    import profileImg from '../assets/images/profile.png';
    // import home from 'Home/index.vue';

    export default {
        data () {
            return {
                drawer: false,
                mini: false,
                right: null,
            }
        },
        props: {
            title: {
                type: String,
                default: 'Hey Earl'
            },
            items: {
                type: Array,
                default () {
                    return [
                        { title: 'Home', icon: 'dashboard' },
                        { title: 'About', icon: 'question_answer' }
                    ]
                }
            },
            username: {
                type: String,
                default: 'User'
            },
            profile: {
                type: String,
                default: profileImg
            },
            onClickItem: {
                type: Function
            }
        },
        methods: {
            didClickItem(componentName) {
                this.drawer = false;
                this.onClickItem(componentName)
            }
        }
    }
</script>

<style>

</style>