<template>
    <div>
        <a-statistic-countdown :title="title" :value="value" style="width: 100%; text-align: center" @finish="finish" />
    </div>
</template>

<script>
export default {
    props: {
        value: Number,
        title: String,
        onFinish: Function,
    },
    methods: {
        finish() {
            this.onFinish()
        },
    },
}
</script>

<style></style>
