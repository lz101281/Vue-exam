<template>
    <a-layout class="home">
        <Header />
        <a-layout-content>
            <Exam :data="datas" />
        </a-layout-content>
        <Footer />
    </a-layout>
</template>

<script>
import Exam from "./Exam"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

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
            ],
        }
    },
    components: {
        Exam,
        Footer,
        Header,
    },
}
</script>

<style scoped>
.home {
    width: 100%;
    height: 100%;
}
</style>
