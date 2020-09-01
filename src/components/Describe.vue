<template>
    <div :style="{ width: '100%', marginTop: order === 1 ? '0px' : '20px' }">
        <div>
            <span>{{ order }}</span>
            .
            <span>{{ data.title }}</span>
        </div>
        <div class="content">
            <a-input
                type="textarea"
                class="textarea_content"
                placeholder="请输入内容"
                v-model="value"
                @change="changeValue"
            >
            </a-input>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: "",
        }
    },

    props: {
        data: Object,
        order: Number,
        submitData: Function,
    },

    methods: {
        changeValue() {
            this.submitData(this.order, this.data.type, this.value)
        },
    },
}
</script>

<style scoped>
.content {
    margin-top: 10px;
}

.textarea_content {
    width: 100%;
    margin-top: 10px;
}
</style>
