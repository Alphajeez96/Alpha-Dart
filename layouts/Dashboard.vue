<template>
  <div class="flex p-9">
    <div class="w-30">
      <SideBar />
    </div>

    <div class="flex-grow w-full">
      <NavBar />
      <nuxt />
    </div>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  components: {
    SideBar: () => import("~/components/partials/SideBar"),
    NavBar: () => import("~/components/partials/NavBar"),
  },
};
</script>
