const mutations = {
	CHOICE_BRANCH: (state, {
		branch
	}) => state.chosenBranch = payload.branch,
	FILTER_BRANCHES: (state, {
		keyword
	}) => {
		function filter(keyword, arr) {
			const resultArr = arr.filter(item => {
				const lowerKey = keyword.toLowerCase();
				const lowerItem = item.toLowerCase();
				return lowerItem.indexOf(lowerKey) != -1 ? true : false;
			});
			return resultArr;
		}
		state.filteredBranches = filter(payload.keyword, state.filteredBranches)
	},
	INIT_BRANCHES: (state, branches) => {
		state.filteredBranches = branches
	}
}

export default mutations