function stepReducer(state, action) {
	switch (action.type) {
		case "proceeded_step":
			return state + 1;

		case "reversed_step":
			return state - 1;
	}
}

export { stepReducer };
