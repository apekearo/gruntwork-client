<template>
  <v-flex xs12>
    <v-card class="pt-5 app__table">
      <v-card-title>
        <v-switch :label="isEmployee ? 'All employees' : 'All employers'" v-model="isEmployee"></v-switch>
        <v-spacer></v-spacer>
        <v-text-field append-icon="search" label="Search" single-line hide-details v-model="search"></v-text-field>
      </v-card-title>
      <v-data-table :headers="headers" :items="tableItems" :search="search">
        <template slot="items" scope="props">
          <td class="text-xs-left">{{ props.item.name }}</td>
          <td class="text-xs-left">{{ props.item.phone }}</td>
          <td class="text-xs-right">{{ props.item.locationZip }}</td>
          <td class="text-xs-right">{{ props.item.hasCar }}</td>
          <td class="text-xs-right">{{ props.item.description }}</td>
          <td class="text-xs-right">{{ props.item.payAmount }}</td>
        </template>
        <template slot="pageText" scope="{ pageStart, pageStop }">
          From {{ pageStart }} to {{ pageStop }}
        </template>
      </v-data-table>
    </v-card>
  </v-flex>
</template>

<script>
    import map from '../Map/index.vue'
    export default {
        data() {
            return {
                search: '',
                pagination: {},
                headers: [
                    {
                        text: 'Name',
                        align: 'left',
                        value: 'name'
                    },
                    { text: 'Phone Number', value: 'phone' },
                    { text: 'Zip code', value: 'locationZip' },
                    { text: 'Transportation?', value: 'hasCar' },
                    { text: 'Description', value: 'description' },
                    { text: 'Pay Amount', value: 'payAmount' }
                ],
                posts: [],
                isEmployee: true
            }
        },
        props: {
            getPosts: Function
        },
        computed: {
            tableItems() {
                const results = this.posts
                    .map(post => {
                        const copied = Object.assign({}, post);
                        copied.name = `${copied.User.firstName} ${copied.User.lastName}`;
                        copied.value = false;
                        return copied
                    })
                    .filter(post => {
                        let condition = false;
                        this.isEmployee
                            ? condition = post.role === "employee"
                            : condition = post.role === "employer"
                        return condition
                    });
                console.log(results)
                return results
            }
        },
        mounted () {
            this.getPosts().then(res => {
                this.posts = res.data
            })
        }
    }
</script>

<style scoped>
  .app__table {
    margin-top: 64px;
  }

  .map {
    width: 75%;
    height: 300px
  }
</style>
