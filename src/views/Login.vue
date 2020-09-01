<template>
    <div
        :style="{
            width: '100%',
            height: ' 100%',
            position: 'relative',
            background: `url(${backgroundUrl})`,
        }"
    >
        <a-form layout="vertical" :form="form" @submit="handleSubmit" class="loginWrap">
            <h1
                style="text-align: center; line-height: 70px; font-family:'Microsoft YaHei UI Bold', 'Microsoft YaHei UI Regular', 'Microsoft YaHei UI'"
            >
                考试系统
            </h1>
            <a-form-item :validate-status="userNameError() ? 'error' : ''" :help="userNameError() || ''">
                <a-input
                    v-decorator="[
                        'userName',
                        {
                            rules: [{ required: true, message: '请输入用户名!' }],
                        },
                    ]"
                    size="large"
                    placeholder="用户名"
                >
                    <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
                </a-input>
            </a-form-item>
            <a-form-item :validate-status="passwordError() ? 'error' : ''" :help="passwordError() || ''">
                <a-input
                    v-decorator="[
                        'password',
                        {
                            rules: [
                                {
                                    required: true,
                                    message: '请输入密码!',
                                },
                            ],
                        },
                    ]"
                    size="large"
                    type="password"
                    placeholder="密码"
                >
                    <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
                </a-input>
            </a-form-item>
            <a-form-item>
                <a-checkbox
                    v-decorator="[
                        'remember',
                        {
                            valuePropName: 'checked',
                            initialValue: true,
                        },
                    ]"
                >
                    记住密码
                </a-checkbox>
            </a-form-item>
            <a-form-item>
                <a-button
                    type="primary"
                    html-type="submit"
                    :disabled="hasErrors(form.getFieldsError())"
                    style="width: 100%"
                    size="large"
                >
                    登录
                </a-button>
            </a-form-item>
        </a-form>
    </div>
</template>

<script>
import backgroundUrl from "../assets/login/background.svg"
function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field])
}
export default {
    data() {
        return {
            hasErrors,
            form: this.$form.createForm(this, { name: "exam_login" }),
            backgroundUrl,
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.form.validateFields()
        })
    },
    methods: {
        userNameError() {
            const { getFieldError, isFieldTouched } = this.form
            return isFieldTouched("userName") && getFieldError("userName")
        },
        passwordError() {
            const { getFieldError, isFieldTouched } = this.form
            return isFieldTouched("password") && getFieldError("password")
        },
        handleSubmit(e) {
            e.preventDefault()
            this.form.validateFields((err, values) => {
                if (!err) {
                    this.$router.push("/")
                    console.log("用户名，密码: ", values)
                }
            })
        },
    },
}
</script>
<style scoped>
.loginWrap {
    width: 400px;
    padding: 20px;
    background: #fff;
    position: absolute;
    top: 200px;
    left: 50%;
    margin-left: -200px;
}
</style>
