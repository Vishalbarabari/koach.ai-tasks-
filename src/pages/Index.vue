<template>
  <q-page class="flex column q-pa-lg justify-center items-center bg-color">
   <q-card
      flat
      bordered
      class=" text-left  border-radius-20"
    >
        <div class="row q-pa-md" style="width:650px">
          <q-form @submit="userLogin">
      <div class="col q-pa-md border-right" >
        
        <div class="text-weight-bold text-h6"><span>Lo</span>gin</div>
         <q-input outlined v-model="login.email" label="Enter email id"  :rules="[
              val => val !== '' || 'Please enter your email',
              val => validateEmail(val) || 'Invalid email address'
            ]"/>
         <br>
          <q-input outlined type="password" v-model="login.password"  lazy-rules
            :rules="[
              val =>
                (val !== null && val !== '') || 'Please enter your password'
            ]" label="Enter password" />
          <br>
            <q-btn no-caps color="cyan-5" class="full-width" label="Login" type="submit"/>
      
      </div>
        </q-form>
       <q-form @submit="userRegister">
      <div class="col q-pa-md">
        <div class="text-weight-bold text-h6">Register</div>
        
         <q-input outlined v-model="register.email" label="Enter email id"  :rules="[
              val => val !== '' || 'Please enter your email',
              val => validateEmail(val) || 'Invalid email address'
            ]"/>
         <br>
          <q-input outlined type="password" v-model="register.phoneNumber"  lazy-rules
            :rules="[
              val =>
                (val !== null && val !== '') || 'Please enter your password'
            ]" label="Enter password" />
          <br>
           <q-input outlined type="number" v-model="register.password" label="Enter mobile no" />
           <br>
             <q-btn no-caps color="cyan-5" class="full-width" type="submit" label="Register" />
      </div>
       </q-form>
    </div>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import * as firebase from "boot/firebase"
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
export default defineComponent({
  name: 'PageIndex',
   data () {
    return {
      text:'',
     login:{
       email:'',
       password:''
     },
     register:{
       email:'',
       phoneNumber:'',
       password:''
     }
    }
  },
  
  
  methods:{
    userLogin(){
       const auth = getAuth();
          signInWithEmailAndPassword( auth,this.login.email,this.login.password)
            .then(data =>{console.log(data)
            this.$router.push({ path: '/Home' })}).catch(err =>alert(err.message));

    },
     userRegister(){
const auth = getAuth();
          createUserWithEmailAndPassword(auth,this.register.email,this.register.password)
            .then(data =>{console.log(data)
            this.$router.push({ path: '/Home' })
            }).catch(err =>alert(err.message));
    },
     validateEmail(mail) {
    const regex = /^[\w-\.\+]+@([\w-]+\.)+[\w-]{2,15}$/
    if (regex.test(mail)) {
      return true
    }
    return false
  }
  }
})
</script>

<style>
.bg-color{
 background-image: linear-gradient(to right,#12C2E9 ,#C471ED, #F64F59);
}
.border-radius-20{
  border-radius: 10px;
}
.border-right{
  border-right: 1px solid grey;
}
</style>