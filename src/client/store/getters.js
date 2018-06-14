function extractBranchName(str) {
	return str ? str.split("/")[1] : 'Please choice a branch.'
}

const getters = {
	getChosenBranch: state => {
		return extractBranchName(state.chosenBranch)
	}
}

export default getters