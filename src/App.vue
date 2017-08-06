<template>
    <v-app>
        <app-nav :items="headerItems"></app-nav>
        <main>
            <v-container fluid>
                <div class="title">Click on sidebar to re-open.</div>
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
    import map from './components/Map/index.vue'
    import table from './components/Table/index.vue'
    import tabs from './components/Table/tabs.vue'

    export default {
        components: {
            // appListGroup: listGroup,
            tableGrid: table,
            appMap: map,
            tabs: tabs,
            appNav: Nav
        },
        data () {
            return {
                headerItems: [
                    { title: 'Job board', icon: 'dashboard' },
                    { title: 'Post a job', icon: 'work' }
                ]
            }
        }
    }
</script>

<style scoped>
    .headline {display: inline}
</style>