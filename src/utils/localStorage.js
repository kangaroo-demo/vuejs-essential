/**
 * 本地缓存处理工具类
 * @package /src/utils/localStorage
 * @description 对 localStorage 做了简单的封装，以便于存取数据
 */

const ls = localStorage

export default {
    setItem(name, value) {
        ls.setItem(name, JSON.stringify(value))
    },
    getItem(name) {
        try {
            return JSON.parse(ls.getItem(name))
        } catch (e) {
            return null
        }
    },
    removeItem(name) {
        ls.removeItem(name)
    }
}