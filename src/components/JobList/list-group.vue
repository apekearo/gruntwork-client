<template>
 <ul>
    <app-list v-for="(list, index) in lists" 
              :title="list"
              :key="index">
    </app-list>
 </ul>
</template>

<script>
import list from './list.vue'

export default {
  components: {
      appList: list
  },

  //look up props and how data gets in from the parent app.vue
  props: ['lists']
}
</script>

<style scoped>
</style>


