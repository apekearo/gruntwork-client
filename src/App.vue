<template>
    <v-app class="app">
        <app-nav :items="headerItems"
                 :onClickItem="onChangePage"
        >
        </app-nav>
        <v-content>
            <v-container fluid :class="{'app__content--no-padding': currentPage === 'app-home'}" class="app__content">
                <component :is="currentPage" 
                           :onClickStartBtn="onChangePage"
                           :currentUser="currentUser"
                           :register="register"
                           :login="login"
                           :getPosts="getPosts"
                           :createPost="createPost"
                           :onChangePage="onChangePage"
                >
                </component>
                <!--v-router-->
            </v-container>
        </v-content>

        <!-- <v-layout row wrap child-flex-sm>
          <v-flex xs5>
             <v-card dark class="primary">
               <v-card-text class="display-2 green--text darken-4">Hey Earl</v-card-text>
             </v-card>
           </v-flex>
           <v-flex xs5 offset-xs2>
            <v-card dark class="primary">
      <v-card-text class="headline green--text darken-4">Login/Signup</v-card-text>
            </v-card>
           </v-flex>
           <v-flex xs12>
               <v-card-text>A Daylabor Platform</v-card-text>
           </v-flex>
           <v-flex xs12 class="display-1"><tabs></tabs></v-flex xs12>
           <v-flex xs8>
          <table-grid></table-grid>
           </v-flex>
           <v-flex xs4>
           <app-map></app-map>
           </v-flex>
         </v-layout> -->
        <!-- <div class="text-xs-center pt-9">
         <v-pagination v-model="pagination.page" :length="Math.ceil(this.items.length / pagination.rowsPerPage)"></v-pagination>
       </div>  -->

    </v-app>



</template>

<script>
    // import listGroup from './components/JobList/list-group.vue'
    import Nav from './components/header.vue';
    import Home from './components/Home/index.vue';
    import map from './components/Map/index.vue';
    import table from './components/JobList/index.vue';
    import JobPostForm from './components/Post/index.vue';
    import About from './components/About/index.vue';
    import Terms from './components/Terms/index.vue';

    export default {
        components: {
            // appListGroup: listGroup,
            appTerms: Terms,
            appAbout: About,
            appJobBoard: table,
            appNav: Nav,
            appHome: Home,
            appPost: JobPostForm
        },
        computed: {
            baseUrl() {
                return process.env.NODE_ENV === "development" ? "http://localhost:3000" : "http://heyearl.herokuapp.com"
            }
        },
        data () {
            return {
                headerItems: [
                    { title: 'Home', icon: 'home', component: 'app-home' },
                    { title: 'Job board', icon: 'dashboard', component: 'app-job-board' },
                    { title: 'Post a job', icon: 'work', component: 'app-post' }
                ],
                currentPage: 'app-home',
                currentUser: null
            }
        },
        methods: {
            onChangePage (componentName) {
                console.log(componentName)
                this.currentPage = componentName
            },
            login (user) {
                this.axios.post(this.baseUrl + "/api/login", user)
                    .then((response) => {
                        this.currentUser = response.data;
                    })
                    .catch(err => console.log(err.message))
            },
            register (user) {
                this.axios.post(this.baseUrl + "/api/register", user)
                    .then((response) => {
                        this.currentUser = response.data;
                    })
                    .catch(err => console.log(err.message))
            },
            getPosts () {
                console.log(process.env.NODE_ENV);
                return this.axios.get(this.baseUrl + "/api/posts")
                    .catch(err => console.log(err.message))
            },
            createPost (post) {
                return this.axios.post(this.baseUrl + "/api/posts", post)
                    .then((res) => {
                        console.log('Yay! It worked!', res)
                    })
                    .catch(err => console.log(err.message))
            }
        }
    }
</script>

<style scoped>
    .headline {
        display: inline
    }

    .app__content--no-padding {
        padding: 0
    }
</style>