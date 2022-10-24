<template>
  <div class="holder">
    <!-- Logo Here -->
    <Logo />

    <!-- Nav Links here -->
    <nav>
      <ul class="mt-12">
        <!-- Routes here -->
        <li
          v-for="route in routes"
          :key="route"
          class="text-lg text-primary-dark font-medium"
          :class="{ 'text-primary-main font-bold': route === 'Dashboard' }"
        >
          <nuxt-link to class="flex mb-9">
            <img
              :src="require(`~/assets/images/${route.toLowerCase()}.svg`)"
              :alt="route"
            />
            <span class="ml-3">{{ route }}</span>
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data: () => ({
    routes: ["Dashboard", "Teams", "Employees", "Projects"],
  }),
};
</script>

<style lang="scss" scoped>
.holder {
  @apply bg-primary-grey rounded-20 px-8 py-10 h-full fixed;
  width: 291px;
}
</style>
