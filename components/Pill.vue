<template>
  <div
    class="holder bg-primary-green text-primary-darkGreen"
    :class="{
      'bg-primary-red text-primary-darkRed': !completed,
    }"
  >
    <span> {{ text }}</span>
  </div>
</template>

<script>
export default {
  name: "Pill",

  props: {
    text: {
      type: String,
      default: "",
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.holder {
  @apply flex items-center justify-center h-7 w-24 text-xs font-medium rounded-full;
}
</style>
