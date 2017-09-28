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
          <v-text-field label="Email" required v-model="user.email"></v-text-field>
          <v-text-field label="Password" type="password" required v-model="user.password"></v-text-field>
          <v-text-field label="First Name" required v-show="!isLogin" v-model="user.firstName"></v-text-field>
          <v-text-field label="Last Name" v-show="!isLogin" v-model="user.lastName"></v-text-field>
          <v-text-field label="Phone Number" hint="***-***-****"
                        v-show="!isLogin"
                        v-model="user.phone"
                        persistent-hint
                        required
          ></v-text-field>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="blue--text darken-1" flat @click.native="dialog = false">Close</v-btn>
          <v-btn class="blue--text darken-1" flat @click="onClickSave">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>

    export default {
        data () {
            return {
                dialog: false,
                user: {
                    email: '',
                    password: '',
                    firstName: '',
                    lastName: '',
                    phone: '',
                }
            }
        },
        props: {
            isLogin: {
                type: Boolean,
                default: false
            },
            login: Function,
            register: Function,
            onConfirm: Function,
        },
        methods: {
            onClickSave () {
                this.isLogin ? this.login(this.user) : this.register({user: this.user});
                this.dialog = false;
                this.onConfirm();
            }
        }
    }
</script>
