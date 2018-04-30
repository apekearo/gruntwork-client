<template>
  <v-flex xs12>
          <!-- <div id="leaves"></div> -->
          <div id="yellow"></div>
    <v-card class="pt-5 app__table">
      <v-card-title class="mt-0 pt-0">
        <v-switch :label="isEmployee ? 'All employees' : 'All employers'" v-model="isEmployee"></v-switch>
        <v-spacer></v-spacer>
        <v-text-field append-icon="search" label="Search" single-line hide-details v-model="search"></v-text-field>
      </v-card-title>
      <!-- adding help button -->
      <v-dialog v-model="dialog" max-width="490" lazy absolute>
          <v-btn small class="green accent-3 grey--text" slot ="activator">How To Use List</v-btn>
          
          <v-card>
              <v-card-title>
                  <div class="headline">How To Use Hey Earl</div>
              </v-card-title>
            <v-card-text>To connect with someone on the list, simply use 
                your phone to call the phone number listed and work out the details.  Each listing is only on the site for one week.
                 Each listing can easily be searched by the zip code.
            </v-card-text>
          </v-card>
          
      </v-dialog>
    
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
                        if (!copied.User) {
                            copied.name = "Text User"
                        }else {
                            copied.name = `${copied.User.firstName} ${copied.User.lastName}`;
                        }
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
#yellow{
    background-image: url('../../assets/images/yellow.jpg');
    height: 100%;
    width: 100%;
}
  .app__table {
    margin-top: 64px;
  }

  .map {
    width: 75%;
    height: 300px
  }
#leaves{
	background: none;
	background-image: url('../../assets/images/leaves2.png'), url('../../assets/images/leaves1.png');
	height: 100%;
	left: 0;
	position: absolute;
	top: 0;
	width: 100%;
	z-index: 0;
	-webkit-animation: leaves 30s linear infinite;
	-moz-animation: leaves 30s linear infinite;
	-ms-animation: leaves 30s linear infinite;
	animation: leaves 30s linear infinite;
}
/* Leaves change position over 30 seconds. -JB */
@keyframes leaves {
  0% {background-position: 0px 0px, 0px 0px;}
  50% {background-position: -500px 500px, -100px 200px;}
  100% {background-position: -500px 1000px, 200px 400px;}
}
@-moz-keyframes leaves {
  0% {background-position: 0px 0px, 0px 0px;}
  50% {background-position: -500px 500px, -100px 200px;}
  100% {background-position: -400px 1000px, -200px 400px;}
}
@-webkit-keyframes leaves {
  0% {background-position: 0px 0px, 0px 0px;}
  50% {background-position: -500px 500px, -100px 200px;}
  100% {background-position: -500px 1000px, -200px 400px;}
}
@-ms-keyframes leaves {
  0% {background-position: 0px 0px, 0px 0px;}
  50% {background-position: -500px 500px, -100px 200px;}
  100% {background-position: -500px 1000px, -200px 400px;}
}	


</style>
<style>
  .application--light .input-group.input-group--selection-controls.switch .input-group--selection-controls__toggle {
      color:blueviolet;
  }

  .application--light .input-group.input-group--selection-controls.switch .input-group--selection-controls__ripple--active:after{
      background-color: blueviolet;
  }
</style>
