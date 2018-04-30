<template>
  <div>
    <!-- <div id="leaves"></div> -->
    <div id="yellow"></div>
    <v-layout row justify-center v-if="currentUser !== null">
      <v-card class="app__job_form">
        <v-card-title>
          <span class="headline">Job Post</span>
        </v-card-title>
        <v-card-text>
          <v-text-field label="Pay Amount" required v-model="post.payAmount"></v-text-field>
          <v-text-field label="Phone Number" hint="example of helper text only on focus" v-model="post.phone">
          </v-text-field>
          <v-text-field label="Job Description" hint="example of persistent helper text" v-model="post.description" persistent-hint required></v-text-field>
          <v-text-field label="Location Zip" hint="example of persistent helper text" v-model="post.locationZip" persistent-hint required></v-text-field>
          <v-select label="Do you have a car" v-model="post.hasCar" required :items="[true, false]"></v-select>
          <v-select label="Role" v-model="post.role" :items="['employee', 'employer']">
          </v-select>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
             <!-- add an event that lets the user see they have posted and go to the list for them. -->
          <v-btn id="post" class="blue--text darken-1" flat @click="onClickSave">POST</v-btn>
          </v-card-actions>
      </v-card>
    </v-layout>

    <v-layout v-else class="text-xs-center">
      <v-card class="app__job_form">
        <app-modal :isLogin="true" :login="login">
          <v-btn large dark class="green darken-4 button" slot="button">
            Login
          </v-btn>
        </app-modal>

        <app-modal :register="register" :onConfirm="onConfirm">
          <v-btn large dark class="red darken-4 button" slot="button">
            Register
          </v-btn>
        </app-modal>
        <v-alert success :value="alert" transition="scale-transition">
            You have successfully registered!
        </v-alert>
      </v-card>
    </v-layout>
  </div>
</template>

<script scoped>
import signUpModal from '../Authenticate/formModal.vue';

export default {
  components: {
    appModal: signUpModal,
  },
  data() {
    return {
      post: {
        payAmount: 0,
        phone: '',
        description: '',
        hasCar: false,
        role: '',
        locationZip: ''
      },
      alert: false
    }
  },
  props: {
    currentUser: Object,
    createPost: Function,
    onClickStartBtn: {
      type: Function
    },
    onChangePage: Function,
    login: Function,
    register: Function,
  },
  methods: {
    onClickSave() {
      console.log('save!')
      this.createPost({ post: this.post, userId: this.currentUser.id })
      .then(_ => {
        this.onChangePage('app-job-board')
      })
      .catch(err => {

      })
    },
    onConfirm() {
      this.alert = true;
    }
  }
}
</script>
<!--trying to get the page to move to the list
after the Post button has been pushed -->

<style>
/* changing the route picture background to the public/dist on the server */
#yellow{
  background-image: url('/dist/yellow.jpg');
}
.app__job_form {
  width: 80%;
  margin: auto;
  margin-top: 64px;
  min-height: 40vh;
}

#leaves {
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
  0% {
    background-position: 0px 0px, 0px 0px;
  }
  50% {
    background-position: -500px 500px, -100px 200px;
  }
  100% {
    background-position: -500px 1000px, 200px 400px;
  }
}

@-moz-keyframes leaves {
  0% {
    background-position: 0px 0px, 0px 0px;
  }
  50% {
    background-position: -500px 500px, -100px 200px;
  }
  100% {
    background-position: -400px 1000px, -200px 400px;
  }
}

@-webkit-keyframes leaves {
  0% {
    background-position: 0px 0px, 0px 0px;
  }
  50% {
    background-position: -500px 500px, -100px 200px;
  }
  100% {
    background-position: -500px 1000px, -200px 400px;
  }
}

@-ms-keyframes leaves {
  0% {
    background-position: 0px 0px, 0px 0px;
  }
  50% {
    background-position: -500px 500px, -100px 200px;
  }
  100% {
    background-position: -500px 1000px, -200px 400px;
  }
}
</style>
