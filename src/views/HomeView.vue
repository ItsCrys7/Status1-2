<script setup>

import { onMounted, ref } from "vue"

onMounted(() => {
//     const ws = new WebSocket('ws://localhost:3001')

// ws.onopen = (ws) => {
//   console.log(`Connected to server: ${ws}`)
// }

// ws.onmessage = (data) => {
//     messages.value = messages.value + "\n" + data.data
//     console.log(`Message from server: ${data.data}`)
// }   
// mutat in ws.js
})

const messages = ref("")

</script>

<template>
    <h1>Home page</h1>

<pre>
    {{messages}}
</pre>
</template>