export default defineNuxtRouteMiddleware((to, from) => {
    const userStore = useUserStore();
  
    if (!!userStore.user) {
      return navigateTo('/profile'); // No need for `await`
    }
  });
  