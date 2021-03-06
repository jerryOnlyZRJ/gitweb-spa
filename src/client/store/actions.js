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
	},
	changePullResult: ({
		commit,
		state
	}, router) => {
		return request
			.get(`/user/pullbranch?branch=${state.chosenBranch.trim()}`)
			.then(res => {
				commit('CHANGE_PULL_RESULT', res.data.success)
				router.push('/pullresult')
			}).catch(err => {
				commit('CHANGE_PULL_RESULT', false)
				router.push('/pullresult')
				console.log(err)
			})
	}
}

export default actions