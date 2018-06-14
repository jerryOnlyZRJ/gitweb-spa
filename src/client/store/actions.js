import request from "axios"

const actions = {
	choiceBranch: ({
		commit
	}, payload) => commit('CHOICE_BRANCH', payload),
	filterBranches: ({
		commit
	}, payload) => {
		commit('FILTER_BRANCHES', payload)
	},
	initBranches: ({
		commit
	}) => {
		return request.get('/user/getbranchlist').then(res => {
			commit('INIT_BRANCHES', res.data.branchList)
			commit('CHOICE_BRANCH', res.data.branchList[0])
		})
	}
}

export default actions