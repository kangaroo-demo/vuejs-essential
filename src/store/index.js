import Vue from 'vue'
import Vuex from 'vuex'
import ls from '../utils/localStorage'
import router from '../router'
// 引入 actions.js 的所有导出
import * as moreActions from './actions'
import * as moreGetters from './getters'
Vue.use(Vuex)

const state = {
    user: ls.getItem('user'),
    auth: ls.getItem('auth'),
    // 所有文章状态
    articles: ls.getItem('articles')
}

// 添加 getters
const getters = {
    getArticleById: (state, getters) => (id) => {
        let articles = getters.computedArticles

        if (Array.isArray(articles)) {
            articles = articles.filter(article => +id === +article.articleId)
            return articles.length ? articles[0] : null
        } else {
            return null
        }
    },
    ...moreGetters
}

const mutations = {
    UPDATE_USER(state, user) {
        state.user = user
        ls.setItem('user', user)
    },
    UPDATE_AUTH(state, auth) {
        state.auth = auth
        ls.setItem('auth', auth)
    },
    UPDATE_ARTICLES(state, articles) {
        state.articles = articles
        ls.setItem('articles', articles)
    }
}

const actions = {
    login({ commit }, user) {
        if (user) commit('UPDATE_USER', user)
        commit('UPDATE_AUTH', true)
        router.push('/')
    },
    logout({ commit}) {
        commit('UPDATE_AUTH', false)
        router.push({ name: 'Home', params: { logout: true } })
    },
    // 更新个人信息
    updateUser({ state, commit }, user) {
        const stateUser = state.user
        if (stateUser && typeof stateUser === 'object') {
            user = {...stateUser, ...user}
        }
        commit('UPDATE_USER', user)
    },
    // 使用对象展开运算符混入 moreActions
    ...moreActions
}

const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})

export default store