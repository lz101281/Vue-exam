<template>
    <div :style="{ width: '100%', marginTop: order === 1 ? '0px' : '20px' }">
        <div>
            <span>{{ order }}</span>
            .
            <span>{{ data.title }}</span>
        </div>
        <div class="content">
            <a-radio-group v-model="value">
                <a-radio v-for="item in data.data" :key="item.option" class="options" :value="item.option">
                    {{ item.title }}
                </a-radio>
            </a-radio-group>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: "",
            title: "下列哪个是浏览器最强语言？",
        }
    },

    props: ["data", "order"],

    methods: {
        submitData() {
            console.log(this.value)
        },
    },
}
</script>

<style scoped>
.content {
    margin-top: 10px;
}

.options {
    width: 100%;
    margin-top: 10px;
}
</style>
