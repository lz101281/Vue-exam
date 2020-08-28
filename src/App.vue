<template>
    <div id="app">
        <Home />
    </div>
</template>

<script>
import Home from "@/views/Home"

export default {
    name: "app",
    components: {
        Home,
    },
}
</script>

<style>
#app {
    width: 100%;
    height: 100%;
}
</style>
