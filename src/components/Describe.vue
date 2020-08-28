<template>
    <div :style="{ width: '100%', marginTop: order === 1 ? '0px' : '20px' }">
        <div>
            <span>{{ order }}</span>
            .
            <span>{{ data.title }}</span>
        </div>
        <div class="content">
            <el-input type="textarea" class="textarea_content" :autosize="{ minRows: 2, maxRows: 4 }" placeholder="请输入内容" v-model="value">
            </el-input>
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

.textarea_content {
    width: 100%;
    margin-top: 10px;
}
</style>
