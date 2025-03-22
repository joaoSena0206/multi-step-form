function planReducer(state, action) {
	switch (action.type) {
		case "selected_plan":
			return {
				...state,
				id: action.planId,
			};

		case "selected_duration":
			return {
				...state,
				duration: action.duration,
			};
	}
}

function stepReducer(state, action) {
	switch (action.type) {
		case "proceeded_step":
			return state + 1;

		case "reversed_step":
			return state - 1;
	}
}

export { stepReducer, planReducer };
