import Vue from "vue";
import Vuex from "vuex";
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

const state = {
	originalBranches: [],
	chosenBranch: '',
	filteredBranches: [],
	pullResult: true
}

Vue.use(Vuex);

export function createStore() {
	const store = new Vuex.Store({
		state,
		actions,
		mutations,
		getters
	});
	return store;
}