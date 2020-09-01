<template>
    <a-layout-header class="header" :style="{ height: headerHeight + 'px' }">
        <div style="width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center;">
            <Menu />
            <a-dropdown placement="bottomCenter">
                <a-avatar :size="50" icon="user" style="cursor:pointer" />
                <a-menu slot="overlay">
                    <a-menu-item>
                        <a href="javascript:;">个人信息</a>
                    </a-menu-item>
                    <a-menu-item>
                        <a href="javascript:;" @click="loginOut">退出登录</a>
                    </a-menu-item>
                </a-menu>
            </a-dropdown>
        </div>
    </a-layout-header>
</template>

<script>
import config from "@/config/config"
import Menu from "@/components/Menu"
export default {
    components: {
        Menu,
    },
    data() {
        return {
            ...config.layout,
        }
    },
    methods: {
        loginOut() {
            this.$router.push("/login")
        },
    },
}
</script>

<style scoped>
.header {
    background: #fff;
    border-bottom: 1px solid #e5e9ea;
    box-shadow: rgba(0, 0, 0, 0.05) 1px 1px 3px;
    position: fixed;
    top: 0px;
    width: 100%;
    z-index: 999;
    padding: 0px;
}
</style>
