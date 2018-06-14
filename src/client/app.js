import Vue from 'vue'
import App from './App.vue'
import {
	createRouter
} from './router'
import {
	createStore
} from './store'

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')