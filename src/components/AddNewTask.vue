<script setup>
const props = defineProps({
    columnId: {
        type: Number,
        default: 0
    }
})
import { ref } from 'vue';
const inputMode = ref(false)
function changeMode() {
    inputMode.value = !inputMode.value
    taskName.value = ""
}

import { useKanban } from '../stores/status2';
const kanbanStore = useKanban()
const taskName = ref("")
const isError = ref(false)
function saveTask() {
    const checkname = new RegExp("^[a-zA-Z0-9 ]*$")
    if (!checkname.test(taskName.value)) {
        isError.value = true
        setTimeout(() => {
            isError.value = false
        }, 4000)
        return

    }
    kanbanStore.addNewTask(taskName.value, props.columnId)

    changeMode();
}

function handleEnter(event) {
    event.preventDefault();
    saveTask();
}
</script>

<template>
    <button v-if="!inputMode"
        class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
        @click="changeMode">
        <span
            class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
            <i class="bi bi-plus-circle"></i> add task
        </span>
    </button>



    <form v-else class="max-w-md mx-auto" @submit.prevent="saveTask">
        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Add new
            task</label>
        <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none text-gray-300">
                <i class="bi bi-layout-sidebar-inset"></i>
            </div>
            <input id="default-search" v-model="taskName" type="search"
                class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Add new column..." required @keydown.enter="handleEnter" />
            <button
                class="text-white absolute end-2.5 bottom-2.5 bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                @click.prevent="changeMode">

                <i class="bi bi-x-circle w-5"></i>
            </button>
            <button type="submit"
                class="text-white absolute end-16.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add</button>

        </div>
    </form>
    <div v-if="isError" class="text-red-500 text-sm mt-2">
        Task name should only contain letters and numbers.
    </div>


</template>