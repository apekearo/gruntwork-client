<template>
    <v-app class="app">
        <app-nav :items="headerItems"
                 :onClickItem="onChangePage"
        >
        </app-nav>
        <main>
            <v-container fluid :class="{'app__content--no-padding': currentPage === 'app-home'}" class="app__content">
                <component :is="currentPage"></component>
                <!--v-router-->
            </v-container>
        </main>

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
    import map from './components/Map/index.vue'
    import table from './components/Table/index.vue'
    import tabs from './components/Table/tabs.vue'

    export default {
        components: {
            // appListGroup: listGroup,
            appJobBoard: table,
            appPost: map,
            tabs: tabs,
            appNav: Nav,
            appHome: Home
        },
        data () {
            return {
                headerItems: [
                    { title: 'Home', icon: 'home', component: 'app-home' },
                    { title: 'Job board', icon: 'dashboard', component: 'app-job-board' },
                    { title: 'Post a job', icon: 'work', component: 'app-post' }
                ],
                currentPage: 'app-home'
            }
        },
        methods: {
            onChangePage (componentName) {
                this.currentPage = componentName
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