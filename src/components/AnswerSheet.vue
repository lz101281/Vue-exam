<template>
    <div style="border: 1px solid pink; padding: 8px 4px;">
        <span class="smallBlock" v-for="(item, index) in data" :key="index">
            <!-- <div > -->
            {{ index + 1 }}
            <!-- </div> -->
        </span>
    </div>
</template>

<script>
export default {
    props: ["data"],
}
</script>

<style>
.smallBlock {
    width: 25px;
    height: 25px;
    background: #409eff;
    border-radius: 5px;
    text-align: center;
    line-height: 25px;
    cursor: pointer;
    display: inline-block;
    margin: 4px 8px;
    color: white;
}
</style>
