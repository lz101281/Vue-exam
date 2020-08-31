import Vue from "vue"
import { Button, Checkbox, Radio, Input, message, notification, Modal, Row, Col, Statistic } from "ant-design-vue"

Vue.prototype.$message = message
Vue.prototype.$notification = notification
Vue.prototype.$info = Modal.info
Vue.prototype.$success = Modal.success
Vue.prototype.$error = Modal.error
Vue.prototype.$warning = Modal.warning
Vue.prototype.$confirm = Modal.confirm
Vue.prototype.$destroyAll = Modal.destroyAll

Vue.use(Button)
Vue.use(Checkbox)
Vue.use(Input)
Vue.use(Modal)
Vue.use(Radio)
Vue.use(Row)
Vue.use(Col)
Vue.use(Statistic)
