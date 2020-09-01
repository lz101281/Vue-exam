<template>
    <div class="exam_content">
        <a-row>
            <a-col :span="18" style="background: white; padding: 15px;">
                <div v-for="(item, index) in data" :key="item.option">
                    <Radio v-if="item.type === 'radio'" :data="item" :order="index + 1" :submitData="submitData" />
                    <Checkbox
                        v-if="item.type === 'checkbox'"
                        :data="item"
                        :order="index + 1"
                        :submitData="submitData"
                    />
                    <Describe
                        v-if="item.type === 'describe'"
                        :data="item"
                        :order="index + 1"
                        :submitData="submitData"
                    />
                </div>
            </a-col>
        </a-row>
        <div :style="{ position: 'fixed !important', top: '60px', right: ASPosition, width: '260px' }">
            <AnswerSheet :data="values" :doneExam="doneExam" />
        </div>
    </div>
</template>

<script>
import Radio from "@/components/Radio"
import Checkbox from "@/components/Checkbox"
import Describe from "@/components/Describe"
import AnswerSheet from "@/components/AnswerSheet"

export default {
    name: "Exam",
    data() {
        return {
            ASPosition: (window.innerWidth - 1200) / 2 + "px",
            values: [],
        }
    },
    components: {
        Radio,
        Checkbox,
        Describe,
        AnswerSheet,
    },
    props: ["data"],
    methods: {
        getPosition() {
            this.ASPosition = (window.innerWidth - 1200) / 2 + "px"
        },
        doneExam() {
            let done = this.values.some(item => !item.answer || item.answer.length === 0)
            console.log(done)
            if (!done) {
                console.log(this.values)
                this.$message.success("考试结束了")
            } else {
                this.$confirm({
                    title: "还有题目未完成，确认提交试卷?",
                    onOk() {
                        console.log("OK")
                    },
                    onCancel() {
                        console.log("Cancel")
                    },
                })
            }
        },
        submitData(order, type, value) {
            this.values[order - 1].answer = value
        },
    },
    created() {
        window.addEventListener("resize", this.getPosition)
        this.getPosition()
        console.log(this)
        this.data && this.data.map((item, index) => this.values.push({ order: index + 1, answer: "" }))
    },
}
</script>
<style>
.exam_content {
    width: 1200px;
    margin: 0 auto;
    /* height: 20000px; */
    margin-top: 60px;
}
</style>
