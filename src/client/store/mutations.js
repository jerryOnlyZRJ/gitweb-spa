const mutations = {
	CHOICE_BRANCH: (state, payload) => state.chosenBranch = payload.branch,
	FILTER_BRANCHES: (state, payload) => {
		function filter(keyword, arr) {
			const resultArr = arr.filter(item => {
				const lowerKey = keyword.toLowerCase();
				const lowerItem = item.toLowerCase();
				return lowerItem.indexOf(lowerKey) != -1 ? true : false;
			});
			return resultArr;
		}
		state.filteredBranches = filter(payload.keyword, state.originalBranches)
	},
	INIT_BRANCHES: (state, branches) => {
		state.originalBranches = branches
		state.filteredBranches = branches
	},
	CHANGE_PULL_RESULT: (state, result) => {
		state.pullResult = result
	}
}

export default mutations