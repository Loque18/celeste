import { ADD_ADDRESS } from "../constants";

const defaultState = {
	list: {},
};

// eslint-disable-next-line default-param-last
const reducer = (state = defaultState, { type, payload }) => {
	switch (type) {
		case ADD_ADDRESS:
			return {
				...state,
				list: {
					...state.list,
					[payload.key]: payload.address,
				},
			};
		default:
			return { ...state };
	}
};

export default reducer;
