import Vue from 'vue'
import Router from 'vue-router'
import BranchStage from '../components/BranchStage/BranchStage'

Vue.use(Router)

export function createRouter() {
	return new Router({
		mode: 'history',
		routes: [{
			path: '/',
			name: 'BranchStage',
			component: BranchStage
		}]
	})
}