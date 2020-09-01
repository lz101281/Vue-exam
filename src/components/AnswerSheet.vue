<template>
    <div style="background: white; padding-bottom: 20px">
        <Countdown :value="deadline" style="padding: 10px 0px" :onFinish="onFinish" />
        <a-row :gutter="8" style="padding: 0px 10px 10px;">
            <a-col :span="4" v-for="(item, index) in data" :key="index">
                <a-button
                    style="text-align: center; padding: 0px; margin-top: 10px"
                    block
                    :type="item.answer && item.answer.length > 0 ? 'primary' : ''"
                >
                    {{ index + 1 }}
                </a-button>
            </a-col>
        </a-row>
        <a-button
            style="text-align: center; margin: 4px 8px; width: -webkit-fill-available; padding: 4px"
            type="primary"
            @click="doneExam"
        >
            交卷
        </a-button>
    </div>
</template>

<script>
import Countdown from "@/components/CountDown"
export default {
    data() {
        return {
            deadline: Date.now() + 1000 * 300 * 100,
        }
    },
    methods: {
        onFinish() {
            this.$message.success("考试结束了")
        },
    },
    props: {
        data: Array,
        doneExam: Function,
    },
    components: {
        Countdown,
    },
}
</script>

<style></style>
