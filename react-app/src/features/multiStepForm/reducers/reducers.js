function addonReducer(state, action) {
	switch (action.type) {
		case "added_addon":
			return [...state, action.id];

		case "removed_addon":
			return state.filter((id) => id != action.id);
	}
}

function planReducer(state, action) {
	switch (action.type) {
		case "selected_plan":
			return {
				...state,
				id: action.planId,
			};

		case "toggled_duration":
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

		case "changed_step":
			return action.step;
	}
}

export { stepReducer, planReducer, addonReducer };
