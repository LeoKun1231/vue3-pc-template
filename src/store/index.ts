/*
 * @Author: hqk
 * @Date: 2022-12-21 18:05:02
 * @LastEditors: hqk
 * @LastEditTime: 2022-12-23 19:01:52
 * @Description:
 */
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const store = createPinia()
//持久化 也可以选择vueuse
store.use(piniaPluginPersistedstate)

export default store
