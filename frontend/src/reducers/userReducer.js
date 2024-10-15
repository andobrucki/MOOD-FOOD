export const userInitialState = {
	user: {},
	isUserLoggedIn: false,
};

export const userReducer = (state, action) => {
	switch (action.type) {
		case 'LOGIN_SUCCESS':
			return {
				user: action.payload.user,
				isUserLoggedIn: true,
			};

		case 'LOGOUT':
			return userInitialState;

		default:
			return state;
	}
};
