export default defineNuxtRouteMiddleware((to, from) => {

    const userStore = useUserStore();
  
    if (!userStore.user) {
      return navigateTo('/'); // No need for `await`
    }
})
