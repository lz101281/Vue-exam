<template>
    <div :style="{ width: '100%', marginTop: order === 1 ? '0px' : '20px' }">
        <div>
            <span>{{ order }}</span>
            .
            <span>{{ data.title }}</span>
        </div>
        <div class="content">
            <a-radio-group v-model="value" @change="changeValue">
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

.options {
    width: 100%;
    margin-top: 10px;
}
</style>
