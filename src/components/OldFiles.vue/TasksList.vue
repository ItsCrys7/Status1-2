<script setup>
import TaskItem from "./TaskItem.vue"
import AddNewTask from "./AddNewTask.vue"

const props = defineProps({
  columnName: {
    type: String,
    default: ""
  },
  columnId: {
    type: Number,
    default: 0
  }
})

import { useKanban } from "../../stores/kanban"
const kanbanStore = useKanban()

function deleteList() {
  kanbanStore.deleteList(props.columnId)
}
</script>

<template>
  <div class="ms-2">
    <div
      class="flex max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800"
    >
      <h6 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {{ columnName }}
      </h6>

      <button
        class="ms-4 rounded-lg bg-red-700 px-4 py-2 text-sm font-medium text-white hover:bg-red-800 focus:ring-4 focus:ring-red-300 focus:outline-none dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
        @click="deleteList"
      >
        <i class="bi bi-x-circle"></i>
      </button>
    </div>
    <div class="mt-3 flex flex-col">
      <div v-for="(task, index) in kanbanStore.lists[columnId].tasks" :key="index">
        <TaskItem :taskName="task.name"></TaskItem>
      </div>
      <AddNewTask :columnId="columnId"></AddNewTask>
    </div>
  </div>
</template>
