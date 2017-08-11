<template>
  <div>
    <v-layout row justify-center v-if="currentUser !== null">
      <v-card class="app__job_form">
        <v-card-title>
          <span class="headline">Job Post</span>
        </v-card-title>
        <v-card-text>
          <v-text-field label="Pay Amount" required></v-text-field>
          <v-text-field label="Phone Number" hint="example of helper text only on focus"></v-text-field>
          <v-text-field label="Job Description" hint="example of persistent helper text"
                        persistent-hint
                        required
          ></v-text-field>
          <v-select
                  label="Transportation"
                  required
                  :items="['Need a ride', 'Can get to location on time fine.', 'Will give another a ride']"
          ></v-select>
          <v-select
                  label="Role"
                  required
                  :items="['Employee', 'Employer']"
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="blue--text darken-1" flat @click.native="dialog = false">Close</v-btn>
          <v-btn class="blue--text darken-1" flat @click.native="dialog = false">Save</v-btn>
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

            }
        },
        props: {
            currentUser: Object
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
