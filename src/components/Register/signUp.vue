<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent>
      <div slot="activator">
        <slot name="button"></slot>
      </div>
      <v-card>
        <v-card-title>
          <span class="headline">User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-text-field label="Email" required></v-text-field>
          <v-text-field label="Password" type="password" required></v-text-field>
          <v-text-field label="First Name" required></v-text-field>
          <v-text-field label="Last Name"></v-text-field>
          <v-text-field label="Phone Number" hint="***-***-****"
                        persistent-hint
                        required
          ></v-text-field>
          <v-select
                  label="Transportation"
                  required
                  :items="['Need a ride', 'Can get to location on time fine.', 'Will give another a ride']"
          ></v-select>
          <v-select
                  label="Interests"
                  multiple
                  autocomplete
                  chips
                  :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="blue--text darken-1" flat @click.native="dialog = false">Close</v-btn>
          <v-btn class="blue--text darken-1" flat @click.native="dialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
    export default {
        data () {
            return {
                dialog: false
            }
        }
    }
</script>
