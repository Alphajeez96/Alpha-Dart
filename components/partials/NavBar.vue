<template>
  <div class="holder">
    <!-- Greetings here -->
    <div>
      <h1 class="text-2xl text-primary-black font-bold">
        {{ greeting }} Prince
      </h1>
      <p class="text-sm text-primary-variation1 pt-0.5 font-semibold">
        Hope you have a nice {{ greeting.split(" ")[1] }} ahead!
      </p>
    </div>

    <div class="ml-auto flex items-center">
      <!-- Notification Icon here -->
      <img src="~/assets/images/notification.svg" alt="notification" />

      <!-- User Avatar here -->
      <div class="ml-6">
        <img src="~/assets/images/avatar.svg" alt="User Avatar" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",

  computed: {
    greeting() {
      const date = new Date();
      const hour = date.getHours();

      if (hour < 12) {
        return "Good Morning";
      } else if (hour < 18) {
        return "Good Afternoon";
      } else {
        return "Good Evening";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.holder {
  @apply bg-primary-grey rounded-20 px-8  h-20 flex items-center;
}
</style>
