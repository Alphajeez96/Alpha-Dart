<template>
  <div>
    <div class="loader mx-auto my-40" v-if="$fetchState.pending"></div>
    <div class="mt-10 flex flex-wrap justify-between" v-else-if="tasks.length">
      <!-- Cards here -->
      <div class="w-31 mb-5" v-for="task in tasks" :key="task.uuid">
        <div class="card-holder p-5">
          <div class="flex items-center">
            <!-- title here -->
            <div class="mr-auto">
              <input
                v-if="activeTask.uuid === task.uuid"
                type="text"
                v-model="payload[task.uuid]"
                class="border-none focus:outline-none bg-primary-grey px-3 h-10 rounded-md w-full"
              />
              <p
                v-else
                class="text-sm text-primary-black font-semibold"
                @dblclick="handleTask(task, 'edit')"
              >
                {{ task.title }}
              </p>
            </div>

            <!-- Icon here -->
            <img
              :src="
                require(`~/assets/images/${
                  activeTask.uuid === task.uuid ? 'save' : 'edit'
                }.png`)
              "
              alt="edit"
              class="h-5 cursor-pointer"
              @click="
                handleTask(
                  task,
                  activeTask.uuid === task.uuid ? 'save' : 'edit'
                )
              "
            />
          </div>

          <!-- Task Description Here -->
          <div class="my-5">
            <p class="text-sm text-primary-variation2">
              {{ task.description }}
            </p>
          </div>

          <div class="flex items-center">
            <!-- Date Here -->
            <div class="flex items-center">
              <img src="~/assets/images/flag.svg" alt="flat" class="pt-0.5" />

              <p class="text-xs ml-1">{{ task.createdAt | formatDateText }}</p>
            </div>

            <div class="ml-auto">
              <!-- Pill Here -->
              <Pill
                :completed="task.completed"
                :text="task.completed ? 'Completed' : 'Pending'"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Empty Text Here -->
    <div v-else>
      <p class="text-center text-primary-black font-semibold my-40">
        No tasks to show
      </p>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "Dashboard",
  layout: "Dashboard",

  filters: {
    formatDateText(value) {
      if (!value) return;
      return moment(value).format(" dddd, MMMM DD, YYYY ");
    },
  },

  data: () => ({
    tasks: [],
    payload: [],
    activeTask: {},
  }),

  async fetch() {
    const response = await this.$axios.get("/api/tasks/list");
    this.tasks = response.data?.tasks;
  },

  methods: {
    handleTask(task, action) {
      if (action === "edit") {
        this.activeTask = task;
        this.payload[task.uuid] = task.title;
      }

      if (action === "save") {
        this.activeTask = {};
        this.updateTask(task);
      }
    },
    async updateTask(task) {
      try {
        const response = await this.$axios.post(
          `/api/tasks/edit/${task.uuid}`,
          {
            title: this.payload[task.uuid],
          }
        );

        if (response.status === 200) {
          this.$toast.success("Task updated successfully");
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.card-holder {
  @apply bg-white rounded-lg h-48 flex justify-between flex-col;
  box-shadow: 0px 10px 30px rgba(57, 85, 120, 0.1);
}
</style>
