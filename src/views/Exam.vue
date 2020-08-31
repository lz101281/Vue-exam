<template>
    <div class="exam_content">
        <a-row :gutter="40">
            <a-col :span="18" style="background: white; padding: 15px;">
                <div v-for="(item, index) in data" :key="item.option">
                    <Radio v-if="item.type === 'radio'" :data="item" :order="index + 1" />
                    <Checkbox v-if="item.type === 'checkbox'" :data="item" :order="index + 1" />
                    <Describe v-if="item.type === 'describe'" :data="item" :order="index + 1" />
                </div>
            </a-col>
            <a-col :span="6">
                <AnswerSheet :data="data" />
            </a-col>
        </a-row>
    </div>
</template>

<script>
// @ is an alias to /src
import Radio from "@/components/Radio"
import Checkbox from "@/components/Checkbox"
import Describe from "@/components/Describe"
import AnswerSheet from "@/components/AnswerSheet"

export default {
    name: "Exam",
    components: {
        Radio,
        Checkbox,
        Describe,
        AnswerSheet,
    },
    props: ["data"],
}
</script>
<style>
.exam_content {
    width: 1170px;
    margin: 0 auto;
}
</style>
