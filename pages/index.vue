<template>
  <div class="container flex items-center justify-center">

    <div>
    <h1>Welcome</h1>
    <p>sign in to your profile</p>
    <button 
    @click="signIn"
    class="px-3 py-2 rounded-md bg-emerald-500 text-white inline-flex items-center justify-center" >sign in</button>
    </div>
    
  </div>
</template>

<script lang="ts" setup>
// Import the store
import { useUserStore } from '~/stores/user';

// Initialize the store
const userStore = useUserStore();
definePageMeta({
    middleware:["already-auth"],
});

// Define the signIn function
const signIn = async () => {
  await userStore.signIn({
    username: 'emilys',
    password: 'emilyspass',
  });
  await navigateTo('/profile',{replace:true} );
};
</script>


<style>

</style>