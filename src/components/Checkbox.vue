<template>
    <div :style="{ width: '100%', marginTop: order === 1 ? '0px' : '20px' }">
        <div>
            <span>{{ order }}</span>
            .
            <span>{{ data.title }}</span>
        </div>
        <div class="content">
            <Button>{{ data.title }}</Button>
            <!-- <a-checkbox-group v-model="values">
                <a-checkbox class="options" v-for="item in data.data" :key="item.option" :label="item.option" :value="item.option">{{
                    item.title
                }}</a-checkbox>
            </a-checkbox-group> -->
        </div>
        <!-- <el-button style="margin-top: 10px" size="medium" type="primary" @click="submitData">提交</el-button> -->
    </div>
</template>

<script>
import { Button } from "ant-design-vue"

export default {
    data() {
        return {
            values: [],
            title: "下列哪个是浏览器最强语言？",
        }
    },

    props: ["data", "order"],

    methods: {
        submitData() {
            console.log(this.values)
        },
    },

    components: [Button],
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
