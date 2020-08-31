<template>
    <div class="home">
        <Exam :data="datas" />
    </div>
</template>

<script>
import Exam from "./Exam"

export default {
    name: "Home",
    data() {
        return {
            datas: [
                {
                    data: [
                        { title: "Java", option: "A" },
                        { title: "Go", option: "B" },
                        { title: "JavaScript", option: "C" },
                        { title: "C#", option: "D" },
                    ],
                    title: "下列哪个是浏览器最强语言？",
                    type: "radio",
                },
                {
                    data: [
                        { title: "Java", option: "A" },
                        { title: "Go", option: "B" },
                        { title: "JavaScript", option: "C" },
                        { title: "C#", option: "D" },
                    ],
                    title: "下列哪个是浏览器最强语言？",
                    type: "checkbox",
                },
                {
                    title: "什么是浏览器最强语言？",
                    type: "describe",
                },
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
            ],
        }
    },
    components: {
        Exam,
    },
}
</script>

<style scoped>
.home {
    width: 100%;
    height: 100%;
}
</style>
