<template>
  <div>
    <v-layout row justify-center v-if="currentUser !== null">
      <v-card class="app__job_form">
        <v-card-title>
          <span class="headline">Job Post</span>
        </v-card-title>
        <v-card-text>
          <v-text-field label="Pay Amount" required v-model="post.payAmount"></v-text-field>
          <v-text-field label="Phone Number"
                        hint="example of helper text only on focus"
                        v-model="post.phone"
          >
          </v-text-field>
          <v-text-field label="Job Description"
                        hint="example of persistent helper text"
                        v-model="post.description"
                        persistent-hint
                        required
          ></v-text-field>
          <v-text-field label="Location Zip"
                        hint="example of persistent helper text"
                        v-model="post.locationZip"
                        persistent-hint
                        required
          ></v-text-field>
          <v-select
                  label="Do you have a car"
                  v-model="post.hasCar"
                  required
                  :items="[true, false]"
          ></v-select>
          <v-select
                  label="Role"
                  v-model="post.role"
                  required
                  :items="['employee', 'employer']"
          >
          </v-select>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="blue--text darken-1" flat @click="onClickSave">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-layout>

    <v-layout v-else class="text-xs-center">
      <v-card class="app__job_form">
        <v-btn>
          Login
        </v-btn>

        <v-btn>
          Register
        </v-btn>
      </v-card>
    </v-layout>
  </div>
</template>

<script scoped>
    export default {
        data () {
            return {
              post: {
                  payAmount: 0,
                  phone: '',
                  description: '',
                  hasCar: false,
                  role: '',
                  locationZip: ''
              }
            }
        },
        props: {
            currentUser: Object,
            createPost: Function,
        },
        methods: {
            onClickSave () {
                this.createPost({post: this.post, userId: this.currentUser.id})
            }
        }
    }
</script>

<style>
  .app__job_form {
    width: 80%;
    margin: auto;
    margin-top: 64px;
    min-height: 40vh;
  }
</style>
