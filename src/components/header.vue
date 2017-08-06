<template>
    <div>
        <v-navigation-drawer absolute persistent light :mini-variant.sync="mini" v-model="drawer" overflow>
            <v-toolbar flat class="transparent">
                <v-list class="pa-0">
                    <v-list-tile avatar tag="div">
                        <v-list-tile-avatar>
                            <img :src='profile' />
                        </v-list-tile-avatar>
                        <v-list-tile-content>
                            <v-list-tile-title>{{username}}</v-list-tile-title>
                        </v-list-tile-content>
                        <v-list-tile-action>
                            <v-btn icon @click.native.stop="mini = !mini">
                                <v-icon>chevron_left</v-icon>
                            </v-btn>
                        </v-list-tile-action>
                    </v-list-tile>
                </v-list>
            </v-toolbar>
            <v-list class="pt-0" dense>
                <v-divider></v-divider>
                <v-list-tile v-for="item in items" :key="item.title">
                    <v-list-tile-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar fixed class="indigo darken-4" dark>
            <v-toolbar-side-icon @click.native.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title>{{title}}</v-toolbar-title>
        </v-toolbar>
    </div>
</template>


<script>
    import profileImg from '../assets/images/profile.png'
    export default {
        data () {
            return {
                drawer: false,
                mini: false,
                right: null
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
                default: 'Tony'
            },
            profile: {
                type: String,
                default: profileImg
            }
        }
    }
</script>

<style>

</style>