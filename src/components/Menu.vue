<template>
    <div>
        <a-menu v-model="current" mode="horizontal" style="height:60px">
            <a-menu-item key="alipay">
                <a href="https://antdv.com" target="_blank" rel="noopener noreferrer">题库</a>
            </a-menu-item>
            <a-sub-menu>
                <span slot="title" class="submenu-title-wrapper">
                    <a-icon type="setting" />
                    考试
                </span>
                <a-menu-item-group title="Item 1">
                    <a-menu-item key="setting:1">
                        Option 1
                    </a-menu-item>
                    <a-menu-item key="setting:2">
                        Option 2
                    </a-menu-item>
                </a-menu-item-group>
                <a-menu-item-group title="Item 2">
                    <a-menu-item key="setting:3">
                        Option 3
                    </a-menu-item>
                    <a-menu-item key="setting:4">
                        Option 4
                    </a-menu-item>
                </a-menu-item-group>
            </a-sub-menu>
        </a-menu>
    </div>
</template>
<script>
export default {
    data() {
        return {
            current: ["alipay"],
        }
    },
}
</script>
