<template>
    <v-layout class="about">
        <v-card class="about__content">
            <v-card-text></v-card-text>
            <v-card-text>
                <div class="text-xs-center">
                <img :src="layingImg" v-bind:style="{height:'25%', width:'25%'}"> 
                    </div>
                
                <p class="text-xs-center display-2">
A boy that was moved into Kopperl in the 80's
                </p>
                <div class="text-xs-center">
                   <!-- small map or something -->
                </div>
    <img :src="deskImg" v-bind:style="{height:'25%', width:'25%'}"> 
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1737905.1091094457!2d-98.28191764442317!3d31.70644450392945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864fcbbe3e3315c3%3A0x2c172b9633e92981!2sKopperl%2C+TX!5e0!3m2!1sen!2sus!4v1512867761799" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>
            </v-card-text>
        </v-card>
    </v-layout>
</template>
<script>
    import deskImg from '../../assets/images/desk.png';
    import layingImg from '../../assets/images/laying.png';
</script>